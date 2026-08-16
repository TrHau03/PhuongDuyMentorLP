import {
  address,
  areas,
  faqs,
  fullAddress,
  openingHours,
  seo,
  services,
  site,
  type Area,
} from "@/lib/site";

/**
 * Structured data (JSON-LD) cho Google.
 *
 * Trang chủ dùng <JsonLd />, trang khu vực dùng <AreaJsonLd area={...} />.
 * Các trang trỏ về cùng một @id trung tâm để Google hiểu đây là một đơn vị
 * duy nhất có nhiều trang, không phải nhiều cơ sở khác nhau.
 *
 * Khối trên trang chủ:
 *  - LocalBusiness   → hồ sơ trung tâm, phục vụ local SEO / Google Maps
 *  - WebSite         → gắn tên site vào kết quả tìm kiếm
 *  - FAQPage         → mở rộng câu hỏi ngay dưới kết quả
 *
 * Nội dung lấy hết từ lib/site.ts nên sửa nội dung trang là structured data
 * tự khớp theo, không lệch nhau.
 */

/** "0835 632 227" → "+84835632227" */
function toE164(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `+84${digits.slice(1)}` : `+${digits}`;
}

const businessId = `${site.url}/#business`;
const telephone = toE164(site.hotline);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: address.street,
  addressLocality: address.ward,
  addressRegion: address.region,
  postalCode: address.postalCode,
  addressCountry: address.country,
};

/**
 * Vùng phục vụ. Google dùng trường này để quyết định phòng khám có nên hiện
 * với người tìm ở địa phương đó hay không, kể cả khi họ ở cách vài chục cây số.
 */
const areaServed = [
  ...areas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area.label,
  })),
  // Tên tỉnh cũ vẫn là cách gần như tất cả mọi người mô tả khu vực này.
  { "@type": "AdministrativeArea", name: site.provinceLegacy },
  { "@type": "AdministrativeArea", name: site.province },
];

const business = {
  "@type": "LocalBusiness",
  "@id": businessId,
  name: site.name,
  alternateName: site.short,
  description: seo.longDescription,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/logo.png`,
    width: 1180,
    height: 1195,
  },
  telephone,
  ...(site.email ? { email: site.email } : {}),
  ...(site.facebook && site.facebook !== "#" ? { sameAs: [site.facebook] } : {}),
  priceRange: "$$",
  currenciesAccepted: "VND",
  paymentAccepted: "Tiền mặt, Chuyển khoản",
  knowsLanguage: "vi-VN",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: address.lat,
    longitude: address.lng,
  },
  hasMap: address.mapUrl,
  areaServed,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...openingHours.days],
      opens: openingHours.opens,
      closes: openingHours.closes,
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone,
    contactType: "Đặt lịch",
    areaServed: "VN",
    availableLanguage: "Vietnamese",
  },
  availableService: services.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.body,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nội dung hỗ trợ sức khỏe",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.body,
      },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: seo.shortDescription,
  inLanguage: "vi-VN",
  publisher: { "@id": businessId },
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function Graph({ nodes }: { nodes: object[] }) {
  return (
    <script
      type="application/ld+json"
      // Dữ liệu tĩnh trong repo, không có input người dùng.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }),
      }}
    />
  );
}

export function JsonLd() {
  return <Graph nodes={[business, website, faqPage]} />;
}

/**
 * Structured data cho một trang khu vực.
 *
 * Chỉ nhắc lại trung tâm bằng @id (không lặp cả khối), thêm Service gắn với
 * đúng địa danh và BreadcrumbList để Google vẽ đường dẫn trong kết quả.
 */
export function AreaJsonLd({ area }: { area: Area }) {
  const pageUrl = `${site.url}/khu-vuc/${area.slug}`;

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: area.keyword,
    description: area.intro,
    serviceType: "Chăm sóc sức khỏe và hướng dẫn vận động",
    provider: { "@id": businessId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: area.label,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: telephone,
      serviceLocation: {
        "@id": businessId,
      },
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: site.url },
      { "@type": "ListItem", position: 2, name: "Khu vực phục vụ", item: `${site.url}/khu-vuc` },
      { "@type": "ListItem", position: 3, name: area.label, item: pageUrl },
    ],
  };

  const webPage = {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: area.keyword,
    description: area.intro,
    inLanguage: "vi-VN",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": businessId },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  return (
    <Graph
      nodes={[
        { "@id": businessId, "@type": business["@type"], name: site.name, address: postalAddress },
        webPage,
        breadcrumb,
        service,
      ]}
    />
  );
}

/** Dùng cho trang danh sách /khu-vuc. */
export function AreaIndexJsonLd() {
  const pageUrl = `${site.url}/khu-vuc`;

  return (
    <Graph
      nodes={[
        {
          "@type": "CollectionPage",
          "@id": pageUrl,
          url: pageUrl,
          name: `Khu vực phục vụ — ${site.name}`,
          description: `Chăm sóc sức khỏe và hướng dẫn vận động tại ${fullAddress}, phục vụ người dân Giồng Trôm và các khu vực lân cận.`,
          inLanguage: "vi-VN",
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": businessId },
        },
        {
          "@type": "ItemList",
          "@id": `${pageUrl}#list`,
          itemListElement: areas.map((area, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: area.label,
            url: `${site.url}/khu-vuc/${area.slug}`,
          })),
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${pageUrl}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: site.url },
            { "@type": "ListItem", position: 2, name: "Khu vực phục vụ", item: pageUrl },
          ],
        },
      ]}
    />
  );
}
