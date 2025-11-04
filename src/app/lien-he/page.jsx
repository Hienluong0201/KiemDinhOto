import HeadTagForSEO from "@/components/HeadTagForSEO";
import companyInfo from "@/constants/companyInfo";
import { Typography, Paper, Box, Link } from "@mui/material";
import NextLink from "next/link";

export const metadata = {
  title: `Liên hệ - ${process.env.NEXT_PUBLIC_DOMAIN}`,
  description:
    `Liên hệ với ${process.env.NEXT_PUBLIC_DOMAIN} để được hỗ trợ và giải đáp thắc mắc. Chúng tôi luôn sẵn sàng giúp đỡ bạn.`,
  keywords:
   `liên hệ, hỗ trợ khách hàng, ${process.env.NEXT_PUBLIC_DOMAIN} liên lạc, hỏi đáp`,
  charset: "UTF-8",
  openGraph: {
    title: `Liên hệ - ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Liên hệ với ${process.env.NEXT_PUBLIC_DOMAIN} để được hỗ trợ và giải đáp thắc mắc nhanh chóng.`,
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/lien-he`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/lienhe.png`,
        width: 1024,
        height: 1024,
        alt: `Thông tin liên hệ ${process.env.NEXT_PUBLIC_DOMAIN}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Liên hệ - ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Liên hệ với ${process.env.NEXT_PUBLIC_DOMAIN} để được hỗ trợ và giải đáp thắc mắc nhanh chóng.`,
    images: [`${process.env.NEXT_PUBLIC_WEB_URL}/lienhe.png`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo?.shortName,
  url: `${process.env.NEXT_PUBLIC_WEB_URL}/lien-he`, // URL hợp lệ cho trang Liên Hệ
  logo: `${process.env.NEXT_PUBLIC_WEB_URL}/lienhe.png`, // Logo chính của tổ chức
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+84${+companyInfo?.phoneNumber?.replaceAll(".", "")}`, // Số điện thoại hỗ trợ khách hàng
    contactType: "Customer Service", // Loại dịch vụ hỗ trợ (Customer Service)
    email: companyInfo?.email, // Email hỗ trợ
    areaServed: "VN", // Địa lý dịch vụ (nếu có thể xác định được)
    availableLanguage: "Vietnamese", // Ngôn ngữ hỗ trợ
  },
  sameAs: [
    process.env.NEXT_PUBLIC_WEB_TTDK_URL, // Website chính thức của tổ chức
    "https://www.facebook.com/ttdk", // Ví dụ nếu tổ chức có tài khoản mạng xã hội
  ],
};

export default function ContactPage() {
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
          Thông Tin Liên Hệ
        </Typography>

        <Typography variant="body1" paragraph>
          Chúng tôi {process.env.NEXT_PUBLIC_DOMAIN} (
          <strong className="!text-[var(--primary-color)]">
            {process.env.NEXT_PUBLIC_DOMAIN})
          </strong>{" "}
          không phải là cơ quan pháp luật hay đại diện cho tổ chức nào cả. Mọi
          dữ liệu về phạt nguội chúng tôi lấy nguồn từ{" "}
          <strong>Cục Cảnh sát giao thông</strong>. Kết quả tra cứu được tra về
          từ: csgt.vn. Những thông tin trong mục trả kết quả là chính xác 100%
          và được phép khi đã báo cho người dân về nguồn dữ liệu.
        </Typography>

        <Typography variant="body1" paragraph>
          Những bài viết trong website tra cứu phạt nguội toàn quốc{" "}
          <strong className="!text-[var(--primary-color)]">
            {process.env.NEXT_PUBLIC_DOMAIN}
          </strong>{" "}
          này được{" "}
          <Link href={process.env.NEXT_PUBLIC_WEB_TTDK_URL} target="_blank">
            <strong className="!text-[var(--primary-color)]">{companyInfo?.shortName}</strong>
          </Link>{" "}
          tổng hợp và sưu tập từ các trang luật và nguồn báo uy tín nếu có bất
          cứ bài viết nào chưa đúng sự thật vui lòng liên hệ với chúng tôi qua
          fanpage chúng tôi sẽ gỡ bỏ ngay lập tức đồng thời cũng xin lỗi về sự
          cố này.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3, fontWeight: "medium" }}>
          Đọc thêm
        </Typography>

        <Box component="ol" sx={{ pl: 4, mt: 1 }}>
          <Box component="li" sx={{ mb: 1 }}>
            <Link component={NextLink} href="/gioi-thieu" color="primary">
              <strong className="!text-[var(--primary-color)]">
                Giới thiệu {process.env.NEXT_PUBLIC_DOMAIN}
              </strong>
            </Link>
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            <Link component={NextLink} href="/bao-mat" color="primary">
              <strong className="!text-[var(--primary-color)]">
                Chính sách bảo mật
              </strong>
            </Link>
          </Box>
        </Box>

        <Typography
          variant="h5"
          component="h2"
          sx={{ mt: 4, mb: 3, fontWeight: "bold" }}
        >
          Liên hệ với{" "}
          <strong className="text-[var(--primary-color)]">
            {" "}
            {process.env.NEXT_PUBLIC_DOMAIN}
          </strong>{" "}
          để được hỗ trợ
        </Typography>

        <Box component="ol" sx={{ pl: 4 }}>
          <Box component="li" sx={{ mb: 1 }}>
            <Typography variant="body1">
              FanPage:{" "}
              <Link
                component={NextLink}
                target="_blank"
                href={companyInfo?.facebookLink}
                color="primary"
                sx={{
                  fontWeight: "bold",
                  color: "var(--primary-color)",
                  wordBreak: "break-all", // hoặc break-word nếu muốn cắt theo từ
                  whiteSpace: "normal", // đảm bảo có thể xuống dòng
                }}
              >
                Cộng đồng người dùng app {companyInfo?.shortName} - Đặt lịch đăng kiểm
              </Link>
            </Typography>
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Gmail:{" "}
            <Link href={`mailto:${companyInfo?.email}`}>
              <strong className="text-[var(--primary-color)]">
                {companyInfo?.email}
              </strong>
            </Link>
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            <Typography variant="body1">
              Website chính thức:{" "}
              <Link
                target="_blank"
                component={NextLink}
                href={process.env.NEXT_PUBLIC_WEB_URL}
                color="primary"
              >
                <strong className="!text-[var(--primary-color)]">
                  {process.env.NEXT_PUBLIC_WEB_URL}
                </strong>
              </Link>
            </Typography>
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            <Typography variant="body1">
              Địa chỉ:{" "}
              <strong>
                {companyInfo?.address}
              </strong>
            </Typography>
          </Box>
        </Box>
      </>
    </>
  );
}
