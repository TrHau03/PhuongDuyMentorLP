import type { Metadata } from "next";
import Link from "next/link";
import { AreaIndexJsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { address, areas, fullAddress, site } from "@/lib/site";

const title = `Khu vực phục vụ — chăm sóc sức khỏe Giồng Trôm, Bến Tre`;
const description = `Trung tâm chăm sóc sức khỏe tại Thị trấn Giồng Trôm. Phục vụ người dân TP. Bến Tre, Ba Tri, Mỏ Cày, Châu Thành, Bình Đại, Thạnh Phú. Gọi/Zalo ${site.hotline}.`;

export const metadata: Metadata = {
  title: "Khu vực phục vụ",
  description,
  alternates: { canonical: "/khu-vuc" },
  openGraph: {
    title,
    description,
    url: "/khu-vuc",
    siteName: site.name,
    locale: "vi_VN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function AreaIndexPage() {
  return (
    <>
      <AreaIndexJsonLd />
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-[1180px] px-5 pt-8 md:px-8">
          <nav aria-label="Đường dẫn" className="text-[13px] text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand">
                  Trang chủ
                </Link>
              </li>
              <li aria-hidden>·</li>
              <li aria-current="page" className="text-ink">
                Khu vực phục vụ
              </li>
            </ol>
          </nav>
        </div>

        <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
          <p className="label text-muted">Khu vực phục vụ</p>
          <h1 className="display mt-4 max-w-[20ch] text-[34px] sm:text-[46px]">
            Trung tâm ở Giồng Trôm, phục vụ người dân vùng lân cận
          </h1>
          <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-muted">
            Địa chỉ: {fullAddress}. Khu vực này trước đây là huyện Giồng Trôm, tỉnh Bến Tre. Người ở
            xa nên nhắn trước để xác nhận khung giờ và nội dung hướng dẫn phù hợp. Trung tâm tập
            trung vào thói quen vận động, không thay thế cơ sở khám bệnh, chữa bệnh.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/khu-vuc/${area.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-card p-5 transition-colors hover:border-brand/35"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="display text-[19px]">{area.label}</h2>
                  {area.homeVisit && (
                    <span className="label shrink-0 rounded-full bg-saffron/15 px-2.5 py-1 text-[10px] text-clay">
                      Tại nhà
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[13px] text-muted">{area.travel}</p>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{area.intro}</p>
                <span className="mt-4 text-[13.5px] font-medium text-brand">
                  Xem chi tiết khu vực
                  <span
                    aria-hidden
                    className="ml-1.5 inline-block transition-transform group-hover:translate-x-1"
                  >
                    ›
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 text-[14.5px]">
            <a
              href={address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline underline-offset-4"
            >
              Mở chỉ đường trên Google Maps
            </a>
            <a href={`tel:${site.zalo}`} className="text-muted hover:text-brand">
              Gọi {site.hotline}
            </a>
            <a
              href={`https://zalo.me/${site.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-brand"
            >
              Nhắn Zalo {site.hotline}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
