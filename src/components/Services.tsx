import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { services } from "@/lib/site";

export function Services() {
  return (
    <Section
      id="dieu-tri"
      eyebrow="Nội dung hỗ trợ"
      title="Hỗ trợ vận động để duy trì sinh hoạt hằng ngày"
      lead="Nội dung ưu tiên cho người lớn tuổi và người suy giảm vận động: các cử động cơ bản, đi lại, điểm tựa và không gian sống. Với nhu cầu điều trị bệnh lý, trung tâm sẽ khuyến nghị tìm đến cơ sở y tế phù hợp."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 60} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-card transition-colors hover:border-brand/35">
              <Figure
                id={s.image}
                alt={s.title}
                note={`Ảnh minh hoạ: ${s.title}`}
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="label rounded-full border border-line px-2.5 py-1 text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="display mt-3.5 text-[20px]">{s.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{s.body}</p>
                <span
                  aria-hidden
                  className="mt-5 h-px w-10 bg-saffron transition-all duration-300 group-hover:w-20"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
