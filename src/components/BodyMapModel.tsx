"use client";

import {
  ContactShadows,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { Box3, Mesh, MeshStandardMaterial, Vector3 } from "three";

type ModelView = "body" | "spine";

type BodyMapModelProps = {
  activeId: string;
  modelView: ModelView;
  onRegionSelect: (id: string) => void;
};

type Vec3 = [number, number, number];

/** Các điểm neo nằm phía trước cơ thể để vẫn dễ chạm sau khi người dùng xoay mô hình. */
const hotspotPositions: Record<string, Vec3> = {
  "co-vai-gay": [0, 1.36, 0.48],
  vai: [0.75, 1.08, 0.44],
  "khuyu-co-tay": [-1.17, 0.55, 0.42],
  "lung-tren": [0, 0.72, 0.5],
  "that-lung": [0, 0.35, 0.52],
  hong: [-0.35, -0.3, 0.44],
  goi: [0.42, -1.24, 0.35],
  "co-chan": [0.42, -1.92, 0.28],
};

const spineHotspotPositions: Record<string, Vec3> = {
  "lung-tren": [0.24, 0.7, 0.48],
  "that-lung": [0.24, -0.62, 0.48],
};

export function BodyMapModel({
  activeId,
  modelView,
  onRegionSelect,
}: BodyMapModelProps) {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-[16px] border border-line bg-[radial-gradient(circle_at_50%_20%,#fafdff_0%,#e8effa_68%,#dbe7f7_100%)] sm:h-[390px]">
      <Canvas
        camera={{ fov: 36, position: [0, 0.4, 9.2] }}
        className="relative"
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        shadows="basic"
        style={{ touchAction: "pan-y" }}
      >
        <ambientLight intensity={1.5} />
        <hemisphereLight args={["#f8fbff", "#7190b8", 1.45]} />
        <directionalLight
          castShadow
          intensity={2.1}
          position={[4, 5, 4]}
          shadow-mapSize={[512, 512]}
        />
        <directionalLight intensity={0.7} position={[-4, 1, -2]} />

        <Suspense fallback={<ModelLoading modelView={modelView} />}>
          {modelView === "spine" ? (
            <SpinalColumnModel
              activeId={activeId}
              onRegionSelect={onRegionSelect}
            />
          ) : (
            <HumanBodyModel
              activeId={activeId}
              onRegionSelect={onRegionSelect}
            />
          )}
        </Suspense>
        <ContactShadows
          position={[0, -2.38, 0]}
          opacity={0.22}
          scale={4.8}
          blur={2.5}
          far={4}
        />
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={2.6}
          maxDistance={11.5}
          minPolarAngle={0.9}
          maxPolarAngle={2.25}
          target={[0, -0.15, 0]}
          zoomToCursor
        />
      </Canvas>
    </div>
  );
}

function HumanBodyModel({
  activeId,
  onRegionSelect,
}: Omit<BodyMapModelProps, "modelView">) {
  const { scene } = useGLTF("/human_body.glb");
  const model = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((object) => {
      if (!(object instanceof Mesh)) return;

      object.castShadow = true;
      object.receiveShadow = true;
      object.material = new MeshStandardMaterial({
        color: "#82b2e4",
        roughness: 0.42,
        metalness: 0.05,
      });
    });

    return clone;
  }, [scene]);

  return (
    <group scale={1.05}>
      {/** Căn tâm theo bounding box gốc để model đứng chính giữa khung. */}
      <group position={[-0.01, -2.235, -0.016]}>
        <primitive object={model} />
      </group>

      {Object.entries(hotspotPositions).map(([id, position]) => (
        <Hotspot
          key={id}
          active={activeId === id}
          position={position}
          onClick={() => onRegionSelect(id)}
        />
      ))}
    </group>
  );
}

/**
 * Model cột sống được tải riêng khi người dùng chọn chế độ tương ứng. Sau lần
 * đầu, useGLTF giữ model trong cache nên các lần chuyển qua lại gần như tức thì.
 */
function SpinalColumnModel({
  activeId,
  onRegionSelect,
}: Omit<BodyMapModelProps, "modelView">) {
  const { scene } = useGLTF("/the_human_spinal_column.glb");
  const { center, model, scale } = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((object) => {
      if (!(object instanceof Mesh)) return;

      object.castShadow = true;
      object.receiveShadow = true;
    });

    const bounds = new Box3().setFromObject(clone);
    const modelCenter = bounds.getCenter(new Vector3());
    const height = bounds.getSize(new Vector3()).y;

    return {
      center: modelCenter,
      model: clone,
      scale: height > 0 ? 4.25 / height : 1,
    };
  }, [scene]);

  return (
    <group>
      <primitive
        object={model}
        position={[-center.x * scale, -center.y * scale, -center.z * scale]}
        scale={scale}
      />

      {Object.entries(spineHotspotPositions).map(([id, position]) => (
        <Hotspot
          key={id}
          active={activeId === id}
          position={position}
          onClick={() => onRegionSelect(id)}
        />
      ))}
    </group>
  );
}

function ModelLoading({ modelView }: { modelView: ModelView }) {
  return (
    <Html center>
      <div className="whitespace-nowrap rounded-full border border-line bg-paper/95 px-4 py-2 text-[12px] font-medium text-muted shadow-sm">
        Đang tải {modelView === "spine" ? "mô hình cột sống" : "mô hình 3D"}…
      </div>
    </Html>
  );
}

function Hotspot({
  active,
  position,
  onClick,
}: {
  active: boolean;
  position: Vec3;
  onClick: () => void;
}) {
  const color = active ? "#c4553b" : "#03367e";

  return (
    <group position={position}>
      {active && (
        <mesh scale={1.8}>
          <sphereGeometry args={[0.12, 20, 20]} />
          <meshBasicMaterial color={color} transparent opacity={0.2} />
        </mesh>
      )}
      <mesh
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
      >
        <sphereGeometry args={[active ? 0.13 : 0.095, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 0.62 : 0.24}
          roughness={0.28}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/human_body.glb");
