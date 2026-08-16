import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { carePrinciples } from "@/lib/site";

export function About() {
  return (
    <Section
      id="gioi-thieu"
      eyebrow="Người đồng hành"
      title={
        <>
          Bắt đầu từ điều bạn
          <br className="hidden sm:block" /> muốn làm dễ chịu hơn
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative">
            <Figure
              id="portrait"
              alt="Chân dung Phương Duy tại trung tâm chăm sóc sức khỏe"
              note="Chân dung Phương Duy tại trung tâm"
              className="aspect-[3/4] rounded-card"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
            <div className="absolute -bottom-5 left-5 right-8 rounded-2xl border border-line bg-card p-4">
              <p className="display text-[18px]">Phương Duy</p>
              <p className="label mt-1 text-muted">Trung tâm Chăm sóc Sức khỏe</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6 lg:pt-2">
          <Reveal>
            <p className="text-[19px] leading-relaxed">
              Mỗi người có một nhịp sống khác nhau: ngồi làm việc nhiều giờ, lái xe, bưng bê,
              chăm con hoặc chỉ đơn giản là muốn vận động nhẹ nhàng hơn. Vì vậy, buổi hướng dẫn
              cần bắt đầu từ điều bạn đang làm mỗi ngày.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[16px] leading-relaxed text-muted">
              Trung tâm dành riêng mỗi khung giờ cho một người. Trong buổi đầu, chúng ta trao đổi
              về thói quen, tư thế và những thời điểm cơ thể hay mỏi; rồi cùng chọn vài điều chỉnh
              và vận động nhẹ phù hợp để bạn tự thực hành trong sinh hoạt.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[16px] leading-relaxed text-muted">
              Chữ “mentor” là cách trung tâm đồng hành: giải thích rõ, hướng dẫn vừa sức và giúp
              bạn chủ động chăm cơ thể của mình. Trung tâm không thực hiện khám bệnh, chẩn đoán,
              kê đơn hoặc thay thế cơ sở khám bệnh, chữa bệnh.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <Figure
                id="aboutRoom"
                alt="Không gian chăm sóc sức khỏe dễ tiếp cận cho người lớn tuổi"
                note="Không gian trung tâm với lối đi và ghế có điểm tựa"
                className="aspect-[4/3] rounded-card"
                sizes="(min-width: 640px) 20vw, 100vw"
              />
              <Figure
                id="aboutHands"
                alt="Người thân đồng hành cùng người lớn tuổi thực hành vận động nhẹ"
                note="Vận động nhẹ nhàng cho vùng vai"
                className="aspect-[4/3] rounded-card"
                sizes="(min-width: 640px) 20vw, 100vw"
              />
              <Figure
                id="aboutJoint"
                alt="Người lớn tuổi thực hành vận động chân khi ngồi"
                note="Vận động nhẹ cho bàn chân và cổ chân"
                className="aspect-[4/3] rounded-card"
                sizes="(min-width: 640px) 20vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-4 rounded-card border border-line bg-card p-6">
              <p className="label text-muted">Nguyên tắc tại trung tâm</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {carePrinciples.map((principle) => (
                  <li key={principle} className="flex gap-3 text-[14.5px] leading-snug">
                    <svg
                      aria-hidden
                      viewBox="0 0 16 16"
                      className="mt-0.5 h-4 w-4 shrink-0 text-saffron"
                      fill="none"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
