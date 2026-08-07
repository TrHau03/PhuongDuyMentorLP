import Image from "next/image";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
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

          <div>
            <p className="label text-muted">Liên hệ</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li>
                <a href={`tel:${site.hotline.replace(/\s/g, "")}`} className="hover:text-brand">
                  {site.hotline}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand">
                  {site.email}
                </a>
              </li>
              <li className="text-muted">{site.address}</li>
              <li className="text-muted">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[12.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Nội dung trên trang mang tính tham khảo,
            không thay thế chẩn đoán của bác sĩ.
          </p>
          <p className="label">Vật lý trị liệu · Phục hồi chức năng</p>
        </div>
      </div>
    </footer>
  );
}
