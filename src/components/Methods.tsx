import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { methods } from "@/lib/site";

export function Methods() {
  return (
    <Section
      id="phuong-phap"
      eyebrow="Phương pháp"
      title="Máy chỉ là công cụ. Phần chính là tay và bài tập."
      lead="Thiết bị dùng để bạn đủ dễ chịu mà tập được. Thứ giữ kết quả lại lâu dài luôn là vận động."
    >
      <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {methods.map((m, i) => (
          <Reveal key={m.title} delay={i * 50} className="h-full">
            <div className="flex h-full flex-col bg-card p-6">
              <svg aria-hidden viewBox="0 0 32 16" className="h-4 w-8 text-saffron" fill="none">
                <path d="M1 15a15 15 0 0 1 30 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h3 className="display mt-3.5 text-[19px]">{m.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
