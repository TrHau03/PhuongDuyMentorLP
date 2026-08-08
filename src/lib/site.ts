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
  tagline: "Vật lý trị liệu & phục hồi chức năng tại Giồng Trôm, Bến Tre",
  url: SITE_URL,
  hotline: "0835 632 227",
  zalo: "0835632227",
  email: "", // Chưa có email công khai — để rỗng thì trang tự ẩn, không bịa địa chỉ giả.
  address: "Số 12, Khu phố 1, Thị trấn Giồng Trôm, xã Giồng Trôm, tỉnh Vĩnh Long",
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
  lat: 10.14824,
  lng: 106.50779,
  /** Link Google Maps của phòng khám — dùng cho JSON-LD hasMap và nút chỉ đường. */
  mapUrl: "https://www.google.com/maps/search/?api=1&query=10.148240,106.507790",
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
    "Phòng vật lý trị liệu – phục hồi chức năng tại Thị trấn Giồng Trôm, Bến Tre. Kèm 1:1, đánh giá vận động 45 phút, giáo án riêng. Gọi/Zalo 0835 632 227.",
  /** Bản dài, chỉ dùng cho structured data — chỗ này không bị cắt. */
  longDescription:
    "Phòng vật lý trị liệu – phục hồi chức năng tại Thị trấn Giồng Trôm, Bến Tre. Kèm 1:1, đánh giá vận động 45 phút, giáo án riêng theo cơ thể bạn. Điều trị thoát vị đĩa đệm, đau cổ vai gáy, thoái hoá khớp gối, chấn thương thể thao, phục hồi sau mổ và sau đột quỵ. Nhận trị liệu tại nhà trong xã Giồng Trôm và các xã lân cận.",
  shortDescription:
    "Vật lý trị liệu 1:1 tại Giồng Trôm, Bến Tre. Đánh giá vận động, trị liệu bằng tay, giáo án cá nhân hoá.",
  /**
   * Keywords không còn là yếu tố xếp hạng của Google, nhưng vẫn giữ để Bing/Cốc Cốc
   * đọc và để cả nhóm thống nhất bộ từ khoá đang nhắm.
   * Thứ tự: từ khoá địa phương trước, từ khoá bệnh lý sau.
   */
  keywords: [
    "vật lý trị liệu Giồng Trôm",
    "phục hồi chức năng Giồng Trôm",
    "vật lý trị liệu Bến Tre",
    "phục hồi chức năng Bến Tre",
    "phòng khám vật lý trị liệu Bến Tre",
    "vật lý trị liệu tại nhà Bến Tre",
    "kỹ thuật viên vật lý trị liệu Giồng Trôm",
    "trị liệu đau lưng Bến Tre",
    "thoát vị đĩa đệm",
    "đau thần kinh tọa",
    "đau cổ vai gáy",
    "thoái hoá cột sống",
    "thoái hoá khớp gối",
    "trị liệu bằng tay",
    "manual therapy",
    "chấn thương thể thao",
    "phục hồi sau mổ dây chằng",
    "phục hồi sau đột quỵ",
    "cong vẹo cột sống",
    "vật lý trị liệu 1:1",
  ],
};

export const nav = [
  { href: "/#gioi-thieu", label: "Về Phương Duy" },
  { href: "/#dieu-tri", label: "Điều trị" },
  { href: "/#phuong-phap", label: "Phương pháp" },
  { href: "/#lo-trinh", label: "Lộ trình" },
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
 *
 * Quy tắc để Google không xem là "doorway page": mỗi trang phải có nội dung
 * thật sự khác nhau (cung đường, nhóm bệnh hay gặp, cách sắp lịch). Đừng nhân
 * bản một đoạn văn rồi chỉ đổi tên địa danh — Google phạt đúng kiểu đó.
 */
export const areas: Area[] = [
  {
    slug: "giong-trom",
    label: "Giồng Trôm",
    keyword: "Vật lý trị liệu tại Giồng Trôm",
    travel: "Phòng trị liệu nằm ngay Khu phố 1, Thị trấn Giồng Trôm",
    intro:
      "Phòng đặt ngay trung tâm thị trấn nên bà con trong xã đi xe máy vài phút là tới. Đây cũng là nơi nhận phần lớn ca sau mổ và sau đột quỵ cần tập đều nhiều buổi trong tuần.",
    points: [
      "Đi bộ hoặc xe máy từ chợ Giồng Trôm dưới 5 phút, có chỗ để xe.",
      "Ca cần tập dày 3–5 buổi/tuần ưu tiên xếp cho người trong xã, giờ linh động cả buổi tối.",
      "Trị liệu tại nhà cho người chưa tự di chuyển được, đi trong ngày.",
    ],
    homeVisit: true,
  },
  {
    slug: "ben-tre",
    label: "TP. Bến Tre",
    keyword: "Vật lý trị liệu cho người ở TP. Bến Tre",
    travel: "Khoảng 17 km theo ĐT885, chạy xe máy chừng 30 phút",
    intro:
      "Nhiều người ở thành phố tìm chỗ trị liệu 1:1 thay vì phòng đông người mỗi ca chục bệnh nhân. Đường ĐT885 chạy thẳng, đi về trong buổi được nên không cần nghỉ làm cả ngày.",
    points: [
      "Xếp lịch gọn 2 buổi/tuần để bạn không phải đi lại quá nhiều.",
      "Nhóm ca thường gặp: đau cổ vai gáy dân văn phòng và thoát vị đĩa đệm thắt lưng.",
      "Có thể gửi kết quả chụp MRI/X-quang qua Zalo trước để buổi đầu đỡ mất thời gian.",
    ],
    homeVisit: false,
  },
  {
    slug: "ba-tri",
    label: "Ba Tri",
    keyword: "Vật lý trị liệu cho người ở Ba Tri",
    travel: "Khoảng 20 km theo ĐT885 hướng biển, chừng 35 phút xe máy",
    intro:
      "Ba Tri là vùng làm biển và làm ruộng, phần lớn ca tới đây là đau thắt lưng do bưng vác và thoái hoá khớp gối ở người lớn tuổi. Lộ trình được rút gọn số buổi, phần còn lại chuyển thành bài tập tại nhà.",
    points: [
      "Ưu tiên giáo án tại nhà dưới 15 phút để người nhà kèm được mỗi ngày.",
      "Ca thoái hoá gối được đặt mục tiêu theo việc cần làm: lên xuống ghe, đi chợ, leo cầu thang.",
      "Gộp lịch buổi sáng để đi về trong nửa ngày.",
    ],
    homeVisit: false,
  },
  {
    slug: "mo-cay",
    label: "Mỏ Cày",
    keyword: "Vật lý trị liệu cho người ở Mỏ Cày",
    travel: "Khoảng 30 km qua TP. Bến Tre theo QL60, chừng 50 phút",
    intro:
      "Đường xa hơn nên lịch được xếp thưa mà chắc: mỗi buổi làm kỹ hơn, kèm bài tập nhà chi tiết và theo dõi qua Zalo giữa các buổi.",
    points: [
      "Thường 1 buổi/tuần tại phòng, phần còn lại tập tại nhà có người kiểm tra.",
      "Mỗi bài tập có video quay riêng, ghi rõ số lần và dấu hiệu phải dừng.",
      "Tái đánh giá mỗi 6 buổi, không cải thiện thì đổi hướng chứ không kéo dài liệu trình.",
    ],
    homeVisit: false,
  },
  {
    slug: "chau-thanh",
    label: "Châu Thành",
    keyword: "Vật lý trị liệu cho người ở Châu Thành",
    travel: "Khoảng 30 km qua TP. Bến Tre, chừng 50 phút",
    intro:
      "Khu vực gần cầu Rạch Miễu, nhiều người làm việc ở khu công nghiệp với chấn thương lặp lại do tư thế: đau cổ tay, đau khuỷu, đau vai một bên.",
    points: [
      "Xử lý nhóm đau do động tác lặp lại, kèm chỉnh lại tư thế làm việc.",
      "Buổi đánh giá 45 phút có phần hỏi kỹ về thao tác trong ca làm.",
      "Lịch tối sau 17:00 dành cho người tan ca.",
    ],
    homeVisit: false,
  },
  {
    slug: "binh-dai",
    label: "Bình Đại",
    keyword: "Vật lý trị liệu cho người ở Bình Đại",
    travel: "Khoảng 40 km qua TP. Bến Tre, chừng 1 giờ",
    intro:
      "Xa nhất trong nhóm khu vực thường xuyên, nên buổi đầu luôn được sắp dài hơn để đánh giá đủ và ra được giáo án mang về ngay trong hôm đó.",
    points: [
      "Buổi đầu gồm đánh giá và trị liệu, không phải đi thêm một chuyến mới bắt đầu.",
      "Giáo án nhà viết kỹ, có mốc tự kiểm tra để bạn biết khi nào cần quay lại.",
      "Nhắn Zalo trước để giữ khung giờ, tránh đi xa rồi phải chờ.",
    ],
    homeVisit: false,
  },
  {
    slug: "thanh-phu",
    label: "Thạnh Phú",
    keyword: "Vật lý trị liệu cho người ở Thạnh Phú",
    travel: "Khoảng 55 km theo QL57, chừng 1 giờ 15 phút",
    intro:
      "Với quãng đường này, phần lớn ca được thiết kế theo hướng ít buổi tại phòng và nặng phần tập tại nhà, chỉ những giai đoạn cần can thiệp bằng tay mới hẹn lên.",
    points: [
      "Tư vấn trước qua Zalo để biết trường hợp của bạn có đáng đi xa hay không.",
      "Nếu gần nhà có cơ sở phù hợp hơn, bạn sẽ được nói thẳng và giới thiệu.",
      "Theo dõi tiến triển qua video bạn tự quay, chỉnh sửa từng tuần.",
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
    title: "Đau cổ vai gáy",
    signs: "Cứng gáy buổi sáng, đau lan xuống bả vai, tê đầu ngón tay sau vài giờ ngồi máy.",
    plan: [
      "Giải phóng cơ thang trên và cơ nâng vai bằng tay",
      "Tập kiểm soát cơ gấp cổ sâu, 5 phút/ngày",
      "Sửa chiều cao màn hình và tay đặt bàn phím",
    ],
    duration: "6–8 buổi",
  },
  {
    id: "vai",
    label: "Khớp vai",
    x: 67,
    y: 21,
    title: "Viêm quanh khớp vai · vai đông cứng",
    signs: "Không với được tay ra sau lưng, đau tăng về đêm, mặc áo phải nhờ người khác.",
    plan: [
      "Kéo giãn bao khớp theo hướng bị hạn chế",
      "Tập lấy lại tầm vận động có kiểm soát góc",
      "Mạnh dần nhóm xoay ngoài với dây kháng lực",
    ],
    duration: "10–14 buổi",
  },
  {
    id: "khuyu-co-tay",
    label: "Khuỷu · cổ tay",
    x: 25,
    y: 36,
    title: "Đau khuỷu tay & hội chứng ống cổ tay",
    signs: "Đau mặt ngoài khuỷu khi cầm nắm, tê 3 ngón đầu về đêm, rơi đồ vật.",
    plan: [
      "Giảm tải gân và điều chỉnh tư thế cầm nắm",
      "Bài tập lệch tâm cho gân duỗi cổ tay",
      "Trượt thần kinh giữa để giảm tê",
    ],
    duration: "6–10 buổi",
  },
  {
    id: "lung-tren",
    label: "Lưng trên",
    x: 50,
    y: 29,
    title: "Đau lưng trên & gù tư thế",
    signs: "Nặng giữa hai bả vai cuối ngày, thở nông, vai đổ ra trước khi soi gương.",
    plan: [
      "Di động khớp đốt sống ngực",
      "Tập mở ngực và ổn định xương bả vai",
      "Đặt lịch đứng dậy mỗi 40 phút",
    ],
    duration: "6–8 buổi",
  },
  {
    id: "that-lung",
    label: "Thắt lưng",
    x: 50,
    y: 40,
    title: "Thoát vị đĩa đệm · đau thần kinh tọa",
    signs: "Đau lan xuống mông và mặt sau đùi, tăng khi ngồi lâu hoặc ho, khó cúi buộc dây giày.",
    plan: [
      "Giảm áp cột sống và điều trị bằng tay theo hướng ưu tiên",
      "Tập ổn định cơ lõi ở tư thế không gây đau",
      "Dạy lại cách cúi, nâng vật và ngồi xe máy",
    ],
    duration: "10–16 buổi",
  },
  {
    id: "hong",
    label: "Hông · háng",
    x: 38,
    y: 47,
    title: "Đau khớp háng & cơ mông yếu",
    signs: "Đau khe háng khi bước dài, đi cà nhắc sau khi ngồi lâu, một bên hông thấp hơn.",
    plan: [
      "Nới cơ gấp háng và cơ hình lê",
      "Tập mông nhỡ để cân bằng khung chậu",
      "Tập bước lên bậc có kiểm soát",
    ],
    duration: "8–12 buổi",
  },
  {
    id: "goi",
    label: "Khớp gối",
    x: 60,
    y: 64,
    title: "Thoái hoá gối · sau mổ dây chằng",
    signs: "Lục cục khi lên xuống cầu thang, sưng sau khi đi bộ, gối không duỗi thẳng hết.",
    plan: [
      "Lấy lại tầm duỗi gối trước, luôn luôn trước",
      "Mạnh cơ tứ đầu bằng bài tập không tải khớp",
      "Tập thăng bằng một chân trước khi trả về thể thao",
    ],
    duration: "12–20 buổi",
  },
  {
    id: "co-chan",
    label: "Cổ chân",
    x: 60,
    y: 82,
    title: "Bong gân cổ chân & viêm cân gan chân",
    signs: "Đau gót bước chân đầu tiên buổi sáng, cổ chân lỏng sau lần lật cũ chưa tập lại.",
    plan: [
      "Di động khớp sên–chày lấy lại gập mu",
      "Tập cảm thụ bản thể trên mặt phẳng không ổn định",
      "Mạnh cơ bắp chân theo tải tăng dần",
    ],
    duration: "6–10 buổi",
  },
];

export const stats = [
  { value: "8", unit: "năm", label: "lâm sàng phục hồi chức năng" },
  { value: "1.200", unit: "+", label: "ca đã theo tới khi tự tập được" },
  { value: "45", unit: "phút", label: "cho buổi đánh giá đầu tiên" },
  { value: "1:1", unit: "", label: "một người kèm, không xoay ca" },
];

export const credentials = [
  "Cử nhân Vật lý trị liệu – Phục hồi chức năng",
  "Chứng chỉ trị liệu bằng tay (Manual Therapy)",
  "Chứng chỉ băng dán cơ và tập luyện trị liệu",
  "Hội viên Hội Vật lý trị liệu Việt Nam",
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
    title: "Thoát vị đĩa đệm & đau thần kinh tọa",
    body: "Giảm áp cột sống, trị liệu bằng tay theo hướng cơ thể chịu được, rồi mới tới phần tập giữ kết quả.",
    image: "serviceDisc",
    tags: ["Cột sống", "Thần kinh"],
  },
  {
    id: "co-vai-gay",
    title: "Cổ vai gáy dân văn phòng",
    body: "Xử lý gốc từ tư thế ngồi và bàn làm việc, không chỉ xoa bóp cho đỡ vài ngày.",
    image: "serviceNeck",
    tags: ["Tư thế", "Văn phòng"],
  },
  {
    id: "thoai-hoa",
    title: "Thoái hoá cột sống cổ & thắt lưng",
    body: "Sống chung với thoái hoá mà vẫn đi bộ, bế cháu, lái xe được — mục tiêu đặt theo việc bạn cần làm.",
    image: "serviceSpine",
    tags: ["Trung niên", "Duy trì"],
  },
  {
    id: "the-thao",
    title: "Chấn thương thể thao",
    body: "Từ hết đau tới trở lại sân: có tiêu chí đo được cho từng mốc, không đoán bằng cảm giác.",
    image: "serviceSport",
    tags: ["Gym", "Chạy bộ", "Bóng đá"],
  },
  {
    id: "sau-mo",
    title: "Phục hồi sau mổ & sau đột quỵ",
    body: "Bám sát mốc thời gian bác sĩ phẫu thuật đưa ra, tập đúng giai đoạn, không nhanh hơn cũng không chậm hơn.",
    image: "servicePostOp",
    tags: ["Hậu phẫu", "Thần kinh"],
  },
  {
    id: "veo-cot-song",
    title: "Cong vẹo cột sống & sai tư thế ở trẻ",
    body: "Đo góc, theo dõi theo quý, tập tại nhà cùng ba mẹ để giữ đều đặn giữa các buổi.",
    image: "serviceScoliosis",
    tags: ["Trẻ em", "Theo dõi dài"],
  },
];

export const methods = [
  {
    title: "Trị liệu bằng tay",
    body: "Di động khớp và mô mềm, làm trực tiếp trên vùng hạn chế thay vì massage toàn thân cho dễ chịu.",
  },
  {
    title: "Vận động trị liệu",
    body: "Bài tập chọn theo kết quả đánh giá của riêng bạn, tăng tải khi cơ thể sẵn sàng chứ không theo lịch cố định.",
  },
  {
    title: "Điện xung · siêu âm · laser",
    body: "Dùng đúng chỗ cần giảm đau để bạn tập được, chứ không phải phần chính của buổi trị liệu.",
  },
  {
    title: "Kéo giãn giảm áp cột sống",
    body: "Dành cho ca chèn ép rễ thần kinh, cài lực theo cân nặng và mức chịu đau từng buổi.",
  },
  {
    title: "Giáo án tập tại nhà",
    body: "Mỗi bài một video quay riêng cho bạn, gửi qua Zalo, kèm số lần và dấu hiệu phải dừng.",
  },
  {
    title: "Tái đánh giá định kỳ",
    body: "Cứ 6 buổi đo lại tầm vận động và sức cơ. Không cải thiện thì đổi hướng, không kéo dài liệu trình.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Hỏi bệnh & đánh giá vận động",
    body: "45 phút. Nghe hết chuyện của bạn, đo tầm vận động, thử các nghiệm pháp, xem phim nếu có.",
  },
  {
    step: "02",
    title: "Giải thích và thống nhất mục tiêu",
    body: "Bạn biết mình đang bị gì, mất bao lâu, và mục tiêu đặt theo việc bạn cần làm được, không đặt theo cơn đau.",
  },
  {
    step: "03",
    title: "Trị liệu tại phòng",
    body: "Mỗi buổi 60 phút, một mình bạn với mentor. Trị liệu tay trước, tập sau, kết thúc bằng bài mang về.",
  },
  {
    step: "04",
    title: "Tập tại nhà có người theo",
    body: "Video riêng qua Zalo. Tuần nào cũng có người hỏi bạn tập tới đâu, vướng chỗ nào.",
  },
  {
    step: "05",
    title: "Tái đánh giá & trả bạn về tự tập",
    body: "Đủ chỉ số thì kết thúc liệu trình, nhận giáo án duy trì. Mục tiêu là bạn không cần quay lại.",
  },
];

export const stories = [
  {
    name: "Chị Anh",
    meta: "34 tuổi · Nhân viên văn phòng",
    condition: "Thoát vị L4–L5",
    quote:
      "Trước đó tôi ngồi họp 20 phút là phải đứng dậy. Sau 12 buổi tôi bay Hà Nội – Sài Gòn mà không phải xin đổi chỗ ngồi.",
    outcome: "Ngồi liên tục 20 phút → 3 giờ",
    image: "storyAnh" as ImageKey,
  },
  {
    name: "Anh Minh",
    meta: "41 tuổi · Chạy bộ phong trào",
    condition: "Sau mổ dây chằng chéo trước",
    quote:
      "Điều tôi cần là biết khi nào được chạy lại. Ở đây có tiêu chí rõ ràng cho từng mốc nên tôi không còn tự đoán.",
    outcome: "Trở lại cự ly 10km sau 7 tháng",
    image: "storyMinh" as ImageKey,
  },
  {
    name: "Cô Hà",
    meta: "58 tuổi · Nội trợ",
    condition: "Thoái hoá khớp gối hai bên",
    quote:
      "Tôi từng nghĩ tới thay khớp. Giờ tôi lên xuống cầu thang nhà ba tầng, vẫn đi chợ mỗi sáng.",
    outcome: "Bỏ được nạng sau 9 buổi",
    image: "storyHa" as ImageKey,
  },
];

export const faqs = [
  {
    q: "Chưa có phim chụp thì đi khám được không?",
    a: "Được. Buổi đầu là đánh giá vận động trực tiếp. Nếu có dấu hiệu cần hình ảnh học hoặc cần bác sĩ can thiệp, bạn sẽ được nói rõ và giới thiệu, không giữ ca lại.",
  },
  {
    q: "Một liệu trình bao nhiêu buổi?",
    a: "Tuỳ vùng và tuỳ mức độ, thường 6–16 buổi. Con số dự kiến được đưa ra ngay sau buổi đánh giá, và tái đánh giá mỗi 6 buổi để điều chỉnh.",
  },
  {
    q: "Trị liệu có đau không?",
    a: "Có thể tức nhẹ khi làm tay, nhưng không đau tới mức phải nín thở. Thang đau được hỏi trong từng thao tác và dừng khi bạn báo dừng.",
  },
  {
    q: "Không tập ở nhà thì có kết quả không?",
    a: "Chậm hơn nhiều. Phần lớn tiến bộ đến từ những gì bạn làm giữa các buổi, nên giáo án nhà được thiết kế gọn dưới 15 phút để bạn giữ được đều.",
  },
  {
    q: "Phòng vật lý trị liệu nằm ở đâu tại Giồng Trôm?",
    a: "Số 12, Khu phố 1, Thị trấn Giồng Trôm (xã Giồng Trôm, tỉnh Vĩnh Long — trước đây thuộc huyện Giồng Trôm, tỉnh Bến Tre). Từ chợ Giồng Trôm chạy xe máy chưa tới 5 phút, có chỗ để xe. Gọi hoặc nhắn Zalo 0835 632 227 để được chỉ đường.",
  },
  {
    q: "Có nhận trị liệu tại nhà không?",
    a: "Có, cho ca sau mổ và sau đột quỵ chưa tự di chuyển được, trong phạm vi xã Giồng Trôm và các xã liền kề. Nhắn trước để sắp lịch theo tuyến đường trong ngày.",
  },
  {
    q: "Ở TP. Bến Tre, Ba Tri, Mỏ Cày có tới được không?",
    a: "Được. Người ở xa được xếp lịch thưa hơn nhưng mỗi buổi làm kỹ hơn, phần lớn tiến bộ đến từ giáo án tập tại nhà có người theo dõi qua Zalo giữa các buổi. Nhắn tình trạng trước để biết trường hợp của bạn có cần đi lại nhiều hay không.",
  },
];
