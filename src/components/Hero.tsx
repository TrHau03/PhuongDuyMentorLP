import { BodyMap } from "./BodyMap";
import { site, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-16">
      {/* Cung tầm vận động chạy nền */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[620px] w-[620px] text-sky/20 md:-right-24"
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
              Chăm sóc sức khỏe & hướng dẫn vận động 1:1 · {site.city}
            </p>

            <h1 className="display rise mt-5 text-[38px] sm:text-[52px] lg:text-[60px]" style={{ animationDelay: "80ms" }}>
              Hỗ trợ vận động
              <br />
              <span className="mark">để sinh hoạt</span>
              <br />
              chủ động hơn.
            </h1>

            <p
              className="rise mt-6 max-w-[46ch] text-[16px] leading-relaxed text-muted"
              style={{ animationDelay: "160ms" }}
            >
              <strong className="font-medium text-ink">
                Dành cho người lớn tuổi và người suy giảm vận động tại Giồng Trôm, Bến Tre.
              </strong>{" "}
              Phương Duy cùng bạn và người thân thực hành những vận động nhẹ liên quan tới ngồi–đứng,
              giữ thăng bằng, đi lại và các sinh hoạt thường ngày, luôn trong giới hạn phù hợp.
            </p>

            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <a
                href="#dat-lich"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-brand-soft"
              >
                Đặt buổi trao đổi 45 phút
              </a>
              <a
                href="#lo-trinh"
                className="inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-brand hover:bg-brand/5"
              >
                Xem cách đồng hành
              </a>
            </div>

            <p className="rise mt-5 text-[13px] text-muted" style={{ animationDelay: "300ms" }}>
              Trung tâm không khám bệnh, chẩn đoán hay kê đơn. Với suy giảm vận động liên quan bệnh
              lý hoặc cần điều trị, trung tâm sẽ khuyến nghị thăm khám phù hợp.
            </p>

            <dl
              className="rise mt-12 grid grid-cols-2 gap-x-4 gap-y-7 border-t border-line pt-8 md:grid-cols-4 md:gap-x-6"
              style={{ animationDelay: "360ms" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="display block text-[26px] text-brand sm:text-[30px]">
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
