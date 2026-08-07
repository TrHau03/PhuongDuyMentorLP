# Phương Duy Mentor — landing page

Next.js 16 (App Router) + Tailwind 4. Trang một cột dọc, tiếng Việt, cho phòng vật lý trị liệu
kèm 1:1.

## Chạy

```bash
npm run dev     # http://localhost:3000
npm run build   # bản production
npm start
```

## Sửa nội dung

| Cần đổi | Sửa file |
| --- | --- |
| Tên, hotline, Zalo, email, địa chỉ, giờ làm việc | `src/lib/site.ts` → `site` |
| Menu | `src/lib/site.ts` → `nav` |
| Bản đồ cơ thể ở hero (vùng đau, dấu hiệu, phác đồ) | `src/lib/site.ts` → `regions` |
| Số liệu ở hero | `src/lib/site.ts` → `stats` |
| Bằng cấp | `src/lib/site.ts` → `credentials` |
| Danh mục điều trị | `src/lib/site.ts` → `services` |
| Phương pháp | `src/lib/site.ts` → `methods` |
| Lộ trình 5 bước | `src/lib/site.ts` → `journey` |
| Câu chuyện hồi phục | `src/lib/site.ts` → `stories` |
| Câu hỏi thường gặp | `src/lib/site.ts` → `faqs` |

Giá trị đang là mẫu: hotline `0900 000 000`, địa chỉ, email, và toàn bộ con số thống kê.
Thay trước khi lên production.

## Thêm ảnh

Ảnh chưa có nên mọi vị trí ảnh đang là khung gạch đứt ghi chú ảnh cần chụp.

1. Bỏ file vào `public/images/`.
2. Mở `src/lib/images.ts`, đổi `null` thành đường dẫn, ví dụ `portrait: "/images/phuong-duy.jpg"`.

Không cần sửa component. Tỉ lệ khung được ghi ngay trong ghi chú của từng chỗ (3:4 cho chân
dung, 4:3 cho ảnh phòng, 16:10 cho ảnh dịch vụ, vuông cho avatar câu chuyện).

## Form đặt lịch

`POST /api/dat-lich` (`src/app/api/dat-lich/route.ts`) đang kiểm tra tên + số điện thoại rồi
ghi log ra server. Muốn nhận lịch thật thì nối kênh gửi ở chỗ đánh dấu `TODO` trong file đó —
email (Resend), Google Sheet, hoặc Zalo OA.

## Hệ thiết kế

- Màu: `--color-paper` `#EDF1EA`, `--color-pine` `#1C3B30`, `--color-jade` `#6F9B84`,
  `--color-saffron` `#E39A2E`, `--color-clay` `#C4553B`. Khai báo trong `src/app/globals.css`
  qua `@theme`, dùng như `bg-pine`, `text-saffron`.
- Chữ: Bricolage Grotesque (tiêu đề), Be Vietnam Pro (nội dung), JetBrains Mono (nhãn nhỏ,
  class `.label`). Cả ba đều nạp subset `vietnamese`.
- Hiệu ứng hiện dần khi cuộn nằm ở `src/components/Reveal.tsx`, tự tắt khi máy bật
  `prefers-reduced-motion`.
