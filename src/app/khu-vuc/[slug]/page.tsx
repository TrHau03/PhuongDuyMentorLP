import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AreaJsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { address, areas, faqs, fullAddress, seo, services, site } from "@/lib/site";

/**
 * Trang khu vực: /khu-vuc/<slug>
 *
 * Mỗi trang nhắm một cụm từ khoá địa phương về chăm sóc sức khỏe và có nội
 * dung riêng — phần dùng chung chỉ là nội dung hỗ trợ và liên hệ.
 * Tất cả trang được prerender ở build time nên Google tải về nhanh.
 */

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

function findArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/khu-vuc/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = findArea(slug);
  if (!area) return {};

  const title = `${area.keyword} — ${site.name}`;
  // Giữ dưới ~160 ký tự: từ khoá + cung đường + số gọi. Đoạn intro dài dùng cho
  // JSON-LD và phần thân trang, không nhét vào meta description.
  const description = `${area.keyword}. ${area.travel}. Hướng dẫn vận động 1:1, buổi trao đổi khoảng 45 phút. Gọi/Zalo ${site.hotline}.`;

  return {
    title: area.keyword,
    description,
    keywords: [
      `chăm sóc sức khỏe ${area.label}`,
      `hướng dẫn vận động ${area.label}`,
      `chăm sóc cổ vai gáy ${area.label}`,
      ...seo.keywords.slice(0, 6),
    ],
    alternates: { canonical: `/khu-vuc/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `/khu-vuc/${area.slug}`,
      siteName: site.name,
      locale: "vi_VN",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function AreaPage({ params }: PageProps<"/khu-vuc/[slug]">) {
  const { slug } = await params;
  const area = findArea(slug);
  if (!area) notFound();

  const others = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <AreaJsonLd area={area} />
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
              <li>
                <Link href="/khu-vuc" className="hover:text-brand">
                  Khu vực phục vụ
                </Link>
              </li>
              <li aria-hidden>·</li>
              <li aria-current="page" className="text-ink">
                {area.label}
              </li>
            </ol>
          </nav>
        </div>

        <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div>
              <p className="label text-muted">Khu vực phục vụ</p>
              <h1 className="display mt-4 text-[34px] sm:text-[46px]">{area.keyword}</h1>
              <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted">
                {area.intro}
              </p>

              <ul className="mt-8 space-y-3.5 border-t border-line pt-8">
                {area.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-relaxed">
                    <span aria-hidden className="mt-2 h-px w-5 shrink-0 bg-saffron" />
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/#dat-lich"
                  className="inline-flex items-center rounded-full bg-brand px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-brand-soft"
                >
                  Đặt buổi trao đổi 45 phút
                </Link>
                <a
                  href={`tel:${site.zalo}`}
                  className="inline-flex items-center rounded-full border border-brand/25 px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-brand hover:bg-brand/5"
                >
                  Gọi {site.hotline}
                </a>
              </div>
            </div>

            <aside className="rounded-card border border-line bg-card p-6 sm:p-8">
              <p className="label text-muted">Đi tới trung tâm</p>
              <p className="mt-4 text-[15px] leading-relaxed">{area.travel}.</p>
              <dl className="mt-6 space-y-4 border-t border-line pt-6 text-[14.5px]">
                <div>
                  <dt className="label text-muted">Địa chỉ</dt>
                  <dd className="mt-1 leading-relaxed">{fullAddress}</dd>
                </div>
                <div>
                  <dt className="label text-muted">Giờ làm việc</dt>
                  <dd className="mt-1">{site.hours}</dd>
                </div>
                <div>
                  <dt className="label text-muted">Lưu ý trước khi tới</dt>
                  <dd className="mt-1">
                    {area.homeVisit
                      ? "Nhắn Zalo để được xác nhận nội dung và khung giờ phù hợp."
                      : "Nhắn Zalo để xác nhận trung tâm có phù hợp với nhu cầu của bạn."}
                  </dd>
                </div>
              </dl>
              <a
                href={address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[14.5px] font-medium text-brand hover:underline underline-offset-4"
              >
                Mở chỉ đường trên Google Maps
              </a>
            </aside>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-5 md:px-8">
            <h2 className="display text-[26px] sm:text-[32px]">
              Nội dung hỗ trợ cho người ở {area.label}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.id} className="rounded-card border border-line bg-card p-5">
                  <h3 className="display text-[18px]">{s.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-5 md:px-8">
            <h2 className="display text-[26px] sm:text-[32px]">Câu hỏi thường gặp</h2>
            <div className="mt-8 max-w-[76ch] divide-y divide-line border-y border-line">
              {faqs.slice(0, 4).map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="display cursor-pointer list-none text-[17px] marker:content-none">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-5 md:px-8">
            <h2 className="display text-[26px] sm:text-[32px]">Khu vực khác</h2>
            <ul className="mt-7 flex flex-wrap gap-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/khu-vuc/${other.slug}`}
                    className="inline-flex rounded-full border border-line px-4 py-2 text-[14px] text-muted transition-colors hover:border-brand hover:text-brand"
                  >
                    {other.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
