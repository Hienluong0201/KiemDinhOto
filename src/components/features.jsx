import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UpdateIcon from "@mui/icons-material/Update";
import WarningIcon from "@mui/icons-material/Warning";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import companyInfo from "@/constants/companyInfo";

export default function Features() {
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
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        5 tính năng hữu ích có trên{" "}
        <Typography
          variant="h6"
          component={"span"}
          href="/"
          className="!text-[var(--primary-color)]"
          sx={{
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          {process.env.NEXT_PUBLIC_DOMAIN}
        </Typography>
      </Typography>

      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <SearchIcon className="!text-[var(--primary-color)]" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                component={Link}
                href="/muc-phat"
                className="!text-[var(--primary-color)]"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Tra cứu mức phạt giao thông
              </Typography>
            }
            secondary="Xem chi tiết mức xử phạt theo từng lỗi vi phạm giao thông từ CSGT, cập nhật theo Nghị định mới nhất."
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <UpdateIcon className="!text-[var(--primary-color)]" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                component={Link}
                href="/"
                className="!text-[var(--primary-color)]"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Kiểm tra phạt nguội online
              </Typography>
            }
            secondary="Tra cứu phạt nguội ô tô, xe máy, xe đạp điện với dữ liệu chính thống từ CSGT – có cập nhật thường xuyên, nhanh chóng và chính xác."
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <WarningIcon className="!text-[var(--primary-color)]" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                component={Link}
                href="/"
                className="!text-[var(--primary-color)]"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Xem chi tiết lỗi vi phạm
              </Typography>
            }
            secondary="Thống kê số lỗi đã xử lý/chưa xử lý, địa điểm và thời gian vi phạm, hành vi vi phạm, đơn vị xử phạt... Giúp bạn kiểm tra và theo dõi dễ dàng."
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PhoneAndroidIcon className="!text-[var(--primary-color)]" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                component={Link}
                href="/"
                className="!text-[var(--primary-color)]"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Theo dõi thông báo phạt nguội trên mọi thiết bị
              </Typography>
            }
            secondary="Giao diện tương thích điện thoại, máy tính bảng, laptop… Giúp bạn cập nhật thông báo vi phạm mọi lúc mọi nơi."
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <LocationOnIcon className="!text-[var(--primary-color)]" />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <Typography
                  component={Link}
                  href={`${process.env.NEXT_PUBLIC_AFFILIATE_WEB_URL}/AppSharing/TraCuuPhatNguoi?appuserid=873523`}
                  target="_blank"
                  className="!text-[var(--primary-color)]"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Mua gói tra cứu phạt nguội tại {process.env.NEXT_PUBLIC_WEB_TTDK_URL}
                </Typography>

                <Typography
                  component={Link}
                  href="/huong-dan"
                  sx={{
                    ml: 1,
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  (Bạn có thể xem hướng dẫn tại đây)
                </Typography>
              </>
            }
            secondary="Đăng ký dịch vụ tra cứu vi phạm giao thông nhanh chóng, hỗ trợ kiểm tra phạt nguội định kỳ, phù hợp cho cá nhân và doanh nghiệp."
          />
        </ListItem>
      </List>
    </Paper>
  );
}
