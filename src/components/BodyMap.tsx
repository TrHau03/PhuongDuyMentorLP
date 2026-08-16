"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { regions } from "@/lib/site";

type ModelView = "body" | "spine";

const spineRegionIds = new Set(["lung-tren", "that-lung"]);

const modelCredits: Record<
  ModelView,
  { author: string; label: string; source: string }
> = {
  body: {
    author: "vistaalienprime",
    label: "Human body",
    source:
      "https://sketchfab.com/3d-models/human-body-f022e4a3641943328b2fbfdf0f7c3e1e",
  },
  spine: {
    author: "3D",
    label: "The human spinal column",
    source:
      "https://sketchfab.com/3d-models/the-human-spinal-column-bcd9eee09ce044ef98a69c315aa792e2",
  },
};

const BodyMapModel = dynamic(
  () => import("./BodyMapModel").then((module) => module.BodyMapModel),
  {
    ssr: false,
    loading: () => (
      <div className="h-[340px] w-full animate-pulse rounded-[16px] border border-line bg-brand/5 sm:h-[390px]" />
    ),
  },
);

/**
 * Bản đồ cơ thể — phần đặc trưng của trang.
 * Chọn vùng bạn đang quan tâm để xem nội dung trao đổi và vận động tham khảo.
 */
export function BodyMap() {
  const [activeId, setActiveId] = useState(regions[4].id); // mặc định: thắt lưng
  const [modelView, setModelView] = useState<ModelView>("body");
  const active = regions.find((r) => r.id === activeId) ?? regions[0];
  const credit = modelCredits[modelView];

  const handleRegionSelect = (id: string) => {
    setActiveId(id);
    setModelView(spineRegionIds.has(id) ? "spine" : "body");
  };

  return (
    <div className="rounded-card border border-line bg-card p-5 sm:p-6">
      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="label text-muted">Bạn đang muốn xem vùng nào?</p>
        <div
          role="group"
          aria-label="Chọn mô hình giải phẫu"
          className="grid grid-cols-2 rounded-full border border-line bg-paper p-1"
        >
          {(
            [
              ["body", "Toàn thân"],
              ["spine", "Cột sống"],
            ] as const
          ).map(([view, label]) => (
            <button
              key={view}
              type="button"
              onClick={() => setModelView(view)}
              aria-pressed={modelView === view}
              className={`min-h-9 rounded-full px-4 text-[12.5px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                modelView === view
                  ? "bg-brand text-paper"
                  : "text-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,1fr)_164px] sm:items-start">
        <div className="mx-auto w-full max-w-[340px] sm:max-w-none">
          <BodyMapModel
            activeId={active.id}
            modelView={modelView}
            onRegionSelect={handleRegionSelect}
          />
          <div className="mt-2 flex flex-wrap items-start justify-between gap-x-3 gap-y-1 px-1 text-[10.5px] leading-relaxed text-muted">
            <span>Kéo để xoay · cuộn/chụm để phóng to</span>
            <span className="sm:text-right">
              Mô hình: {" "}
              <a
                href={credit.source}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-2 hover:text-ink"
              >
                {credit.label} — {credit.author}
              </a>{" "}
              · {" "}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-2 hover:text-ink"
              >
                CC BY 4.0
              </a>
            </span>
          </div>
        </div>

        <div>
          <p className="label mb-3 text-muted">Chọn vùng quan tâm</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            {regions.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => handleRegionSelect(r.id)}
                aria-pressed={r.id === active.id}
                className={`min-h-10 rounded-full border px-3 py-2 text-[12.5px] leading-none transition-colors ${
                  r.id === active.id
                    ? "border-brand bg-brand text-paper"
                    : "border-line text-muted hover:border-brand/35 hover:text-ink"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Nội dung dùng toàn bộ chiều rộng để giữ nhịp đọc tự nhiên. */}
      <div key={active.id} className="rise mt-6 border-t border-line pt-6">
        <p className="label text-clay">{active.label}</p>
        <h3 className="display mt-1.5 text-[23px] sm:text-[26px]">
          {active.title}
        </h3>
        <p className="mt-2.5 max-w-[54ch] text-[14px] leading-relaxed text-muted">
          {active.signs}
        </p>

        <p className="label mt-5 text-muted">
          Nội dung gợi ý cho buổi trao đổi
        </p>
        <ul className="mt-2.5 space-y-2">
          {active.plan.map((line) => (
            <li key={line} className="flex gap-2.5 text-[14px] leading-snug">
              <span
                aria-hidden
                className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-saffron"
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 border-t border-line pt-3 text-[13px] text-muted">
          Nội dung tham khảo:{" "}
          <span className="font-mono font-medium text-ink">
            {active.duration}
          </span>{" "}
          · không thay thế việc khám hoặc chẩn đoán y tế
        </p>
      </div>
    </div>
  );
}
