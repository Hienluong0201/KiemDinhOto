import HeadTagForSEO from "@/components/HeadTagForSEO";
import companyInfo from "@/constants/companyInfo";
import { Typography, Paper, Box } from "@mui/material";
import Link from "next/link";

export const metadata = {
  title: `Tác Giả & Đội Ngũ Phát Triển Ứng Dụng | ${process.env.NEXT_PUBLIC_DOMAIN}`,
  description:
    `Giới thiệu đội ngũ phát triển ứng dụng tra cứu phạt nguội ${process.env.NEXT_PUBLIC_DOMAIN}: các kỹ sư phần mềm và chuyên gia giao thông đầy tâm huyết.`,
  keywords:
    "tác giả, đội ngũ phát triển, ứng dụng phatnguoi, phạt nguội, kỹ sư phần mềm, chuyên gia giao thông, phát triển ứng dụng",
  charset: "UTF-8",
  openGraph: {
    title: `Tác Giả & Đội Ngũ Phát Triển Ứng Dụng | ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Giới thiệu đội ngũ phát triển ứng dụng tra cứu phạt nguội ${process.env.NEXT_PUBLIC_DOMAIN}: các kỹ sư phần mềm và chuyên gia giao thông đầy tâm huyết.`,
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/tac-gia`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/tacgia.png`,
        width: 1200,
        height: 630,
        alt: `Thông tin tác giả ${process.env.NEXT_PUBLIC_DOMAIN}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tác Giả & Đội Ngũ Phát Triển Ứng Dụng | ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Giới thiệu về công ty phát triển ứng dụng tra cứu phạt nguội ${process.env.NEXT_PUBLIC_DOMAIN}: các kỹ sư phần mềm và chuyên gia giao thông đầy tâm huyết.`,
    images: [`${process.env.NEXT_PUBLIC_WEB_URL}/tacgia.png`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: companyInfo?.shortName,
  url: `${process.env.NEXT_PUBLIC_WEB_URL}/tac-gia`,
  logo: `${process.env.NEXT_PUBLIC_WEB_URL}/tacgia.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+84${+companyInfo?.phoneNumber?.replaceAll(".", "")}`,
    contactType: "Customer Service",
    email: companyInfo?.email,
  },
  sameAs: [process.env.NEXT_PUBLIC_WEB_TTDK_URL],
  availableLanguage: "vi", // Trang có ngôn ngữ tiếng Việt
  areaServed: "VN", // Phục vụ tại Việt Nam
};

export default function AuthorPage() {
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
          Về Công Ty
        </Typography>

        <Typography variant="body1" paragraph>
          {companyInfo?.name} ({companyInfo?.shortName}) là doanh nghiệp
          hàng đầu trong lĩnh vực cung cấp dịch vụ đăng kiểm xe cơ giới tại Việt
          Nam. Với hệ thống trung tâm rộng khắp và đội ngũ cán bộ chuyên nghiệp,
          {companyInfo?.shortName} luôn nỗ lực đem lại trải nghiệm thuận tiện, minh bạch và hiệu quả
          cho người dân.
        </Typography>

        <Typography variant="body1" paragraph>
          Công ty hướng tới xây dựng hệ sinh thái đăng kiểm điện tử, áp dụng
          công nghệ hiện đại để số hóa toàn bộ quy trình, từ đăng ký, thanh toán
          đến theo dõi trạng thái xe. {companyInfo?.shortName} cam kết đồng hành cùng khách hàng
          trong hành trình đảm bảo an toàn kỹ thuật và bảo vệ môi trường cho
          phương tiện giao thông.
        </Typography>

        <Typography variant="body1" paragraph>
          <ul style={{ paddingLeft: "1rem", margin: 0 }}>
            <li>
              Trụ sở: {companyInfo?.address}
            </li>
            <li>
              Hotline:{" "}
              <Link
                href={`tel:${companyInfo?.phoneNumber?.replaceAll(".", "")}`}
                className="!text-[var(--primary-color)]"
              >
                <strong>${companyInfo?.phoneNumber}</strong>
              </Link>
            </li>
            <li>
              Website:{" "}
              <Link
                href={process.env.NEXT_PUBLIC_WEB_TTDK_URL}
                target="_blank"
                className="!text-[var(--primary-color)]"
              >
                <strong>{process.env.NEXT_PUBLIC_DOMAIN}</strong>
              </Link>
            </li>
            <li>
              Email:{" "}
              <Link
                href={`mailto:${companyInfo?.email}`}
                className="!text-[var(--primary-color)]"
              >
                <strong>{companyInfo?.email}</strong>
              </Link>
            </li>
          </ul>
        </Typography>

        {/* Liên hệ */}
        <Typography variant="body1" paragraph sx={{ mt: 4 }}>
          Nếu bạn có bất kỳ câu hỏi, góp ý hoặc đề xuất hợp tác, vui lòng liên
          hệ qua email:{" "}
          <Link
            href={`mailto:${companyInfo?.email}`}
            className="!text-[var(--primary-color)]"
          >
            <strong>{companyInfo?.email}</strong>
          </Link>
        </Typography>
      </>
    </>
  );
}
