import Image from "next/image";
import { CONTAIN, IMAGES, type ImageKey } from "@/lib/images";

type Props = {
  id: ImageKey;
  alt: string;
  /** Nhãn hiện trong khung chờ ảnh, mô tả ảnh cần chụp. */
  note?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Khung quá nhỏ để chứa chữ (avatar, icon) — chỉ vẽ khung rỗng. */
  bare?: boolean;
  /**
   * "cover" cho ảnh chụp thật, lấp đầy khung.
   * "contain" cho ảnh tách nền và hình 3D — object-cover sẽ cắt cụt chúng,
   * nên khung tự thêm nền nhạt và chừa lề để hình đứng trọn.
   * Bỏ trống thì lấy theo danh sách CONTAIN trong lib/images.ts.
   */
  fit?: "cover" | "contain";
};

/**
 * Ảnh có khung chờ. Chưa khai báo trong lib/images.ts thì render khung gạch đứt
 * kèm ghi chú, để biết chỗ này cần ảnh gì.
 */
export function Figure({
  id,
  alt,
  note,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority,
  bare,
  fit,
}: Props) {
  const src = IMAGES[id];

  if (!src) {
    return (
      <div
        className={`relative overflow-hidden bg-[repeating-linear-gradient(135deg,transparent,transparent_9px,rgba(20,32,26,0.05)_9px,rgba(20,32,26,0.05)_10px)] border border-dashed border-line ${className}`}
        role="img"
        aria-label={`Chỗ dành cho ảnh: ${alt}`}
      >
        {!bare && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-4 text-center">
            <span className="label text-muted">Ảnh bổ sung sau</span>
            <span className="text-sm text-muted max-w-[26ch] leading-snug">{note ?? alt}</span>
          </div>
        )}
      </div>
    );
  }

  const contain = (fit ?? (CONTAIN.has(id) ? "contain" : "cover")) === "contain";

  return (
    <div
      className={`relative overflow-hidden ${contain ? "bg-brand/[0.06] p-4" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={contain ? "object-contain p-2" : "object-cover"}
      />
    </div>
  );
}
