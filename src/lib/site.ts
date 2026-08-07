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
  tagline: "Vật lý trị liệu & phục hồi chức năng, kèm 1:1",
  url: SITE_URL,
  hotline: "0900 000 000", // TODO: số thật
  zalo: "0900000000", // TODO
  email: "lienhe@phuongduymentor.vn", // TODO
  address: "123 Đường ABC, Quận X, TP.HCM", // TODO
  hours: "Thứ 2 – Thứ 7 · 08:00 – 20:00",
  facebook: "#",
  city: "TP.HCM",
};

/**
 * Địa chỉ tách thành phần cho structured data (Google Business / Local SEO).
 * TODO: điền đúng khi có địa chỉ thật, và lấy toạ độ từ Google Maps.
 */
export const address = {
  street: "123 Đường ABC",
  district: "Quận X",
  city: "TP. Hồ Chí Minh",
  region: "SG",
  postalCode: "700000",
  country: "VN",
  lat: 10.762622, // TODO: toạ độ phòng khám thật
  lng: 106.660172,
};

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

/** Mô tả dùng chung cho <meta description>, OG và structured data. */
export const seo = {
  description:
    "Phòng vật lý trị liệu kèm 1:1 tại TP.HCM: đánh giá vận động 45 phút, giáo án riêng theo cơ thể bạn, theo sát tới khi bạn tự tập được. Điều trị thoát vị đĩa đệm, đau cổ vai gáy, thoái hoá khớp, chấn thương thể thao và phục hồi sau mổ.",
  shortDescription:
    "Đánh giá vận động, trị liệu bằng tay và giáo án cá nhân hoá. Một người kèm, không xoay ca.",
  keywords: [
    "vật lý trị liệu TP.HCM",
    "phục hồi chức năng",
    "thoát vị đĩa đệm",
    "đau thần kinh tọa",
    "đau cổ vai gáy",
    "thoái hoá cột sống",
    "trị liệu bằng tay",
    "manual therapy",
    "chấn thương thể thao",
    "phục hồi sau mổ dây chằng",
    "cong vẹo cột sống",
    "vật lý trị liệu 1:1",
  ],
};

export const nav = [
  { href: "#gioi-thieu", label: "Về Phương Duy" },
  { href: "#dieu-tri", label: "Điều trị" },
  { href: "#phuong-phap", label: "Phương pháp" },
  { href: "#lo-trinh", label: "Lộ trình" },
  { href: "#cau-chuyen", label: "Câu chuyện" },
  { href: "#dat-lich", label: "Liên hệ" },
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
    q: "Có nhận trị liệu tại nhà không?",
    a: "Có, cho ca sau mổ và sau đột quỵ chưa di chuyển được, trong phạm vi nội thành. Nhắn trước để sắp lịch theo tuyến đường.",
  },
];
