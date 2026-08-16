/**
 * Trung tâm ảnh của trang.
 *
 * Ảnh chưa có → để null, chỗ đó tự render khung placeholder có nhãn.
 * Khi có ảnh: bỏ file vào /public/ rồi đổi null thành "/ten-file.png".
 * Chỉ sửa duy nhất file này, không cần đụng component.
 */
export type ImageKey =
  | "portrait"
  | "aboutRoom"
  | "aboutHands"
  | "aboutJoint"
  | "serviceDisc"
  | "serviceNeck"
  | "serviceSpine"
  | "serviceSport"
  | "servicePostOp"
  | "serviceScoliosis"
  | "storyAnh"
  | "storyMinh"
  | "storyHa";

export const IMAGES: Record<ImageKey, string | null> = {
  portrait: "/images/phuong-duy-care.png", // Chân dung Phương Duy do trung tâm cung cấp
  aboutRoom: "/images/senior-accessible-space.png",
  aboutHands: "/images/senior-gentle-guidance.png",
  aboutJoint: "/images/senior-seated-foot-movement.png",
  serviceDisc: "/images/senior-sit-stand.png",
  serviceNeck: "/images/senior-neck-rest.png",
  serviceSpine: "/images/senior-balance-handrail.png",
  serviceSport: "/images/senior-walk-support.png",
  servicePostOp: "/images/senior-seated-motion.png",
  serviceScoliosis: "/images/senior-home-support.png",
  storyAnh: "/images/senior-independent-stand.png",
  storyMinh: "/images/senior-walk-with-family.png",
  storyHa: "/images/senior-home-setup.png",
};

/** Các ảnh hiện tại là ảnh ngang/ảnh chụp, đều dùng object-cover. */
export const CONTAIN: ReadonlySet<ImageKey> = new Set<ImageKey>();
