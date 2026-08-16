import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { stories } from "@/lib/site";

export function Stories() {
  return (
    <Section
      id="cau-chuyen"
      eyebrow="Điều quan trọng mỗi ngày"
      title="Giữ sự chủ động trong những việc quen thuộc"
      lead="Các gợi ý chung dành cho người lớn tuổi và người suy giảm vận động trong sinh hoạt; không phải chẩn đoán hoặc hướng dẫn điều trị cá nhân."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {stories.map((s, i) => (
          <Reveal key={s.title} delay={i * 70} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-card">
              <Figure
                id={s.image}
                alt={s.title}
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="label text-clay">{s.eyebrow}</span>
                <h3 className="display mt-3 text-[22px] leading-tight">{s.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{s.body}</p>

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
                <span className="text-[13.5px] font-medium leading-snug">{s.takeaway}</span>
              </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-[12.5px] text-muted">
        Nếu có đau dữ dội, tê yếu rõ rệt, chấn thương mới hoặc dấu hiệu bất thường, hãy ưu tiên
        thăm khám tại cơ sở y tế.
      </p>
    </Section>
  );
}
