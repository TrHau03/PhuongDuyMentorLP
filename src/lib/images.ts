/**
 * Trung tâm ảnh của trang.
 *
 * Ảnh chưa có → để null, chỗ đó tự render khung placeholder có nhãn.
 * Khi có ảnh: bỏ file vào /public/images/ rồi đổi null thành "/images/ten-file.jpg".
 * Chỉ sửa duy nhất file này, không cần đụng component.
 */
export type ImageKey =
  | "portrait"
  | "aboutRoom"
  | "aboutHands"
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
  portrait: null, // Chân dung Phương Duy, dọc 3:4
  aboutRoom: null, // Phòng tập / phòng trị liệu, ngang 4:3
  aboutHands: null, // Cận cảnh thao tác trị liệu bằng tay, vuông
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
