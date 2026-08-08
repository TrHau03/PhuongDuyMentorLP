import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { address, seo, site } from "@/lib/site";
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

/**
 * Từ khoá địa phương đứng trước tên thương hiệu: Google cắt tiêu đề quanh mốc
 * ~60 ký tự, phần bị cắt nên là tên thương hiệu chứ không phải từ khoá.
 */
const title = `Vật lý trị liệu Giồng Trôm, Bến Tre — ${site.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "health",
  // Canonical đặt ở từng trang, không đặt ở layout — nếu đặt ở đây mọi trang
  // con quên khai báo sẽ tự nhận canonical "/" và biến mất khỏi kết quả.
  openGraph: {
    title,
    description: seo.shortDescription,
    url: "/",
    siteName: site.name,
    locale: "vi_VN",
    type: "website",
    // Ảnh lấy từ app/opengraph-image.tsx, Next tự gắn vào đây.
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: seo.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // TODO: dán mã xác minh sau khi thêm site vào Google Search Console.
  // verification: { google: "..." },
  /**
   * Thẻ geo cũ. Google không dùng nữa nhưng Bing, Cốc Cốc và một số trang
   * danh bạ doanh nghiệp trong nước vẫn đọc, nên giữ lại cho rẻ.
   */
  other: {
    "geo.region": "VN-86",
    "geo.placename": `${address.ward}, ${address.city}`,
    "geo.position": `${address.lat};${address.lng}`,
    ICBM: `${address.lat}, ${address.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#03367e",
  colorScheme: "light",
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
