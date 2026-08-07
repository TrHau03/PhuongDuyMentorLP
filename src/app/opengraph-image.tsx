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
  const [semibold, bold, banner] = await Promise.all([
    readFile(join(fontDir, "BeVietnamPro-SemiBold.ttf")),
    readFile(join(fontDir, "BeVietnamPro-Bold.ttf")),
    readFile(join(process.cwd(), "public/banner.png")),
  ]);
  const bannerSrc = `data:image/png;base64,${banner.toString("base64")}`;

  // Banner gốc 2032×774 và bản thân nó đã đầy chữ. Phóng 1.85× rồi neo trái để
  // khung hình chỉ còn phần ảnh chụp thật (~1/3 bên trái), cắt trọn khối
  // infographic — nếu không, chữ banner chọi chữ OG.
  const bannerZoom = 1.85;
  const bannerW = Math.round(2032 * bannerZoom);
  const bannerH = Math.round(774 * bannerZoom);

  return new ImageResponse(
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#03367e",
        color: "#eef1f7",
        fontFamily: "Be Vietnam Pro",
      }}
    >
      {/* Banner làm nền, phóng to và neo trái — xem chú thích bannerZoom. */}
      <img
        src={bannerSrc}
        width={bannerW}
        height={bannerH}
        style={{
          position: "absolute",
          top: Math.round((size.height - bannerH) / 2),
          left: 0,
          width: bannerW,
          height: bannerH,
        }}
      />
      {/* Scrim navy: dìm nền xuống mức texture để chữ OG nổi. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          background:
            "linear-gradient(100deg, rgba(3,20,48,0.93) 0%, rgba(3,42,100,0.90) 50%, rgba(3,54,126,0.86) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
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
              color: "#4d9fe0",
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
              color: "#a8c6e8",
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
              <div style={{ fontSize: 22, color: "#7fa4cc", maxWidth: 220 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Be Vietnam Pro",
          data: semibold,
          weight: 600,
          style: "normal",
        },
        { name: "Be Vietnam Pro", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
