import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { journey } from "@/lib/site";

export function Journey() {
  return (
    <Section
      id="lo-trinh"
      tone="brand"
      eyebrow="Lộ trình"
      title="Năm bước, theo đúng thứ tự này"
      lead="Không bước nào bị nhảy cóc. Bạn luôn biết mình đang ở đâu và bước kế tiếp cần gì."
    >
      <ol className="relative">
        <span
          aria-hidden
          className="absolute left-[15px] top-2 bottom-10 w-px bg-paper/20 md:left-[calc(88px+15px)]"
        />
        {journey.map((s, i) => (
          <Reveal key={s.step} delay={i * 70}>
            <li className="relative flex gap-5 pb-10 last:pb-0 md:gap-8">
              <span className="hidden w-[88px] shrink-0 pt-1 text-right md:block">
                <span className="label text-sky-soft">Bước {s.step}</span>
              </span>
              <span
                aria-hidden
                className="relative z-10 mt-1 grid h-[31px] w-[31px] shrink-0 place-items-center rounded-full border border-paper/25 bg-brand font-mono text-[12px] text-sky-soft"
              >
                {s.step}
              </span>
              <div className="min-w-0 pb-1">
                <h3 className="display text-[22px] sm:text-[26px]">{s.title}</h3>
                <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-paper/70">
                  {s.body}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-card border border-paper/15 bg-paper/5 p-6 md:ml-[120px]">
          <p className="min-w-0 flex-1 text-[15px] leading-relaxed text-paper/80">
            Chưa chắc mình thuộc nhóm nào? Buổi đánh giá đầu tiên sẽ trả lời, kể cả khi kết luận
            là bạn cần bác sĩ chứ chưa cần trị liệu.
          </p>
          <a
            href="#dat-lich"
            className="inline-flex items-center rounded-full bg-saffron px-5 py-3 text-[14px] font-medium text-ink transition-opacity hover:opacity-90"
          >
            Đặt buổi đánh giá
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
