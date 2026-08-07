import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { credentials } from "@/lib/site";

export function About() {
  return (
    <Section
      id="gioi-thieu"
      eyebrow="Người kèm bạn"
      title={
        <>
          Một người theo bạn từ buổi đầu
          <br className="hidden sm:block" /> tới buổi cuối
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative">
            <Figure
              id="portrait"
              alt="Chân dung Phương Duy"
              note="Chân dung Phương Duy, khổ dọc 3:4, nền phòng tập"
              className="aspect-[3/4] rounded-card"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
            <div className="absolute -bottom-5 left-5 right-8 rounded-2xl border border-line bg-card p-4">
              <p className="display text-[18px]">Phương Duy</p>
              <p className="label mt-1 text-muted">Kỹ thuật viên VLTL – PHCN</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6 lg:pt-2">
          <Reveal>
            <p className="text-[19px] leading-relaxed">
              Tôi bắt đầu nghề này ở khoa phục hồi chức năng, nơi mỗi buổi có bốn bệnh nhân
              cùng lúc và ai cũng nhận đúng bài tập giống nhau. Nhiều người đỡ đau, nhưng
              vài tháng sau lại quay lại với đúng vấn đề cũ.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[16px] leading-relaxed text-muted">
              Nên tôi mở phòng riêng và chọn cách làm ngược lại: mỗi khung giờ chỉ một người.
              Buổi đầu tôi dành trọn 45 phút để nghe và đo, chưa vội trị liệu. Vì cùng là đau
              thắt lưng, người ngồi văn phòng tám tiếng và người bê hàng mỗi ngày cần hai giáo
              án khác hẳn nhau.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[16px] leading-relaxed text-muted">
              Chữ “mentor” trong tên phòng là chủ đích. Việc của tôi không phải giữ bạn ở lại
              lâu nhất có thể, mà là dạy bạn hiểu cơ thể mình đủ để không cần tôi nữa. Kết
              thúc liệu trình, bạn cầm về một giáo án duy trì và biết dấu hiệu nào thì phải
              quay lại.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <Figure
                id="aboutRoom"
                alt="Phòng trị liệu một kèm một"
                note="Phòng trị liệu, góc rộng 4:3"
                className="aspect-square rounded-card"
                sizes="(min-width: 640px) 20vw, 100vw"
              />
              <Figure
                id="aboutHands"
                alt="Trị liệu cột sống bằng tay"
                note="Cận cảnh thao tác tay trên vai bệnh nhân"
                className="aspect-square rounded-card"
                sizes="(min-width: 640px) 20vw, 100vw"
              />
              <Figure
                id="aboutJoint"
                alt="Khớp xương và sụn"
                note="Minh hoạ khớp"
                className="aspect-square rounded-card"
                sizes="(min-width: 640px) 20vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-4 rounded-card border border-line bg-card p-6">
              <p className="label text-muted">Bằng cấp & chứng chỉ</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-[14.5px] leading-snug">
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
                    {c}
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
