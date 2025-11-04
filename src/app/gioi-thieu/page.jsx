import HeadTagForSEO from "@/components/HeadTagForSEO";
import companyInfo from "@/constants/companyInfo";
import { Typography, Paper } from "@mui/material";

export const metadata = {
  title:
    `Giới Thiệu Ứng Dụng ${process.env.NEXT_PUBLIC_DOMAIN} - Tra Cứu Phạt Nguội Nhanh Chóng, Chính Xác`,
  description:
    `Tìm hiểu về ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN} - nền tảng tra cứu phạt nguội ô tô, xe máy nhanh chóng, chính xác, cập nhật liên tục từ Cục CSGT Việt Nam.`,
  keywords:
    "giới thiệu ứng dụng, phạt nguội, tra cứu phạt nguội, ứng dụng phatnguoi, phạt nguội ô tô, phạt nguội xe máy, cập nhật phạt nguội, Cục CSGT Việt Nam",

  openGraph: {
    title:
      `Giới Thiệu Ứng Dụng ${process.env.NEXT_PUBLIC_DOMAIN} - Tra Cứu Phạt Nguội Nhanh Chóng, Chính Xác`,
    description:
      `Tìm hiểu về ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN} - nền tảng tra cứu phạt nguội ô tô, xe máy nhanh chóng, chính xác, cập nhật liên tục từ Cục CSGT Việt Nam.`,
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/gioi-thieu`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/gioithieu.png`,
        width: 1024,
        height: 1536,
        alt: `Giới thiệu ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      `Giới Thiệu Ứng Dụng ${process.env.NEXT_PUBLIC_DOMAIN} - Tra Cứu Phạt Nguội Nhanh Chóng, Chính Xác`,
    description:
      `Tìm hiểu về ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN} - nền tảng tra cứu phạt nguội ô tô, xe máy nhanh chóng, chính xác, cập nhật liên tục từ Cục CSGT Việt Nam."`,
    images: [`${process.env.NEXT_PUBLIC_WEB_URL}/gioithieu.png`],
  },
  charset: "UTF-8",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo?.shortName,
  url: `${process.env.NEXT_PUBLIC_WEB_URL}/gioi-thieu`,
  logo: {
    "@type": "ImageObject",
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/gioithieu.png`,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone:  `+84${+companyInfo?.phoneNumber?.replaceAll(".", "")}`,
      contactType: "customer support",
      email: companyInfo?.email,
      areaServed: "VN",
      availableLanguage: ["Vietnamese"],
    },
  ],
  sameAs: [
    process.env.NEXT_PUBLIC_WEB_TTDK_URL,
    // Có thể thêm fanpage Facebook, YouTube, LinkedIn nếu có
  ],
};

export default function AboutPage() {
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
          Giới Thiệu
        </Typography>
        <Typography variant="body1" paragraph>
          <strong className="!text-[var(--primary-color)]">
            {" "}
            {process.env.NEXT_PUBLIC_DOMAIN}
          </strong>{" "}
          là dịch vụ tra cứu phạt nguội trực tuyến, giúp người dùng dễ dàng kiểm
          tra các vi phạm giao thông đã được ghi lại qua hệ thống camera giám
          sát.
        </Typography>

        <Typography variant="body1" paragraph>
          Chúng tôi cung cấp thông tin chính xác và cập nhật từ cơ sở dữ liệu
          của CSGT, giúp chủ phương tiện nắm bắt kịp thời các vi phạm để xử lý,
          tránh phát sinh thêm các khoản phạt không đáng có.
        </Typography>

        <Typography variant="body1" paragraph>
          Với giao diện đơn giản, thân thiện với người dùng,
          <strong className="text-[var(--primary-color)]">
            {" "}
            {process.env.NEXT_PUBLIC_DOMAIN}
          </strong>{" "}
          cam kết mang đến trải nghiệm tốt nhất cho người dùng, góp phần nâng
          cao ý thức chấp hành luật giao thông và đảm bảo an toàn cho cộng đồng.
        </Typography>
      </>
    </>
  );
}
