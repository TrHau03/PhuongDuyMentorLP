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
  portrait: "/pd.png", // Chân dung Phương Duy, đã tách nền
  aboutRoom: "/model-2.png", // Phòng trị liệu, dựng isometric
  aboutHands: "/model.png", // Bàn tay đỡ đốt sống
  aboutJoint: "/model-1.png", // Khớp xương
  // Ảnh chụp thật từng ca điều trị — chưa có, giữ null để hiện khung nhắc.
  serviceDisc: null,
  serviceNeck: null,
  serviceSpine: null,
  serviceSport: null,
  servicePostOp: null,
  serviceScoliosis: null,
  storyAnh: null,
  storyMinh: null,
  storyHa: null,
};

/** Ảnh tách nền và hình 3D phải render object-contain, không được cắt cụt. */
export const CONTAIN: ReadonlySet<ImageKey> = new Set<ImageKey>([
  "portrait",
  "aboutRoom",
  "aboutHands",
  "aboutJoint",
]);
