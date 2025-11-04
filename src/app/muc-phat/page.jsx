import {
  Typography,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import HeadTagForSEO from "@/components/HeadTagForSEO";
import companyInfo from "@/constants/companyInfo";

export const metadata = {
  title:
    `Mức Phạt Vi Phạm Giao Thông Ô Tô, Xe Máy 2025 | ${process.env.NEXT_PUBLIC_DOMAIN}`,

  description:
    "Cập nhật mức phạt vi phạm giao thông ô tô, xe máy năm 2025 theo Nghị định 168/2024/NĐ-CP mới nhất. Tra cứu lỗi vi phạm, mức phạt chi tiết, dễ hiểu.",

  keywords:
    "mức phạt giao thông 2025, nghị định 168/2024/NĐ-CP, vi phạm ô tô xe máy, lỗi vượt đèn đỏ, lỗi tốc độ, không đội mũ, mức phạt nồng độ cồn",
  charset: "UTF-8",
  openGraph: {
    title: `Mức Phạt Vi Phạm Giao Thông Mới Nhất | ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Tra cứu mức phạt vi phạm giao thông theo Nghị định mới nhất: lỗi chạy quá tốc độ, không đội mũ bảo hiểm, vượt đèn đỏ... đầy đủ, chính xác tại ${process.env.NEXT_PUBLIC_DOMAIN}`,
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/muc-phat`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/mucphat.png`,
        width: 1024,
        height: 1024,
        alt: "Danh sách mức phạt vi phạm giao thông",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Mức Phạt Vi Phạm Giao Thông Mới Nhất | ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Tra cứu mức phạt vi phạm giao thông theo Nghị định mới nhất: lỗi chạy quá tốc độ, không đội mũ bảo hiểm, vượt đèn đỏ... đầy đủ, chính xác tại ${process.env.NEXT_PUBLIC_DOMAIN}`,
    images: [`${process.env.NEXT_PUBLIC_WEB_URL}/mucphat.png`],
  },
};

export default function PenaltyRatesPage() {
  const violations = [
    {
      title: "Không chấp hành hiệu lệnh của đèn tín hiệu giao thông",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 04 - 06 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 18 - 20 triệu đồng",
      ],
    },
    {
      title:
        "Đi ngược chiều của đường một chiều, đi ngược chiều trên đường có biển “Cấm đi ngược chiều”",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 04 - 06 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 18 - 20 triệu đồng",
      ],
    },
    {
      title:
        "Không giảm tốc độ (hoặc dừng lại) và nhường đường khi điều khiển xe chạy từ trong ngõ, đường nhánh ra đường chính; Không nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới tại nơi đường giao nhau",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 800.000 đồng - 01 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 04 - 06 triệu đồng",
      ],
    },
    {
      title:
        "Chuyển hướng không nhường quyền đi trước cho người đi bộ, xe lăn tại nơi có vạch kẻ đường dành cho người đi bộ",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 300.000 - 400.000 đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 04 - 06 triệu đồng",
      ],
    },
    {
      title:
        "Mở cửa xe, để cửa xe mở không bảo đảm an toàn gây tai nạn giao thông",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 400.000 - 600.000 đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 20 - 22 triệu đồng",
      ],
    },
    {
      title:
        "Vận chuyển hàng trên xe phải chằng buộc mà không chằng buộc hoặc có chằng buộc nhưng không bảo đảm an toàn theo quy định",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 600.000 - 800.000 đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 18 - 22 triệu đồng",
      ],
    },
    {
      title:
        "Không chấp hành hiệu lệnh chỉ dẫn của người điều khiển giao thông",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 04 - 06 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 18 - 20 triệu đồng",
      ],
    },
    {
      title:
        "Cản trở, không chấp hành yêu cầu kiểm tra, kiểm soát của người thực thi công vụ",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 04 - 06 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 35 - 37 triệu đồng",
      ],
    },
    {
      title:
        "Lạng lách, đánh võng; chạy quá tốc độ đuổi nhau trên đường bộ; dùng chân điều khiển vô lăng xe khi xe đang chạy trên đường",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 10 - 12 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 40 - 50 triệu đồng",
      ],
    },
    {
      title:
        "Vi phạm nồng độ cồn vượt quá 50 miligam đến 80 miligam/100 mililít máu hoặc vượt quá 0,25 miligam đến 0,4 miligam/1 lít khí thở",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 16 - 18 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 18 - 20 triệu đồng",
      ],
    },
    {
      title: "Điều khiển xe chạy quá tốc độ trên 35km/h",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 10 - 12 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 12 - 14 triệu đồng",
      ],
    },
    {
      title:
        "Điều khiển xe ô tô gắn biển số không rõ chữ, số hoặc gắn biển số không đúng với chứng nhận đăng ký xe hoặc không do cơ quan có thẩm quyền cấp",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 04 - 06 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 20 - 26 triệu đồng",
      ],
    },
    {
      title:
        "Dùng tay cầm và sử dụng điện thoại hoặc các thiết bị điện tử khác khi điều khiển phương tiện tham gia giao thông đang di chuyển trên đường bộ",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 02 - 03 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 04 - 06 triệu đồng",
      ],
    },
    {
      title:
        "Điều khiển xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ đi vào đường cao tốc",
      details: [
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 12 - 14 triệu đồng",
      ],
    },
    {
      title: "Dừng xe, đỗ xe trên đường cao tốc không đúng nơi quy định",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 10 - 12 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 10 - 12 triệu đồng",
      ],
    },
    {
      title: "Điều khiển xe đi ngược chiều trên đường cao tốc",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 16 - 18 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 30 - 40 triệu đồng",
      ],
    },
    {
      title: "Lùi xe trên đường cao tốc",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 16 - 18 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 30 - 40 triệu đồng",
      ],
    },
    {
      title: "Quay đầu xe trên đường cao tốc",
      details: [
        "Mức phạt theo Nghị định 100/2019/NĐ-CP và 123/2021/NĐ-CP: 10 - 12 triệu đồng",
        "Mức phạt theo Nghị định 168/2024/NĐ-CP (cập nhật 2025): 30 - 40 triệu đồng",
      ],
    },
  ];

  const colors = {
    isNewPolicy: "#262fed",
    isOldPolicy: "#ff9800",
    disobeySignal: "#f44336", // Không chấp hành đèn - đỏ
    speeding: "#3f51b5", // Tốc độ - xanh biển
    licenseBan: "#d32f2f", // Tước quyền sử dụng GPLX - đỏ đậm
    fine: "#2e7d32", // Mức phạt tiền - xanh lá
    default: "#333", // Mặc định
  };

  const getTitleColor = (title) => {
    // if (title.includes("nồng độ cồn")) return colors.alcohol;
    // if (title.includes("không chấp hành")) return colors.disobeySignal;
    // if (title.includes("tốc độ")) return colors.speeding;
    // if (title.includes("Tước quyền")) return colors.licenseBan;
    return colors.default;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mức phạt vi phạm giao thông 2025",
    description:
      "Tra cứu mức phạt giao thông mới nhất theo nghị định 168/2024/NĐ-CP. Cập nhật lỗi vi phạm ô tô, xe máy chi tiết.",
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/muc-phat`,
    logo: `${process.env.NEXT_PUBLIC_WEB_URL}/mucphat.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+84${+companyInfo?.phoneNumber?.replaceAll(".", "")}`,
      contactType: "Customer Service",
      email: companyInfo?.email,
    },
    sameAs: [process.env.NEXT_PUBLIC_WEB_TTDK_URL],
    availableLanguage: "vi", // Vietnamese language
    areaServed: "VN", // Vietnam
  };

  return (
    <>
      <HeadTagForSEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        openGraph={metadata.openGraph}
        twitter={metadata.twitter}
        structuredData={structuredData}
      />
      <>
        <Typography
          className="!text-[var(--primary-color)]"
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            textAlign: "center",
            mb: 3,
          }}
        >
          Mức Phạt Giao Thông Ô Tô, Xe Máy 2025 Theo Nghị Định Mới
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Bạn đang tìm hiểu mức phạt vi phạm giao thông mới nhất năm 2025? Trang
          này cung cấp thông tin cập nhật theo Nghị định 168/2024/NĐ-CP, áp dụng
          cho ô tô, xe máy và các phương tiện giao thông khác. Tìm hiểu ngay các
          lỗi thường gặp và mức phạt tương ứng một cách nhanh chóng và dễ hiểu.
        </Typography>

        <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
          Tổng hợp mức phạt theo từng hành vi vi phạm
        </Typography>

        {violations.map((violation, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 1,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              boxShadow: "none",
              "&:hover": {
                borderColor: "#90caf9",
                backgroundColor: "#fafafa",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: "#f9f9f9",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: getTitleColor(violation.title),
                  fontWeight: 600,
                }}
              >
                {violation.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box component="ul" sx={{ pl: 2, mt: 1, mb: 1 }}>
                {violation.details.map((detail, detailIndex) => {
                  const isOldPolicy = detail.includes(
                    "Nghị định 100/2019/NĐ-CP"
                  );
                  const isNewPolicy = detail.includes(
                    "Nghị định 168/2024/NĐ-CP"
                  );
                  const highlightColor = isNewPolicy
                    ? colors.isNewPolicy
                    : colors.isOldPolicy;
                  const [highlight, rest] = detail.split(":");

                  return (
                    <Box component="li" key={detailIndex} sx={{ mb: 1 }}>
                      <Typography variant="body2">
                        <span
                          style={{ color: highlightColor, fontWeight: "bold" }}
                        >
                          {highlight}
                        </span>
                        {rest && (
                          <span style={{ color: colors.default }}>
                            : {rest}
                          </span>
                        )}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            display: "flex",
            gap: 2,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Button
            component={Link}
            href="/"
            variant="contained"
            className="!bg-[var(--primary-color)]"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Tra Cứu
          </Button>
          <Button
            component={Link}
            href={`${process.env.NEXT_PUBLIC_AFFILIATE_WEB_URL}/AppSharing/TraCuuPhatNguoi?appuserid=873523`}
            target="_blank"
            variant="contained"
            className="!bg-[var(--primary-color)]"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Nhận thông báo phạt nguội
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          <strong>Lưu ý:</strong> Mức phạt trên chỉ mang tính chất tham khảo.
          Mức phạt cụ thể có thể thay đổi tùy theo tình huống thực tế và quy
          định mới nhất của pháp luật. Vui lòng tham khảo các văn bản pháp luật
          chính thức để biết thông tin chính xác nhất.
        </Typography>
      </>
    </>
  );
}
