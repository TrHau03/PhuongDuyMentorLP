import Image from "next/image";
import Link from "next/link";
import { address, areas, fullAddress, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <Image
              src="/logo.png"
              alt={`Logo ${site.name}`}
              width={112}
              height={112}
              className="mb-4 h-14 w-14 object-contain"
            />
            <p className="display text-[22px]">{site.name}</p>
            <p className="mt-3 max-w-[38ch] text-[14.5px] leading-relaxed text-muted">
              {site.tagline}. Mục tiêu của mỗi liệu trình là tới ngày bạn không cần quay lại.
            </p>
          </div>

          <nav aria-label="Liên kết chân trang">
            <p className="label text-muted">Trang</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[14.5px] text-muted transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Liên kết nội bộ tới các trang khu vực — có mặt trên mọi trang nên
              Google luôn tìm được chúng, không phụ thuộc vào sitemap. */}
          <nav aria-label="Khu vực phục vụ">
            <p className="label text-muted">Khu vực</p>
            <ul className="mt-4 space-y-2.5">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/khu-vuc/${area.slug}`}
                    className="text-[14.5px] text-muted transition-colors hover:text-ink"
                  >
                    Vật lý trị liệu {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-muted">Liên hệ</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li>
                <a href={`tel:${site.zalo}`} className="hover:text-brand">
                  {site.hotline}
                </a>
              </li>
              <li>
                <a
                  href={`https://zalo.me/${site.zalo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  Zalo {site.hotline}
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-brand">
                    {site.email}
                  </a>
                </li>
              )}
              <li className="leading-relaxed text-muted">{fullAddress}</li>
              <li className="text-muted">{site.hours}</li>
              <li>
                <a
                  href={address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline underline-offset-4"
                >
                  Chỉ đường Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[12.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Nội dung trên trang mang tính tham khảo,
            không thay thế chẩn đoán của bác sĩ.
          </p>
          <p className="label">
            Vật lý trị liệu · Phục hồi chức năng · Giồng Trôm, Bến Tre
          </p>
        </div>
      </div>
    </footer>
  );
}
