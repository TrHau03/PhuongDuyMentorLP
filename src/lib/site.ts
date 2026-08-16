import type { ImageKey } from "./images";

/**
 * Toàn bộ chữ trên trang nằm ở đây. Sửa nội dung chỉ cần sửa file này.
 * Số liệu đang là mẫu — thay bằng số thật trước khi lên production.
 */

/** Domain thật. Đổi ở đây hoặc set NEXT_PUBLIC_SITE_URL trên Vercel là đủ. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://phuongduymentor.id.vn"
).replace(/\/$/, "");

export const site = {
  name: "Phương Duy Mentor",
  short: "PD Mentor",
  tagline: "Trung tâm chăm sóc sức khỏe & hướng dẫn vận động tại Giồng Trôm",
  url: SITE_URL,
  hotline: "0835 632 227",
  zalo: "0835632227",
  email: "", // Chưa có email công khai — để rỗng thì trang tự ẩn, không bịa địa chỉ giả.
  address:
    "Số 12, Khu phố 1, Thị trấn Giồng Trôm, xã Giồng Trôm, tỉnh Vĩnh Long",
  hours: "Thứ 2 – Thứ 7 · 08:00 – 20:00",
  facebook: "#", // TODO: link Facebook/Zalo OA thật — Google dùng làm tín hiệu sameAs.
  /** Nhãn địa phương ngắn, dùng ở hero và các dòng eyebrow. */
  city: "Giồng Trôm, Bến Tre",
  /** Tên tỉnh theo đơn vị hành chính hiện hành (sáp nhập 2025). */
  province: "Vĩnh Long",
  /** Tên tỉnh cũ. Giữ lại vì gần như toàn bộ lượt tìm kiếm vẫn gõ "Bến Tre". */
  provinceLegacy: "Bến Tre",
};

/**
 * Địa chỉ tách thành phần cho structured data (Google Business / Local SEO).
 * TODO: điền đúng khi có địa chỉ thật, và lấy toạ độ từ Google Maps
 * (mở Maps → chuột phải vào điểm → toạ độ hiện ra dạng 10.1608, 106.4936).
 */
export const address = {
  street: "Số 12, Khu phố 1",
  /** Đơn vị hành chính cấp xã hiện hành. */
  ward: "Thị trấn Giồng Trôm, xã Giồng Trôm",
  /** Tên huyện cũ — không còn hiệu lực hành chính nhưng là từ khoá tìm kiếm chính. */
  districtLegacy: "Huyện Giồng Trôm",
  city: "Vĩnh Long",
  region: "Vĩnh Long",
  postalCode: "93000",
  country: "VN",
  lat: 10.1481436,
  lng: 106.5077452,
  /** Link Google Maps của phòng khám — dùng cho JSON-LD hasMap và nút chỉ đường. */
  mapUrl: "https://maps.app.goo.gl/xYXEGzLy4xK9Ys8FA",
};

/** Chuỗi địa chỉ đầy đủ, một nguồn duy nhất cho footer / form / JSON-LD. */
export const fullAddress = `${address.street}, ${address.ward}, tỉnh ${address.city}`;

/** Giờ mở cửa dạng máy đọc được — khớp với site.hours ở trên. */
export const openingHours = {
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as const,
  opens: "08:00",
  closes: "20:00",
};

/**
 * Mô tả dùng chung cho <meta description>, OG và structured data.
 *
 * Nguyên tắc viết cho local SEO: tên dịch vụ + địa danh đứng trong 120 ký tự
 * đầu, vì Google cắt đoạn mô tả quanh mốc đó trên kết quả di động.
 */
export const seo = {
  /** <meta description>. Giữ dưới ~160 ký tự, nếu dài hơn Google cắt giữa câu. */
  description:
    "Trung tâm hỗ trợ vận động hằng ngày cho người cao tuổi và người suy giảm vận động tại Giồng Trôm, Bến Tre. Hướng dẫn 1:1, có người thân cùng tham gia.",
  /** Bản dài, chỉ dùng cho structured data — chỗ này không bị cắt. */
  longDescription:
    "Phương Duy Mentor là trung tâm chăm sóc sức khỏe tại Thị trấn Giồng Trôm, Bến Tre, tập trung hỗ trợ vận động hằng ngày cho người cao tuổi và người suy giảm vận động. Mỗi buổi là không gian trao đổi, thực hành vận động nhẹ, cách ngồi–đứng, giữ thăng bằng và di chuyển phù hợp với sinh hoạt; người thân có thể cùng tham gia. Trung tâm không khám bệnh, chẩn đoán, kê đơn hoặc thay thế cơ sở khám bệnh, chữa bệnh. Với tình trạng liên quan bệnh lý hoặc cần điều trị chuyên môn, trung tâm khuyến nghị thăm khám tại cơ sở y tế phù hợp.",
  shortDescription:
    "Hỗ trợ vận động hằng ngày cho người cao tuổi tại Giồng Trôm, Bến Tre.",
  /**
   * Keywords không còn là yếu tố xếp hạng của Google, nhưng vẫn giữ để Bing/Cốc Cốc
   * đọc và để cả nhóm thống nhất bộ từ khoá đang nhắm.
   * Thứ tự: từ khoá địa phương trước, từ khoá bệnh lý sau.
   */
  keywords: [
    "trung tâm chăm sóc sức khỏe Giồng Trôm",
    "chăm sóc sức khỏe Giồng Trôm",
    "hỗ trợ vận động người cao tuổi Giồng Trôm",
    "hướng dẫn vận động người cao tuổi Bến Tre",
    "hỗ trợ sinh hoạt người suy giảm vận động",
    "hướng dẫn vận động Giồng Trôm",
    "vận động cho người lớn tuổi",
    "thăng bằng và đi lại người cao tuổi",
    "hướng dẫn ngồi đứng an toàn",
    "hỗ trợ người thân chăm sóc vận động",
    "vận động nhẹ tại nhà",
    "vận động hỗ trợ xương khớp người cao tuổi",
    "hướng dẫn vận động 1:1",
  ],
};

export const nav = [
  { href: "/#gioi-thieu", label: "Về Phương Duy" },
  { href: "/#dieu-tri", label: "Nội dung hỗ trợ" },
  { href: "/#phuong-phap", label: "Cách đồng hành" },
  { href: "/#lo-trinh", label: "Buổi hướng dẫn" },
  { href: "/#khu-vuc", label: "Khu vực" },
  { href: "/#cau-chuyen", label: "Câu chuyện" },
  { href: "/#dat-lich", label: "Liên hệ" },
];

export type Area = {
  /** Đoạn cuối URL: /khu-vuc/<slug> */
  slug: string;
  /** Nhãn ngắn cho thẻ và breadcrumb. */
  label: string;
  /** Cụm từ khoá địa danh đầy đủ, dùng trong <title> và H1. */
  keyword: string;
  /** Khoảng cách / cung đường từ phòng khám. */
  travel: string;
  /** Đoạn mở đầu riêng của trang — không lặp giữa các khu vực. */
  intro: string;
  /** 3 ý cụ thể cho vùng này. Viết khác nhau, tránh trang mỏng trùng nội dung. */
  points: string[];
  /** Có nhận trị liệu tại nhà cho vùng này không. */
  homeVisit: boolean;
};

/**
 * Các khu vực phục vụ — mỗi mục sinh ra một trang /khu-vuc/<slug>.
 * Mỗi trang có thông tin đi lại và cách đặt lịch riêng, không chỉ thay địa danh.
 */
export const areas: Area[] = [
  {
    slug: "giong-trom",
    label: "Giồng Trôm",
    keyword: "Chăm sóc sức khỏe & hướng dẫn vận động tại Giồng Trôm",
    travel: "Trung tâm nằm ngay Khu phố 1, Thị trấn Giồng Trôm",
    intro:
      "Trung tâm nằm ngay khu vực thị trấn, phù hợp cho người muốn trao đổi về tình trạng mỏi cổ vai gáy, lưng hoặc thói quen vận động hằng ngày.",
    points: [
      "Đi bộ hoặc xe máy từ chợ Giồng Trôm dưới 5 phút, có chỗ để xe.",
      "Khung giờ được xác nhận trước qua Zalo để bạn chủ động thời gian.",
      "Buổi đầu ưu tiên nghe nhu cầu sinh hoạt và hướng dẫn các động tác phù hợp, nhẹ nhàng.",
    ],
    homeVisit: false,
  },
  {
    slug: "ben-tre",
    label: "TP. Bến Tre",
    keyword: "Chăm sóc cổ vai gáy & vận động cho người ở TP. Bến Tre",
    travel: "Khoảng 17 km theo ĐT885, chạy xe máy chừng 30 phút",
    intro:
      "Đường ĐT885 chạy thẳng nên người ở thành phố có thể chủ động đặt một buổi trao đổi và hướng dẫn vận động 1:1 trong ngày.",
    points: [
      "Khung giờ có thể hẹn trước để hạn chế chờ đợi.",
      "Nội dung thường được quan tâm: mỏi cổ vai gáy khi ngồi làm việc và thói quen vận động cho lưng.",
      "Bạn có thể nhắn tình huống sinh hoạt qua Zalo để biết buổi hướng dẫn có phù hợp hay không.",
    ],
    homeVisit: false,
  },
  {
    slug: "ba-tri",
    label: "Ba Tri",
    keyword: "Hướng dẫn vận động cho người ở Ba Tri",
    travel: "Khoảng 20 km theo ĐT885 hướng biển, chừng 35 phút xe máy",
    intro:
      "Người làm việc tay chân thường quan tâm tới cách di chuyển, bưng bê và duy trì vận động nhẹ nhàng trong ngày. Nội dung được trao đổi theo chính hoạt động của bạn.",
    points: [
      "Gợi ý thói quen vận động ngắn, dễ thực hiện trong sinh hoạt.",
      "Thực hành cách lên xuống bậc, đi lại và bưng vật nhẹ với tư thế phù hợp.",
      "Có thể ưu tiên khung giờ sáng để tiện đi về trong ngày.",
    ],
    homeVisit: false,
  },
  {
    slug: "mo-cay",
    label: "Mỏ Cày",
    keyword: "Chăm sóc sức khỏe vận động cho người ở Mỏ Cày",
    travel: "Khoảng 30 km qua TP. Bến Tre theo QL60, chừng 50 phút",
    intro:
      "Nếu đi xa, bạn có thể đặt trước để buổi trao đổi và hướng dẫn được chuẩn bị gọn, tập trung vào những thói quen bạn muốn cải thiện.",
    points: [
      "Cùng chọn một vài vận động đơn giản để thực hành ở nhà.",
      "Nội dung hướng dẫn được ghi lại ngắn gọn để bạn dễ nhớ.",
      "Nếu cần đánh giá hoặc điều trị y tế, trung tâm sẽ khuyến nghị bạn đến cơ sở phù hợp.",
    ],
    homeVisit: false,
  },
  {
    slug: "chau-thanh",
    label: "Châu Thành",
    keyword: "Hướng dẫn tư thế & vận động cho người ở Châu Thành",
    travel: "Khoảng 30 km qua TP. Bến Tre, chừng 50 phút",
    intro:
      "Người làm việc theo ca hoặc thao tác lặp lại có thể tìm đến để trao đổi về tư thế, quãng nghỉ và cách vận động nhẹ phù hợp với nhịp làm việc.",
    points: [
      "Cùng xem lại thao tác và vị trí làm việc hằng ngày.",
      "Trao đổi trước về thời gian đứng, ngồi và vận động trong ca.",
      "Có khung giờ sau 17:00 cho người tan ca.",
    ],
    homeVisit: false,
  },
  {
    slug: "binh-dai",
    label: "Bình Đại",
    keyword: "Chăm sóc vận động cho người ở Bình Đại",
    travel: "Khoảng 40 km qua TP. Bến Tre, chừng 1 giờ",
    intro:
      "Quãng đường xa hơn nên bạn nên nhắn trước để trung tâm tư vấn về nội dung buổi hướng dẫn và xác nhận thời gian phù hợp.",
    points: [
      "Buổi đầu tập trung vào nhu cầu sinh hoạt và vài động tác dễ nhớ.",
      "Bạn nhận được lưu ý thực hành an toàn cho các hoạt động thường ngày.",
      "Nhắn Zalo để giữ khung giờ, tránh đi xa rồi phải chờ.",
    ],
    homeVisit: false,
  },
  {
    slug: "thanh-phu",
    label: "Thạnh Phú",
    keyword: "Hướng dẫn vận động cho người ở Thạnh Phú",
    travel: "Khoảng 55 km theo QL57, chừng 1 giờ 15 phút",
    intro:
      "Trước khi đi xa, bạn có thể nhắn mô tả ngắn về nhu cầu vận động để biết trung tâm có phù hợp với mình hay nên tìm cơ sở y tế gần nhà.",
    points: [
      "Trao đổi trước qua Zalo để biết chuyến đi có cần thiết hay không.",
      "Nếu nhu cầu cần thăm khám y tế, bạn sẽ được khuyến nghị tới cơ sở phù hợp gần hơn.",
      "Nội dung tại trung tâm hướng tới thói quen vận động trong đời sống hằng ngày.",
    ],
    homeVisit: false,
  },
];

export type Region = {
  id: string;
  label: string;
  x: number; // % theo chiều ngang khung hình
  y: number; // % theo chiều dọc
  title: string;
  signs: string;
  plan: string[];
  duration: string;
};

/** Bản đồ cơ thể ở hero — bấm vùng đau, ra phác đồ tương ứng. */
export const regions: Region[] = [
  {
    id: "co-vai-gay",
    label: "Cổ vai gáy",
    x: 50,
    y: 17.5,
    title: "Cổ vai gáy khi nghỉ ngơi",
    signs:
      "Căng mỏi cổ vai gáy có thể khiến việc ngồi lâu, quay đầu hoặc nghỉ ngơi chưa được thoải mái.",
    plan: [
      "Trao đổi về tư thế ngồi và gối tựa thường dùng",
      "Thực hành vài vận động nhẹ, chậm và vừa sức",
      "Gợi ý các quãng nghỉ xen kẽ trong ngày",
    ],
    duration: "Trao đổi trong buổi đầu",
  },
  {
    id: "vai",
    label: "Khớp vai",
    x: 67,
    y: 21,
    title: "Vận động vai trong sinh hoạt",
    signs:
      "Việc với đồ, thay áo hoặc thực hiện các động tác quen thuộc có thể cần thêm thời gian và điểm tựa phù hợp.",
    plan: [
      "Xem lại các hoạt động dùng tay trong ngày",
      "Hướng dẫn vận động chậm, trong giới hạn dễ chịu",
      "Gợi ý cách bố trí vật dụng trong tầm với",
    ],
    duration: "Theo nhu cầu sinh hoạt",
  },
  {
    id: "khuyu-co-tay",
    label: "Khuỷu · cổ tay",
    x: 25,
    y: 36,
    title: "Cầm nắm và vận động tay",
    signs:
      "Các thao tác như cầm ly nước, cài nút áo hoặc dùng đồ vật nhỏ cần sự chủ động và nhịp vận động vừa sức.",
    plan: [
      "Cùng xem lại cách cầm nắm đồ vật thường dùng",
      "Thực hành vài vận động tay nhẹ nhàng",
      "Gợi ý cách nghỉ xen kẽ khi làm việc nhà",
    ],
    duration: "Trao đổi theo hoạt động hằng ngày",
  },
  {
    id: "lung-tren",
    label: "Lưng trên",
    x: 50,
    y: 29,
    title: "Lưng trên và tư thế ngồi",
    signs:
      "Ngồi lâu có thể khiến lưng trên nhanh mỏi; một chiếc ghế vững và tư thế có điểm tựa giúp người lớn tuổi an tâm hơn.",
    plan: [
      "Cùng xem lại ghế ngồi và điểm tựa lưng",
      "Thực hành vận động mở ngực nhẹ nhàng",
      "Gợi ý đổi tư thế và đi lại vừa sức",
    ],
    duration: "Buổi hướng dẫn 1:1",
  },
  {
    id: "that-lung",
    label: "Thắt lưng",
    x: 50,
    y: 40,
    title: "Lưng và thắt lưng khi chuyển tư thế",
    signs:
      "Các chuyển động từ nằm sang ngồi, ngồi sang đứng hoặc cúi lấy đồ nên được thực hiện chậm rãi và chủ động.",
    plan: [
      "Cùng quan sát cách ngồi, cúi và chuyển tư thế",
      "Thực hành vận động nhẹ theo khả năng hiện tại",
      "Gợi ý sử dụng ghế, điểm tựa và vật dụng quen thuộc",
    ],
    duration: "Nội dung theo nhu cầu",
  },
  {
    id: "hong",
    label: "Hông · háng",
    x: 38,
    y: 47,
    title: "Hông và dáng đi hằng ngày",
    signs:
      "Đứng lên, đi bộ hoặc bước qua bậc thấp là những hoạt động có thể cần một nhịp chậm và điểm tựa chắc chắn.",
    plan: [
      "Quan sát các hoạt động người tham gia muốn làm chủ động hơn",
      "Hướng dẫn vận động nhẹ cho vùng hông và chân",
      "Thực hành bước lên bậc chậm, ổn định",
    ],
    duration: "Trao đổi cùng trung tâm",
  },
  {
    id: "goi",
    label: "Khớp gối",
    x: 60,
    y: 64,
    title: "Khớp gối trong hoạt động thường ngày",
    signs:
      "Đi bộ, lên xuống cầu thang hay ngồi lâu có thể cần được chia nhỏ theo khả năng vận động của mỗi người.",
    plan: [
      "Trao đổi về nhịp đi lại và các bậc thang trong ngày",
      "Thực hành vài vận động nhẹ, có ghế hoặc điểm tựa khi cần",
      "Gợi ý cách sắp xếp thời gian vận động và nghỉ ngơi",
    ],
    duration: "Theo nhu cầu vận động",
  },
  {
    id: "co-chan",
    label: "Cổ chân",
    x: 60,
    y: 82,
    title: "Cổ chân và bàn chân khi di chuyển",
    signs:
      "Bàn chân là nền tảng của từng bước đi; giày dép, mặt đường và nhịp di chuyển phù hợp đều rất quan trọng.",
    plan: [
      "Cùng xem lại giày dép, mặt đường và cách bố trí lối đi",
      "Thực hành vận động chân nhẹ nhàng, an toàn",
      "Gợi ý tăng dần hoạt động theo khả năng cá nhân",
    ],
    duration: "Trao đổi cùng trung tâm",
  },
];

export const stats = [
  { value: "1:1", unit: "", label: "một người trong một khung giờ" },
  { value: "45", unit: "phút", label: "buổi trao đổi ban đầu" },
  { value: "Ngồi · đứng", unit: "", label: "vận động cơ bản hằng ngày" },
  { value: "Đi · thăng bằng", unit: "", label: "hỗ trợ duy trì sự chủ động" },
];

export const carePrinciples = [
  "Trao đổi rõ nhu cầu và giới hạn hỗ trợ trước khi bắt đầu.",
  "Hướng dẫn vận động nhẹ nhàng, phù hợp với khả năng và sinh hoạt hằng ngày.",
  "Khuyến khích người thân cùng quan sát và ghi nhớ các lưu ý thực hành.",
  "Không khám bệnh, chẩn đoán, kê đơn hoặc thay thế cơ sở y tế.",
  "Khuyến nghị thăm khám khi tình trạng liên quan bệnh lý cần chuyên môn y tế.",
];

export type Service = {
  id: string;
  title: string;
  body: string;
  image: ImageKey;
  tags: string[];
};

export const services: Service[] = [
  {
    id: "dia-dem",
    title: "Ngồi – đứng trong sinh hoạt",
    body: "Cùng thực hành cách ngồi xuống, đứng lên và chuyển tư thế chậm rãi, phù hợp với khả năng hiện tại.",
    image: "serviceDisc",
    tags: ["Ngồi · đứng", "Sinh hoạt"],
  },
  {
    id: "co-vai-gay",
    title: "Cổ vai gáy khi nghỉ ngơi",
    body: "Gợi ý tư thế ngồi, gối tựa và các vận động nhẹ giúp vùng cổ vai gáy dễ chịu hơn trong ngày.",
    image: "serviceNeck",
    tags: ["Cổ · vai", "Nghỉ ngơi"],
  },
  {
    id: "thoai-hoa",
    title: "Vận động nhẹ cho lưng & cột sống",
    body: "Thực hành các chuyển động chậm, có điểm tựa khi cần, để duy trì sự linh hoạt trong những việc thường ngày.",
    image: "serviceSpine",
    tags: ["Cột sống", "Nhẹ nhàng"],
  },
  {
    id: "the-thao",
    title: "Giữ thăng bằng & đi lại",
    body: "Cùng chọn các bài thực hành đơn giản với ghế hoặc điểm tựa chắc chắn để hỗ trợ sự tự tin khi di chuyển.",
    image: "serviceSport",
    tags: ["Thăng bằng", "Đi lại"],
  },
  {
    id: "sau-mo",
    title: "Vận động tay chân cơ bản",
    body: "Gợi ý những chuyển động chậm cho tay và chân, ưu tiên sự thoải mái và an toàn trong sinh hoạt hằng ngày.",
    image: "servicePostOp",
    tags: ["Tay · chân", "Tại nhà"],
  },
  {
    id: "veo-cot-song",
    title: "Người thân đồng hành",
    body: "Người nhà có thể cùng tham gia buổi hướng dẫn để hiểu cách bố trí không gian và nhắc lại vận động hằng ngày.",
    image: "serviceScoliosis",
    tags: ["Người thân", "Đồng hành"],
  },
];

export const methods = [
  {
    title: "Lắng nghe nhu cầu sinh hoạt",
    body: "Bắt đầu từ những việc bạn hoặc người thân đang muốn làm dễ dàng hơn: ngồi dậy, đi lại, tự chăm sóc hoặc ra ngoài.",
  },
  {
    title: "Hướng dẫn vận động vừa sức",
    body: "Thực hành các chuyển động chậm, đơn giản, có điểm tựa khi cần và luôn ưu tiên cảm giác an toàn, dễ chịu.",
  },
  {
    title: "Sắp xếp không gian dễ tiếp cận",
    body: "Cùng rà lại ghế, điểm tựa, lối đi và những vật dụng dùng thường xuyên để việc di chuyển trong nhà thuận tiện hơn.",
  },
  {
    title: "Thực hành vận động trong đời sống",
    body: "Tập các cách ngồi xuống, đứng lên, bước bậc và đi lại chậm rãi để duy trì sự chủ động trong các việc quen thuộc.",
  },
  {
    title: "Gợi ý thực hành tại nhà",
    body: "Bạn và người thân nhận các lưu ý ngắn, dễ nhớ để lồng ghép vận động nhẹ vào nhịp sinh hoạt hằng ngày.",
  },
  {
    title: "Theo dõi và điều chỉnh",
    body: "Buổi tiếp theo dùng để lắng nghe cảm nhận, điều chỉnh thói quen và khuyến nghị thăm khám nếu dấu hiệu liên quan bệnh lý cần chuyên môn y tế.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Trao đổi nhu cầu vận động",
    body: "Khoảng 45 phút để lắng nghe người lớn tuổi và người thân về những hoạt động đang khó khăn, cùng mục tiêu sinh hoạt mong muốn.",
  },
  {
    step: "02",
    title: "Thống nhất nội dung phù hợp",
    body: "Cùng chọn những vận động nhẹ, điểm tựa và thay đổi không gian phù hợp với khả năng hiện tại; không đưa ra chẩn đoán bệnh.",
  },
  {
    step: "03",
    title: "Hướng dẫn 1:1 tại trung tâm",
    body: "Người tham gia thực hành cùng người hướng dẫn trong không gian riêng, có thể mời người thân cùng quan sát các lưu ý an toàn.",
  },
  {
    step: "04",
    title: "Duy trì thói quen tại nhà",
    body: "Lồng ghép các gợi ý đã thống nhất vào giờ nghỉ ngơi, đi lại và tự chăm sóc để duy trì sự đều đặn, vừa sức.",
  },
  {
    step: "05",
    title: "Ghi nhận và điều chỉnh",
    body: "Nếu cần, bạn có thể hẹn lại để chia sẻ cảm nhận và điều chỉnh thói quen; tình trạng cần y tế sẽ được khuyến nghị thăm khám.",
  },
];

export const stories = [
  {
    eyebrow: "Tự chủ trong sinh hoạt",
    title: "Bắt đầu từ một lần ngồi dậy an tâm hơn",
    body: "Một chiếc ghế vững, điểm tựa phù hợp và nhịp vận động chậm rãi có thể giúp việc chuyển tư thế hằng ngày trở nên chủ động hơn.",
    takeaway: "Chậm rãi, có điểm tựa và vừa sức",
    image: "storyAnh" as ImageKey,
  },
  {
    eyebrow: "Đi lại hằng ngày",
    title: "Mỗi bước đi đều có thể bắt đầu từ nhịp riêng",
    body: "Đi bộ chậm, chọn đoạn đường quen thuộc và có người thân đồng hành khi cần là cách duy trì vận động nhẹ nhàng trong ngày.",
    takeaway: "Chọn quãng đường quen thuộc, an toàn",
    image: "storyMinh" as ImageKey,
  },
  {
    eyebrow: "Cùng người thân",
    title: "Người thân hiểu cách hỗ trợ sẽ an tâm hơn",
    body: "Cùng sắp xếp lối đi, điểm tựa và giờ vận động giúp việc đồng hành tại nhà trở nên nhẹ nhàng, tôn trọng và nhất quán.",
    takeaway: "Cùng quan sát, nhắc nhẹ và lắng nghe",
    image: "storyHa" as ImageKey,
  },
];

export const faqs = [
  {
    q: "Trung tâm phù hợp với ai?",
    a: "Trung tâm tập trung vào người lớn tuổi và người suy giảm vận động trong sinh hoạt, cùng người thân muốn hỗ trợ các hoạt động như ngồi–đứng, đi lại và tự chăm sóc hằng ngày. Với tình trạng do bệnh lý, hãy ưu tiên thực hiện theo chỉ định của cơ sở y tế và thăm khám khi cần.",
  },
  {
    q: "Trung tâm có phải là phòng khám hay cơ sở vật lý trị liệu không?",
    a: "Không. Đây là trung tâm chăm sóc sức khỏe và hướng dẫn vận động trong phạm vi hoạt động phù hợp; trung tâm không khám bệnh, chẩn đoán, kê đơn hoặc thay thế cơ sở khám bệnh, chữa bệnh.",
  },
  {
    q: "Trung tâm hỗ trợ những nội dung nào?",
    a: "Nội dung tập trung vào tư thế, thói quen vận động và sinh hoạt liên quan vùng cổ vai gáy, lưng, cột sống và xương khớp. Buổi trao đổi giúp bạn chọn các vận động nhẹ, phù hợp và dễ áp dụng trong ngày.",
  },
  {
    q: "Khi nào tôi nên đến cơ sở khám bệnh, chữa bệnh?",
    a: "Nếu bạn có cơn đau dữ dội hoặc tăng nhanh, tê yếu rõ rệt, chấn thương mới, sốt hay bất kỳ dấu hiệu khiến bạn lo lắng, hãy ưu tiên thăm khám tại cơ sở y tế. Trung tâm không thay thế việc khám và chẩn đoán chuyên môn.",
  },
  {
    q: "Buổi hướng dẫn diễn ra như thế nào?",
    a: "Buổi đầu khoảng 45 phút: trao đổi nhu cầu, xem lại các tư thế và hoạt động thường ngày, rồi cùng thực hành một số vận động nhẹ nhàng. Bạn luôn có thể dừng lại nếu không thấy thoải mái.",
  },
  {
    q: "Trung tâm chăm sóc sức khỏe nằm ở đâu tại Giồng Trôm?",
    a: "Số 12, Khu phố 1, Thị trấn Giồng Trôm (xã Giồng Trôm, tỉnh Vĩnh Long — trước đây thuộc huyện Giồng Trôm, tỉnh Bến Tre). Từ chợ Giồng Trôm chạy xe máy chưa tới 5 phút, có chỗ để xe. Gọi hoặc nhắn Zalo 0835 632 227 để được chỉ đường.",
  },
  {
    q: "Tôi có cần đăng ký trước không?",
    a: "Có. Hãy gọi hoặc nhắn Zalo trước để trung tâm xác nhận khung giờ và trao đổi sơ bộ về nhu cầu của bạn. Điều này giúp bạn không phải chờ khi đến nơi.",
  },
  {
    q: "Người ở TP. Bến Tre, Ba Tri, Mỏ Cày có thể tới không?",
    a: "Được. Hãy nhắn trước để kiểm tra khung giờ phù hợp và cân nhắc việc đi lại. Nếu nhu cầu của bạn cần khám hoặc điều trị y tế, trung tâm sẽ khuyến nghị bạn đến cơ sở chuyên môn phù hợp.",
  },
];
