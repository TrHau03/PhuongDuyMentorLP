import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { seo, site, stats } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Ảnh chia sẻ Facebook / Zalo / X, sinh lúc build.
 * Font nhúng từ src/app/_og vì bộ font mặc định của satori không có dấu tiếng Việt.
 */
export default async function Image() {
  const fontDir = join(process.cwd(), "src/app/_og");
  const [semibold, bold] = await Promise.all([
    readFile(join(fontDir, "BeVietnamPro-SemiBold.ttf")),
    readFile(join(fontDir, "BeVietnamPro-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1c3b30",
          color: "#edf1ea",
          padding: "72px 80px",
          fontFamily: "Be Vietnam Pro",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 44,
              background: "#e39a2e",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#6f9b84",
            }}
          >
            {`${site.city} · ${site.hours}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#a9c2b4",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            {seo.shortDescription}
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <div style={{ display: "flex", fontSize: 46, fontWeight: 700 }}>
                <span>{stat.value}</span>
                <span
                  style={{
                    color: "#e39a2e",
                    // "năm", "phút" cần thở; "+" thì dính sát số mới đúng.
                    marginLeft: /^\p{L}/u.test(stat.unit) ? 10 : 0,
                  }}
                >
                  {stat.unit}
                </span>
              </div>
              <div style={{ fontSize: 22, color: "#8fae9e", maxWidth: 220 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Be Vietnam Pro", data: semibold, weight: 600, style: "normal" },
        { name: "Be Vietnam Pro", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
