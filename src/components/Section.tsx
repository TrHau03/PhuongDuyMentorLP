import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "paper",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
  children: ReactNode;
  tone?: "paper" | "brand";
  className?: string;
}) {
  const dark = tone === "brand";
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? "bg-brand text-paper" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        {(eyebrow || title) && (
          <header className="max-w-[62ch]">
            {eyebrow && (
              <p className={`label ${dark ? "text-sky-soft" : "text-muted"}`}>{eyebrow}</p>
            )}
            {title && (
              <h2 className="display mt-4 text-[30px] sm:text-[40px]">{title}</h2>
            )}
            {lead && (
              <p
                className={`mt-4 text-[16px] leading-relaxed ${
                  dark ? "text-paper/70" : "text-muted"
                }`}
              >
                {lead}
              </p>
            )}
          </header>
        )}
        <div className={eyebrow || title ? "mt-10 md:mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}
