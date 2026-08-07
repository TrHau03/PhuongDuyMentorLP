import { Section } from "./Section";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <Section id="faq" eyebrow="Hỏi trước khi tới" title="Câu hỏi hay gặp">
      <div className="max-w-[820px] divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start gap-4 text-[17px] font-medium marker:hidden">
              <span className="flex-1">{f.q}</span>
              <span
                aria-hidden
                className="relative mt-2 h-3 w-3 shrink-0 text-pine transition-transform duration-300 group-open:rotate-45"
              >
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
              </span>
            </summary>
            <p className="mt-3 max-w-[64ch] text-[15px] leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
