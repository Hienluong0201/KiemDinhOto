import HeadTagForSEO from "@/components/HeadTagForSEO";
import companyInfo from "@/constants/companyInfo";
import { Typography, Paper, Box } from "@mui/material";
import Link from "next/link";

export const metadata = {
  title: `Bảo Mật Thông Tin Khách Hàng | ${companyInfo?.shortName}`,
  description:
    `${companyInfo?.shortName} cam kết bảo vệ tuyệt đối thông tin thanh toán và dữ liệu cá nhân của khách hàng, mang đến trải nghiệm giao dịch an toàn và minh bạch.`,
  keywords: [
    `chính sách bảo mật ${companyInfo?.shortName}`,
    "bảo mật thông tin khách hàng",
    "an toàn thanh toán trực tuyến",
    "bảo mật dữ liệu cá nhân",
    "trang web tra cứu phạt nguội",
  ],
  openGraph: {
    site_name: `${companyInfo?.shortName}`,
    title: `Bảo Mật Thông Tin Khách Hàng | ${companyInfo?.shortName}`,
    description:
      `${companyInfo?.shortName} cam kết bảo vệ tuyệt đối thông tin thanh toán và dữ liệu cá nhân của khách hàng, mang đến trải nghiệm giao dịch an toàn và minh bạch.`,
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/chinh-sach-bao-mat`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/baomatthongtinkhachhang.png`,
        width: 1200,
        height: 630,
        alt: `Chính sách bảo mật ${companyInfo?.shortName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bảo Mật Thông Tin Khách Hàng | ${companyInfo?.shortName}`,
    description:
      `Cam kết bảo vệ dữ liệu cá nhân và thanh toán an toàn tuyệt đối – ${companyInfo?.shortName}.`,
    images: [`${process.env.NEXT_PUBLIC_WEB_URL}/baomatthongtinkhachhang.png`],
  },
  charset: "UTF-8",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Chính Sách Bảo Mật Thông Tin Khách Hàng",
  url: `${process.env.NEXT_PUBLIC_WEB_URL}/chinh-sach-bao-mat`,
  description:
    `Chính sách bảo mật của ${companyInfo?.shortName} cam kết bảo vệ dữ liệu cá nhân và thông tin thanh toán của khách hàng, đảm bảo an toàn và minh bạch trong mọi giao dịch.`,
  publisher: {
    "@type": "Organization",
    name: `${companyInfo?.shortName}`,
    logo: {
      "@type": "ImageObject",
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/baomatthongtinkhachhang.png`,
    },
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${companyInfo?.shortName} thu thập thông tin gì từ khách hàng?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${companyInfo?.shortName}thu thập thông tin thanh toán như họ tên chủ thẻ, số tài khoản, ngày hết hạn, mã bảo mật (CVV)... để xử lý giao dịch.`,
        },
      },
      {
        "@type": "Question",
        name: "Thông tin thanh toán có được mã hóa không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Có. ${companyInfo?.shortName} áp dụng chuẩn bảo mật PCI DSS, mã hóa thông tin thanh toán và không lưu trữ mã CVV sau khi giao dịch.`,
        },
      },
      {
        "@type": "Question",
        name: "Khách hàng có thể yêu cầu chỉnh sửa thông tin không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Khách hàng có thể yêu cầu chỉnh sửa hoặc xóa thông tin thanh toán bất cứ lúc nào.",
        },
      },
    ],
  },
};

export default function PrivacyPage() {
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
          Chính Sách Bảo Mật Thông Tin Thanh Toán Của Khách Hàng
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>1. Mục đích và phạm vi thu thập thông tin</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Chính sách này nhằm đảm bảo mọi thông tin liên quan đến thanh toán của
          khách hàng được bảo mật tuyệt đối, không bị xâm phạm, sử dụng trái
          phép hoặc tiết lộ ra bên ngoài. Chính sách áp dụng cho tất cả các giao
          dịch trực tuyến và tại cửa hàng, thông qua các phương thức thanh toán
          như tiền mặt, thẻ tín dụng, thẻ ghi nợ, chuyển khoản ngân hàng, hoặc
          các nền tảng ví điện tử.
        </Typography>
        {/* <Typography variant="body1" component="ul" sx={{ pl: 6 }}>
          <li>Hỗ trợ khách hàng khi sử dụng dịch vụ của hệ thống.</li>
          <li>Giải đáp thắc mắc, xử lý khiếu nại, phản hồi người dùng.</li>
          <li>
            Cung cấp thông tin liên quan đến dịch vụ, chương trình ưu đãi.
          </li>
          <li>Cải thiện chất lượng dịch vụ và chăm sóc khách hàng.</li>
        </Typography> */}

        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>2. Thu thập thông tin thanh toán</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Thông tin thanh toán có thể bao gồm:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 6 }}>
          <li>Họ và tên chủ thẻ hoặc tài khoản.</li>
          <li>Số tài khoản ngân hàng hoặc thẻ tín dụng.</li>
          <li>Ngày hết hạn của thẻ.</li>
          <li>Mã bảo mật (CVV).</li>
          <li>Các thông tin khác liên quan đến giao dịch thanh toán.</li>
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>3. Cam kết bảo mật thông tin</strong>
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 6 }}>
          <li>
            Thông tin thanh toán được mã hóa và lưu trữ an toàn trong hệ thống
            đạt chuẩn bảo mật PCI DSS (Payment Card Industry Data Security
            Standard).
          </li>
          <li>
            Chúng tôi không lưu trữ mã bảo mật CVV sau khi giao dịch hoàn tất.
          </li>
          <li>
            Tất cả các giao dịch đều được thực hiện qua các cổng thanh toán uy
            tín, đảm bảo an toàn cho khách hàng.
          </li>
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>4. Phạm vi sử dụng thông tin thanh toán</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Thông tin thanh toán của khách hàng chỉ được sử dụng với mục đích:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 6 }}>
          <li>Xử lý và xác nhận các giao dịch thanh toán.</li>
          <li>Cung cấp dịch vụ hoặc sản phẩm mà khách hàng đã đăng ký/mua.</li>
          <li>Phòng tránh gian lận, đảm bảo an toàn giao dịch..</li>
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>5. Chia sẻ thông tin</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          {companyInfo?.shortName} cam kết không chia sẻ, mua bán hay trao đổi thông tin thanh toán
          của khách hàng cho bên thứ ba, ngoại trừ:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 6 }}>
          <li>Khi có yêu cầu từ cơ quan pháp luật.</li>
          <li>
            Hợp tác với các đơn vị cung cấp dịch vụ thanh toán để xử lý giao
            dịch.
          </li>
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>6. Quyền lợi của khách hàng</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Khách hàng có quyền:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 6 }}>
          <li>
            Kiểm tra, chỉnh sửa hoặc yêu cầu xóa thông tin thanh toán cá nhân
            bất cứ lúc nào.
          </li>
          <li>
            Yêu cầu giải thích về việc thu thập và sử dụng thông tin của mình.
          </li>
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>7. Liên hệ hỗ trợ</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Nếu có bất kỳ thắc mắc hoặc yêu cầu nào liên quan đến chính sách bảo
          mật thông tin thanh toán, khách hàng có thể liên hệ qua:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 6 }}>
          <li>
            Email:{" "}
            <Link
              href={`mailto:${companyInfo?.email}`}
              className="!text-[var(--primary-color)]"
            >
              <strong>{companyInfo?.email}</strong>
            </Link>
          </li>
          <li>
            Hotline:{" "}
            <Link
              href={`tel:${companyInfo?.phoneNumber?.replaceAll(".", "")}`}
              className="!text-[var(--primary-color)]"
            >
              <strong>{companyInfo?.phoneNumber}</strong>
            </Link>
          </li>
          <li>
            Địa chỉ: {companyInfo?.address}
          </li>
        </Typography>
      </>
    </>
  );
}
