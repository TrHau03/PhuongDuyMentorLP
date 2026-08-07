import { NextResponse } from "next/server";

export type BookingPayload = {
  name: string;
  phone: string;
  region: string;
  slot: string;
  date: string;
  note: string;
};

/**
 * Nhận yêu cầu đặt lịch.
 *
 * Hiện tại chỉ ghi log ra server. Khi có kênh nhận thật, nối thêm ở chỗ đánh dấu
 * TODO bên dưới: gửi email (Resend), ghi Google Sheet, hoặc bắn Zalo OA.
 */
export async function POST(request: Request) {
  let data: Partial<BookingPayload>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Vui lòng nhập họ tên." }, { status: 400 });
  }

  if (!/^[0-9+\s.]{9,15}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "Số điện thoại chưa đúng." }, { status: 400 });
  }

  // TODO: nối kênh nhận lịch thật ở đây.
  console.info("[dat-lich]", {
    name,
    phone,
    region: data.region,
    slot: data.slot,
    date: data.date,
    note: data.note,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
