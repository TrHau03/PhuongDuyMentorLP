"use client";

import { useState } from "react";
import { regions } from "@/lib/site";

/**
 * Bản đồ cơ thể — phần đặc trưng của trang.
 * Bấm vào vùng đang đau, panel bên cạnh trả về phác đồ điển hình cho vùng đó.
 */
export function BodyMap() {
  const [activeId, setActiveId] = useState(regions[4].id); // mặc định: thắt lưng
  const active = regions.find((r) => r.id === activeId) ?? regions[0];

  return (
    <div className="rounded-card border border-line bg-card p-5 sm:p-6">
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
        <p className="label text-muted">Bạn đang đau ở đâu?</p>
        <p className="text-[13px] text-muted">Chạm vào vùng đau</p>
      </div>

      <div className="mt-5 grid gap-6 sm:grid-cols-[minmax(0,150px)_minmax(0,1fr)] sm:gap-7">
        {/* Hình người + điểm chạm */}
        <div className="relative mx-auto aspect-[200/440] w-[132px] sm:w-full">
          <svg viewBox="0 0 200 440" className="absolute inset-0 h-full w-full" aria-hidden>
            <g stroke="var(--color-jade)" strokeOpacity="0.55" fill="none" strokeLinecap="round">
              <path d="M76,88 C58,104 50,132 47,168" strokeWidth="14" />
              <path d="M124,88 C142,104 150,132 153,168" strokeWidth="14" />
              <path d="M86,192 C80,240 79,296 82,352" strokeWidth="17" />
              <path d="M114,192 C120,240 121,296 118,352" strokeWidth="17" />
              <path d="M100,64 L100,80" strokeWidth="15" />
            </g>
            <g fill="var(--color-jade)" fillOpacity="0.55">
              <circle cx="100" cy="42" r="22" />
              <circle cx="47" cy="172" r="7" />
              <circle cx="153" cy="172" r="7" />
              <circle cx="82" cy="358" r="8" />
              <circle cx="118" cy="358" r="8" />
              <path d="M74,80 Q100,70 126,80 L132,150 Q132,182 100,196 Q68,182 68,150 Z" />
            </g>
            {/* Đường giữa cột sống */}
            <path
              d="M100,80 L100,190"
              stroke="var(--color-card)"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>

          {regions.map((r) => {
            const isActive = r.id === active.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveId(r.id)}
                aria-pressed={isActive}
                title={r.label}
                className="absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-transform hover:scale-110"
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              >
                <span className="sr-only">{r.label}</span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-3.5 w-3.5 bg-clay ring-4 ring-clay/25"
                      : "h-2.5 w-2.5 bg-pine/45 ring-2 ring-card"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Phác đồ theo vùng */}
        <div className="min-w-0">
          <div className="flex flex-wrap gap-1.5 sm:hidden">
            {regions.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveId(r.id)}
                className={`rounded-full border px-2.5 py-1 text-[12px] transition-colors ${
                  r.id === active.id
                    ? "border-pine bg-pine text-paper"
                    : "border-line text-muted"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <div key={active.id} className="rise mt-4 sm:mt-0">
            <p className="label text-clay">{active.label}</p>
            <h3 className="display mt-1.5 text-[22px] sm:text-[25px]">{active.title}</h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{active.signs}</p>

            <p className="label mt-5 text-muted">Hướng xử lý điển hình</p>
            <ul className="mt-2 space-y-1.5">
              {active.plan.map((line) => (
                <li key={line} className="flex gap-2.5 text-[14px] leading-snug">
                  <span aria-hidden className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-saffron" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 border-t border-line pt-3 text-[13px] text-muted">
              Liệu trình tham khảo:{" "}
              <span className="font-mono font-medium text-ink">{active.duration}</span> · chốt con số
              sau buổi đánh giá
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
