import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { stories } from "@/lib/site";

export function Stories() {
  return (
    <Section
      id="cau-chuyen"
      eyebrow="Câu chuyện hồi phục"
      title="Đo bằng việc họ làm lại được"
      lead="Mỗi câu chuyện kèm mốc trước – sau bằng một việc cụ thể trong đời sống, không dùng thang điểm chung chung."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {stories.map((s, i) => (
          <Reveal key={s.name} delay={i * 70} className="h-full">
            <figure className="flex h-full flex-col rounded-card border border-line bg-card p-6">
              <span className="label text-clay">{s.condition}</span>
              <blockquote className="mt-4 flex-1 text-[16.5px] leading-relaxed">
                <span aria-hidden className="display mr-0.5 text-saffron">“</span>
                {s.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-brand/5 px-3.5 py-3">
                <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-brand" fill="none">
                  <path
                    d="M3 14 8 9l3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M13 3h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13.5px] font-medium leading-snug">{s.outcome}</span>
              </div>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <Figure
                  id={s.image}
                  alt={s.name}
                  bare
                  className="h-11 w-11 shrink-0 rounded-full"
                  sizes="44px"
                />
                <span className="min-w-0">
                  <span className="block text-[14.5px] font-medium">{s.name}</span>
                  <span className="block text-[12.5px] text-muted">{s.meta}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-[12.5px] text-muted">
        Tên nhân vật đã được rút gọn theo yêu cầu. Kết quả khác nhau tuỳ tình trạng và mức độ
        tuân thủ bài tập tại nhà.
      </p>
    </Section>
  );
}
