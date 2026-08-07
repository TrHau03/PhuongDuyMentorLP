import { BodyMap } from "./BodyMap";
import { site, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-16">
      {/* Cung tầm vận động chạy nền */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[620px] w-[620px] text-jade/20 md:-right-24"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 5" />
        <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="0.6" />
        <path d="M100 100 L196 100" stroke="currentColor" strokeWidth="0.6" />
        <path d="M100 100 L168 32" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <div className="relative mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <p className="label rise text-muted">
              Vật lý trị liệu 1:1 · {site.city}
            </p>

            <h1 className="display rise mt-5 text-[38px] sm:text-[52px] lg:text-[60px]" style={{ animationDelay: "80ms" }}>
              Hết đau là bước đầu.
              <br />
              <span className="mark">Vận động lại bình thường</span>
              <br />
              mới là đích.
            </h1>

            <p
              className="rise mt-6 max-w-[46ch] text-[16px] leading-relaxed text-muted"
              style={{ animationDelay: "160ms" }}
            >
              Phương Duy kèm bạn từng buổi: đánh giá vận động trước khi chạm tay vào,
              giáo án viết riêng cho cơ thể bạn, và theo sát tới khi bạn tự tập được ở nhà.
            </p>

            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <a
                href="#dat-lich"
                className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-pine-soft"
              >
                Đặt buổi đánh giá 45 phút
              </a>
              <a
                href="#lo-trinh"
                className="inline-flex items-center gap-2 rounded-full border border-pine/25 px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-pine hover:bg-pine/5"
              >
                Xem lộ trình 5 bước
              </a>
            </div>

            <p className="rise mt-5 text-[13px] text-muted" style={{ animationDelay: "300ms" }}>
              Buổi đầu không trị liệu vội — chưa rõ nguyên nhân thì chưa làm.
            </p>

            <dl
              className="rise mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4"
              style={{ animationDelay: "360ms" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="display block text-[30px] text-pine">
                      {s.value}
                      {s.unit && <span className="ml-1 text-[15px] text-saffron">{s.unit}</span>}
                    </span>
                    <span className="mt-1.5 block text-[12.5px] leading-snug text-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rise lg:pt-2" style={{ animationDelay: "420ms" }}>
            <BodyMap />
          </div>
        </div>
      </div>
    </section>
  );
}
