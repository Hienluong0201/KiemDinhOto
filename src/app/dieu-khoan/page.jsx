import HeadTagForSEO from "@/components/HeadTagForSEO";
import companyInfo from "@/constants/companyInfo";
import { Typography, Paper } from "@mui/material";

export const metadata = {
  title:
    `Điều Khoản Sử Dụng - Ứng Dụng Tra Cứu Phạt Nguội ${process.env.NEXT_PUBLIC_DOMAIN}`,
  description:
    `Đọc kỹ điều khoản sử dụng ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN}: quyền lợi, trách nhiệm và nghĩa vụ của người dùng khi tra cứu vi phạm giao thông. Cập nhật các quy định mới nhất.`,
  keywords:
    "điều khoản sử dụng, phạt nguội, tra cứu vi phạm giao thông, quyền lợi người dùng, trách nhiệm người dùng, nghĩa vụ người dùng, ứng dụng phatnguoi",
  openGraph: {
    site_name: `${companyInfo?.shortName}`,
    title:
      `Điều Khoản Sử Dụng - Ứng Dụng Tra Cứu Phạt Nguội ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Đọc kỹ điều khoản sử dụng ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN}: quyền lợi, trách nhiệm và nghĩa vụ của người dùng khi tra cứu vi phạm giao thông. Cập nhật các quy định mới nhất.`,
    url: `${process.env.NEXT_PUBLIC_WEB_URL}/dieu-khoan`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/dieukhoan.png`,
        width: 1024,
        height: 1024,
        alt: `Điều khoản sử dụng ${process.env.NEXT_PUBLIC_DOMAIN}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      `Điều Khoản Sử Dụng - Ứng Dụng Tra Cứu Phạt Nguội ${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      `Đọc kỹ điều khoản sử dụng ứng dụng ${process.env.NEXT_PUBLIC_DOMAIN}: quyền lợi, trách nhiệm và nghĩa vụ của người dùng khi tra cứu vi phạm giao thông. Cập nhật các quy định mới nhất.`,
    images: [`${process.env.NEXT_PUBLIC_WEB_URL}/dieukhoan.png`],
  },
  charset: "UTF-8",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Điều Khoản Sử Dụng ${companyInfo?.shortName}`,
  description:
    `Trang này mô tả các điều khoản và điều kiện khi sử dụng dịch vụ của ${companyInfo?.shortName}.`,
  url: `${process.env.NEXT_PUBLIC_WEB_URL}/dieu-khoan`,
  logo: `${process.env.NEXT_PUBLIC_WEB_URL}/dieukhoan.png`,
  publisher: {
    "@type": "Organization",
    name: companyInfo?.shortName,
    logo: {
      "@type": "ImageObject",
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/baomatthongtinkhachhang.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "LegalService",
    serviceType: "Điều Khoản Sử Dụng",
    provider: {
      "@type": "Organization",
      name: companyInfo?.shortName,
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/dieu-khoan`,
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+84${+companyInfo?.phoneNumber?.replaceAll(".", "")}`,
    contactType: "Customer Service",
    email: companyInfo?.email,
  },
  sameAs: [process.env.NEXT_PUBLIC_WEB_TTDK_URL],
};


export default function TermsPage() {
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
          Điều Khoản Sử Dụng
        </Typography>

        <Typography variant="body1" paragraph>
          Bằng việc sử dụng Dịch vụ trên trang web:{" "}
          <strong className="!text-[var(--primary-color)]">
            {process.env.NEXT_PUBLIC_DOMAIN}
          </strong>{" "}
          (sau đây gọi tắt là “trang web”), bạn đang đồng ý với các điều khoản
          sau đây. Vui lòng đọc kỹ các điều khoản này.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>1. Về việc sử dụng dịch vụ</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Các dịch vụ của chúng tôi là miễn phí. Bạn có toàn quyền sử dụng các
          dịch vụ miễn phí mà không cần phải sử dụng kèm theo các dịch vụ trả
          phí. Nếu bạn chỉ sử dụng dịch vụ miễn phí, hãy chia sẻ các thông tin
          mình thấy có ích cho bạn bè, người thân, hay đưa lên các phương tiện
          công cộng như diễn đàn, mạng xã hội… Đó cũng là một trong những cách
          gián tiếp ủng hộ chúng tôi, để có thể cung cấp các dịch vụ cho bạn tốt
          hơn, phát triển ngày càng chuyên nghiệp hơn.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>2. Chấp nhận quy định và điều kiện sử dụng dịch vụ</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Chúng tôi chỉ tổng hợp lại chia sẻ và không tự tạo ra các lỗi nếu có.
          Chúng tôi không chịu trách nhiệm về những sử dụng nào khác. Khi bạn
          truy cập vào website này có nghĩa là bạn hoàn toàn chịu sự mạo hiểm về
          nội dung của website, cũng như bạn phải đủ tự chủ khi gặp bất cứ hoàn
          cảnh nào có ảnh hưởng tới suy nghĩ và tâm lý của bạn, và bạn đã chấp
          nhận các điều cảnh báo trên và trước khi đồng ý vào website này. Nói
          rõ hơn một lần nữa là bạn phải chịu sự mạo hiểm về nội dung của
          website và không đổ thừa cho website hoặc tác giả website hay bất cứ
          một bên nào khác.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>3. Bảo mật thông tin cá nhân</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Tất cả các thông tin cá nhân (họ tên, tuổi, số điện thoại…) được hệ
          thống của chúng tôi ghi nhận trong quá trình sử dụng dịch vụ của bạn
          sẽ không được lưu trữ và tái sử dụng cho bất kỳ mục đích nào từ phía
          chúng tôi.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>4. Tái sử dụng các thông tin từ trang web</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Tất cả thông tin bạn có được từ trang web của chúng tôi chỉ có thể
          được sử dụng cho các mục đích phi thương mại. Ví dụ, bạn có thể sao
          chép về máy tính riêng, in ra văn bản giấy, sao chép về trang web cá
          nhân,… để tiện cho việc tham khảo sau này. Nếu bạn đưa các thông tin
          này ra các phương tiện công cộng (diễn đàn, mạng xã hội,…) với mục
          đích phi thương mại, vui lòng ghi rõ nguồn tham khảo từ
          <strong className="text-[var(--primary-color)]">
            {" "}
            {process.env.NEXT_PUBLIC_DOMAIN}
          </strong>{" "}
          Các hình thức khai thác thông tin của chúng tôi để thu lợi nhuận là
          không hợp pháp, và sẽ không được bất kỳ sự ủng hộ/hỗ trợ nào từ phía
          chúng tôi.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>5. Về các điều khoản này</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Chúng tôi có thể sửa đổi các điều khoản này hoặc bất kỳ điều khoản bổ
          sung nào áp dụng cho một Dịch vụ, chẳng hạn như để phản ánh những thay
          đổi về luật hoặc những thay đổi về Dịch vụ của chúng tôi. Bạn nên
          thường xuyên tìm hiểu các điều khoản này. Chúng tôi sẽ đăng thông báo
          về các sửa đổi đối với các điều khoản này trên trang này và đăng thông
          báo về các điều khoản bổ sung đã được sửa đổi trong Dịch vụ được áp
          dụng. Các thay đổi sẽ không áp dụng hồi tố và sẽ có hiệu lực không sớm
          hơn mười bốn ngày sau khi các thay đổi đó được đăng.
        </Typography>
        <Typography variant="body1" paragraph sx={{ pl: 2 }}>
          Tuy nhiên, những thay đổi liên quan đến chức năng mới của Dịch vụ hoặc
          các thay đổi được thực hiện vì lý do pháp lý sẽ có hiệu lực ngay lập
          tức. Nếu bạn không đồng ý với các điều khoản sửa đổi đối với một Dịch
          vụ nào đó, bạn nên ngừng sử dụng Dịch vụ đó. Nếu có sự mâu thuẫn giữa
          các điều khoản này và các điều khoản bổ sung, thì các điều khoản bổ
          sung sẽ được ưu tiên áp dụng đối với trường hợp mâu thuẫn đó.
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Cập nhật lần cuối: Tháng 4, 2025
        </Typography>
      </>
    </>
  );
}
