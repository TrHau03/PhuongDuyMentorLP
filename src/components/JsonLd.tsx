import {
  address,
  credentials,
  faqs,
  openingHours,
  seo,
  services,
  site,
} from "@/lib/site";

/**
 * Structured data (JSON-LD) cho Google.
 *
 * Ba khối:
 *  - MedicalBusiness  → hồ sơ phòng khám, phục vụ local SEO / Google Maps
 *  - WebSite          → gắn tên site vào kết quả tìm kiếm
 *  - FAQPage          → mở rộng câu hỏi ngay dưới kết quả
 *
 * Nội dung lấy hết từ lib/site.ts nên sửa nội dung trang là structured data
 * tự khớp theo, không lệch nhau.
 */

/** "0900 000 000" → "+84900000000" */
function toE164(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `+84${digits.slice(1)}` : `+${digits}`;
}

const businessId = `${site.url}/#business`;

const business = {
  "@type": ["MedicalBusiness", "Physiotherapy", "LocalBusiness"],
  "@id": businessId,
  name: site.name,
  alternateName: site.short,
  description: seo.description,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  telephone: toE164(site.hotline),
  email: site.email,
  priceRange: "$$",
  currenciesAccepted: "VND",
  medicalSpecialty: "PhysicalTherapy",
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.district,
    addressRegion: address.city,
    postalCode: address.postalCode,
    addressCountry: address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: address.lat,
    longitude: address.lng,
  },
  areaServed: {
    "@type": "City",
    name: address.city,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...openingHours.days],
      opens: openingHours.opens,
      closes: openingHours.closes,
    },
  ],
  founder: {
    "@type": "Person",
    name: site.name,
    jobTitle: "Kỹ thuật viên Vật lý trị liệu – Phục hồi chức năng",
    hasCredential: credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dịch vụ điều trị",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
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

const graph = {
  "@context": "https://schema.org",
  "@graph": [business, website, faqPage],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Dữ liệu tĩnh trong repo, không có input người dùng.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
