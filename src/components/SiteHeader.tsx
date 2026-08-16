"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-paper/92 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center gap-3 px-5 sm:gap-5 md:gap-6 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <Monogram />
          <span className="leading-tight">
            <span className="display block text-[17px]">Phương Duy</span>
            <span className="label block text-muted text-[10px]">
              Chăm sóc sức khỏe
            </span>
          </span>
        </a>

        <nav
          className="ml-auto hidden shrink-0 items-center gap-4 min-[1440px]:flex min-[1600px]:gap-6"
          aria-label="Điều hướng chính"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#dat-lich"
          className="ml-auto hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[14px] font-medium text-paper transition-colors hover:bg-brand-soft sm:inline-flex min-[1440px]:ml-0"
        >
          Đặt buổi trao đổi
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-line sm:ml-0 min-[1440px]:hidden"
          aria-expanded={open}
          aria-label={open ? "Đóng menu" : "Mở menu"}
        >
          <span className="relative block h-[10px] w-[18px]">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform ${
                open ? "top-[4px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform ${
                open ? "top-[4px] -rotate-45" : "top-[9px]"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="min-[1440px]:hidden border-t border-line bg-paper">
          <nav
            className="mx-auto max-w-[1180px] px-5 py-4 md:px-8"
            aria-label="Điều hướng di động"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/70 py-3.5 text-[15px] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${site.hotline.replace(/\s/g, "")}`}
              className="mt-4 flex items-center justify-center rounded-full bg-brand px-5 py-3 text-[15px] font-medium text-paper"
            >
              Gọi {site.hotline}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Logo PDM. Ảnh đã tách nền nên đặt được lên mọi nền sáng. */
function Monogram({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={72}
      height={72}
      priority
      className={`h-9 w-9 shrink-0 object-contain ${className}`}
      aria-hidden
    />
  );
}
