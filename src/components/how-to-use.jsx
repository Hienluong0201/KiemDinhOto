import companyInfo from "@/constants/companyInfo";
import { Paper, Typography, Box, Link } from "@mui/material";

export default function HowToUse() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 2,
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="body1" paragraph>
        Tra cứu phạt nguội hay Tra cứu phương tiện vi phạm giao thông qua hình
        ảnh là hình thức xử lý vi phạm sau khi các phương tiện đã vi phạm được
        một khoảng thời gian nhất định. Điểm đặc biệt của hình thức này là chủ
        phương tiện không bị xử lý ngay lập tức, mà hình ảnh vi phạm (được ghi
        lại bởi hệ thống camera an ninh) tự động gửi về trung tâm xử lý. Trang
        web{" "}
        <strong className="text-[var(--primary-color)]">
           {process.env.NEXT_PUBLIC_DOMAIN}
        </strong>{" "}
        được phát triển để trợ thành công cụ giúp các bạc tài chủ động{" "}
        <strong>check phạt nguội</strong> online, góp phần nâng cao ý thức chấp
        hành luật giao thông, giảm thiểu tai nạn và đảm bảo an toàn cho bản thân
        và cộng đồng.
      </Typography>

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", mt: 4 }}
      >
        Hướng dẫn cách tra cứu phạt nguội ô tô và xe máy 2025 online tại
        <strong className="!text-[var(--primary-color)]">
          {" "}
           {process.env.NEXT_PUBLIC_DOMAIN}
        </strong>
      </Typography>

      <Typography variant="body1" paragraph>
        Để đáp ứng nhu cầu tra phạt nguội ô tô và xe máy ngày càng lớn hiện nay,
        chúng tôi đã nâng cấp hệ thống của mình bằng cách liên tục cập nhật
        nguồn dữ liệu để giúp mọi người có thể dễ dàng check được thông tin xe,
        tránh phát sinh các lỗi không đáng có do Nghị định 168/2024/NĐ-CP quy
        định xử phạt vi phạm hành chính về trật tự, an toàn giao thông đường bộ
        có mức phạt rất cao.
      </Typography>

      <Box component="ol" sx={{ pl: 4 }}>
        <Box component="li" sx={{ mb: 1 }}>
          <Typography variant="body1">
            Bước 1: Truy cập{" "}
            <Link
              target="_blank"
              href={process.env.NEXT_PUBLIC_WEB_URL}
              color="primary"
            >
              <strong className="!text-[var(--primary-color)]">
                {" "}
                 {process.env.NEXT_PUBLIC_DOMAIN}
              </strong>
            </Link>
          </Typography>
        </Box>
        <Box component="li" sx={{ mb: 1 }}>
          <Typography variant="body1">
            Bước 2: Nhập đầy đủ biển số xe và loại phương tiện.
          </Typography>
        </Box>
        <Box component="li" sx={{ mb: 1 }}>
          <Typography variant="body1">
            Bước 3: Xem thông tin kết quả. Dữ liệu được lấy từ CSGT.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
