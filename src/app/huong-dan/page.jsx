import {
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import HeadTagForSEO from "@/components/HeadTagForSEO";
import companyInfo from "@/constants/companyInfo";

export const metadata = {
  title:
    `Hướng Dẫn Sử Dụng - Tra Cứu Phạt Nguội Nhanh & Chính Xác | ${process.env.NEXT_PUBLIC_DOMAIN}`,
  description:
    `Hướng dẫn chi tiết cách sử dụng ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN} để tra cứu phạt nguội ô tô, xe máy nhanh chóng, chính xác và miễn phí. Tìm hiểu cách đăng ký nhận thông báo phạt nguội dễ dàng.`,
  keywords:
    "hướng dẫn sử dụng, tra cứu phạt nguội, ứng dụng phatnguoi, phạt nguội ô tô, phạt nguội xe máy, tra cứu phạt nhanh chóng, tra cứu miễn phí, đăng ký thông báo phạt nguội",
  openGraph: {
    title:
      `Hướng Dẫn Sử Dụng - Tra Cứu Phạt Nguội Nhanh & Chính Xác | ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Hướng dẫn chi tiết cách sử dụng ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN} để tra cứu phạt nguội ô tô, xe máy nhanh chóng, chính xác và miễn phí.`,
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/huong-dan`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/huongdansudung.png`,
        width: 1024,
        height: 1024,
        alt: `Hướng dẫn sử dụng ${process.env.NEXT_PUBLIC_DOMAIN}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      `Hướng Dẫn Sử Dụng - Tra Cứu Phạt Nguội Nhanh & Chính Xác | ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Hướng dẫn chi tiết cách sử dụng ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN} để tra cứu phạt nguội ô tô, xe máy nhanh chóng, chính xác và miễn phí.`,
    images: [`${process.env.NEXT_PUBLIC_WEB_URL}/huongdansudung.png`],
  },
  charSet: "UTF-8",
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Hướng Dẫn Sử Dụng Phatnguoi",
  description:
    `Hướng dẫn chi tiết cách sử dụng ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN} để tra cứu phạt nguội ô tô, xe máy nhanh chóng và chính xác.`,
  url: `${process.env.NEXT_PUBLIC_WEB_URL}/huong-dan`,
  image: {
    "@type": "ImageObject",
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/huongdansudung.png`,
    width: 1200,
    height: 630,
  },
  totalTime: "PT2M", // Ước lượng thời gian hoàn thành, có thể điều chỉnh
  supply: [],
  tool: [],
  step: [
    {
      "@type": "HowToStep",
      name: "Quét Mã QR",
      text: `Dùng điện thoại quét mã QR để truy cập vào ứng dụng Phạt Nguội ${companyInfo?.shortName}.`,
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/huong-dan#quet-ma-qr`,
      image: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/steps/quetmaqr.png`,
      },
    },
    {
      "@type": "HowToStep",
      name: "Chọn Phương Tiện",
      text: "Lựa chọn loại phương tiện muốn tra cứu: ô tô hoặc xe máy.",
      url: `${process.env.NEXT_PUBLIC_WEB_TTDK_URL}/automated-traffic-fine-notification/vehicles`,
    },
    {
      "@type": "HowToStep",
      name: "Chọn Gói Dịch Vụ",
      text: "Chọn một trong các gói dịch vụ phù hợp với nhu cầu tra cứu.",
      url: `${process.env.NEXT_PUBLIC_WEB_TTDK_URL}/automated-traffic-fine-notification/services`,
    },
    {
      "@type": "HowToStep",
      name: "Thanh Toán",
      text: "Tiến hành thanh toán qua ví điện tử hoặc ngân hàng.",
      url: `${process.env.NEXT_PUBLIC_WEB_TTDK_URL}/automated-traffic-fine-notification/payment`,
    },
    // {
    //   "@type": "HowToStep",
    //   name: "Nhận Kết Quả",
    //   text: "Hệ thống sẽ gửi kết quả tra cứu sau vài phút.",
    //   url: `${process.env.NEXT_PUBLIC_WEB_TTDK_URL}/huong-dan#nhan-ket-qua`,
    // },
  ],
};

export default function GuidePage() {
  const steps = [
    {
      label: "Quét Mã QR",
      description:
        "Sử dụng ứng dụng Zalo để quét mã QR hiển thị trên màn hình để đăng ký nhận thông báo phạt nguội.",
    },
    {
      label: "Chọn Phương Tiện",
      description:
        "Chọn ít nhất một phương tiện bạn muốn đăng ký nhận thông báo phạt nguội qua Zalo.",
    },
    {
      label: "Chọn Gói Dịch Vụ",
      description:
        "Chọn gói dịch vụ phù hợp với nhu cầu nhận thông báo của bạn.",
    },
    {
      label: "Thanh Toán",
      description:
        "Thực hiện thanh toán bằng cách quét mã QR hoặc sao chép thông tin để chuyển khoản trên ứng dụng ngân hàng được liên kết (ví dụ: BIDV).",
    },
    {
      label: "Nhận Thông Báo",
      description:
        "Sau khi đăng ký thành công, bạn sẽ nhận được thông báo phạt nguội qua ứng dụng Zalo khi có thông tin vi phạm mới.",
    },
  ];

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
          Hướng Dẫn Sử Dụng
        </Typography>

        {/* 🔽 Hình ảnh minh họa đẹp chuẩn UI/UX */}
        <Box
          justifyContent={"center"}
          display={"flex"}
          sx={{ mb: 4, borderRadius: 3, overflow: "hidden", boxShadow: 2 }}
        >
          <Image
            src="/huongdan.png"
            alt={`Hướng dẫn sử dụng ${process.env.NEXT_PUBLIC_DOMAIN} để tra cứu phạt nguội`}
            width={800}
            height={500}
            layout="intrinsic"
            objectFit="contain"
            priority
          />
        </Box>
        <Typography variant="body1" paragraph>
          <strong className="text-[var(--primary-color)]">
            {process.env.NEXT_PUBLIC_DOMAIN}
          </strong>{" "}
          là công cụ tra cứu phạt nguội trực tuyến, giúp bạn kiểm tra nhanh
          chóng các vi phạm giao thông đã được ghi lại qua hệ thống camera giám
          sát. Chúng tôi cung cấp dịch vụ thông báo phạt nguội qua Zalo cho các
          phương tiện ô tô và xe máy, giúp bạn nhận thông báo ngay khi có vi
          phạm mới.
        </Typography>

        <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
          Các bước sử dụng dịch vụ phạt nguội
        </Typography>
        <Box sx={{ mt: 4, mb: 4 }}>
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index} active={true}>
                <StepLabel>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {step.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Typography variant="body1" paragraph>
          <strong>Thông báo vi phạm mới:</strong> Đăng ký nhận thông báo khi có
          vi phạm mới được ghi nhận cho phương tiện của bạn.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Hướng dẫn nộp phạt:</strong> Cung cấp thông tin chi tiết về
          cách thức và địa điểm nộp phạt vi phạm giao thông.
        </Typography>
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
      </>
    </>
  );
}
