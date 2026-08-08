import Link from "next/link";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { address, areas, fullAddress, site } from "@/lib/site";

/**
 * Khối "Khu vực phục vụ" trên trang chủ.
 *
 * Hai việc cùng lúc: nói rõ cho người đọc là đi từ đâu tới được, và tạo liên
 * kết nội bộ xuống các trang /khu-vuc/<slug> để Google tìm thấy chúng.
 */
export function ServiceAreas() {
  return (
    <Section
      id="khu-vuc"
      eyebrow="Khu vực phục vụ"
      title={<>Phòng ở Giồng Trôm, nhận bệnh cả vùng lân cận</>}
      lead={`Địa chỉ: ${fullAddress}. Trước đây thuộc huyện Giồng Trôm, tỉnh Bến Tre. Bà con ở TP. Bến Tre, Ba Tri, Mỏ Cày, Châu Thành, Bình Đại và Thạnh Phú đều đang tới đây trị liệu.`}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, i) => (
          <Reveal key={area.slug} delay={i * 50} className="h-full">
            <Link
              href={`/khu-vuc/${area.slug}`}
              className="group flex h-full flex-col rounded-card border border-line bg-card p-5 transition-colors hover:border-brand/35"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="display text-[19px]">{area.label}</h3>
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
                <span aria-hidden className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                  ›
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 text-[14.5px]">
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
    </Section>
  );
}
