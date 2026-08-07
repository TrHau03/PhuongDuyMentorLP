"use client";

import { useState, type FormEvent } from "react";
import { regions, site } from "@/lib/site";

const slots = ["Sáng 08:00–11:30", "Chiều 13:30–17:00", "Tối 17:00–20:00"];

export function Booking() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("sending");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      region: String(form.get("region") ?? ""),
      slot: String(form.get("slot") ?? ""),
      date: String(form.get("date") ?? ""),
      note: String(form.get("note") ?? ""),
    };

    try {
      const res = await fetch("/api/dat-lich", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Gửi chưa được, thử lại giúp tôi.");
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Gửi chưa được, thử lại giúp tôi.");
    }
  }

  return (
    <section id="dat-lich" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="grid gap-10 rounded-card border border-line bg-card p-6 sm:p-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:p-12">
          <div>
            <p className="label text-muted">Đặt lịch</p>
            <h2 className="display mt-4 text-[30px] sm:text-[38px]">
              Kể tôi nghe bạn đang vướng chỗ nào
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              Gửi thông tin, tôi gọi lại trong ngày làm việc để xác nhận giờ. Nếu tình trạng của
              bạn cần bác sĩ trước, tôi sẽ nói ngay trong cuộc gọi đó.
            </p>

            <dl className="mt-8 space-y-4 border-t border-line pt-8 text-[14.5px]">
              <div>
                <dt className="label text-muted">Hotline</dt>
                <dd className="mt-1">
                  <a className="hover:text-brand" href={`tel:${site.hotline.replace(/\s/g, "")}`}>
                    {site.hotline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-muted">Địa chỉ</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
              <div>
                <dt className="label text-muted">Giờ làm việc</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
            </dl>
          </div>

          {status === "done" ? (
            <div className="flex flex-col items-start justify-center rounded-card bg-brand p-8 text-paper">
              <svg aria-hidden viewBox="0 0 24 24" className="h-9 w-9 text-saffron" fill="none">
                <path
                  d="m4 12.5 5 5L20 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="display mt-5 text-[26px]">Đã nhận thông tin</h3>
              <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-paper/75">
                Tôi sẽ gọi lại từ số {site.hotline} để xác nhận giờ. Trong lúc chờ, bạn giữ tư thế
                thoải mái nhất và tránh bài tập nào làm đau tăng lên.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-[14px] text-sky-soft underline underline-offset-4"
              >
                Gửi thêm một lượt nữa
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Họ tên" className="sm:col-span-1">
                <input name="name" required minLength={2} autoComplete="name" className={inputClass} />
              </Field>

              <Field label="Số điện thoại" className="sm:col-span-1">
                <input
                  name="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="[0-9+\s.]{9,15}"
                  className={inputClass}
                />
              </Field>

              <Field label="Vùng đang đau" className="sm:col-span-2">
                <select name="region" defaultValue={regions[4].label} className={inputClass}>
                  {regions.map((r) => (
                    <option key={r.id}>{r.label}</option>
                  ))}
                  <option>Chưa rõ / vùng khác</option>
                </select>
              </Field>

              <Field label="Ngày mong muốn">
                <input name="date" type="date" className={inputClass} />
              </Field>

              <Field label="Buổi">
                <select name="slot" defaultValue={slots[0]} className={inputClass}>
                  {slots.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <Field label="Mô tả ngắn tình trạng" className="sm:col-span-2">
                <textarea
                  name="note"
                  rows={3}
                  placeholder="Đau từ bao giờ, đau khi làm gì, đã chụp phim chưa…"
                  className={`${inputClass} resize-y`}
                />
              </Field>

              {error && (
                <p role="alert" className="sm:col-span-2 text-[14px] text-clay">
                  {error}
                </p>
              )}

              <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center rounded-full bg-brand px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-brand-soft disabled:opacity-60"
                >
                  {status === "sending" ? "Đang gửi…" : "Gửi yêu cầu đặt lịch"}
                </button>
                <span className="text-[13px] text-muted">
                  Hoặc gọi thẳng{" "}
                  <a
                    className="underline underline-offset-4"
                    href={`tel:${site.hotline.replace(/\s/g, "")}`}
                  >
                    {site.hotline}
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] outline-none transition-colors focus:border-brand";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="label mb-2 block text-muted">{label}</span>
      {children}
    </label>
  );
}
