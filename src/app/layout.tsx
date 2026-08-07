import type { Metadata } from "next";
import { Bricolage_Grotesque, Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

const body = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Phòng vật lý trị liệu kèm 1:1: đánh giá vận động 45 phút, giáo án riêng theo cơ thể bạn, theo sát tới khi bạn tự tập được.",
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: "Đánh giá vận động, trị liệu bằng tay và giáo án cá nhân hoá. Một người kèm, không xoay ca.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
