import Link from "next/link";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SecurityIcon from "@mui/icons-material/Security";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";

export default function Footer() {
  const footerItems = [
    {
      icon: <InfoIcon fontSize="small" />,
      label: "Mức Phạt",
      href: "/muc-phat",
    },
    {
      icon: <HelpOutlineIcon fontSize="small" />,
      label: "Hướng Dẫn",
      href: "/huong-dan",
    },
    {
      icon: <SecurityIcon fontSize="small" />,
      label: "Bảo Mật",
      href: "/chinh-sach-bao-mat",
    },
    {
      icon: <GavelIcon fontSize="small" />,
      label: "Điều Khoản",
      href: "/dieu-khoan",
    },
    {
      icon: <PersonIcon fontSize="small" />,
      label: "Tác giả",
      href: "/tac-gia",
    },
    { icon: <BookIcon fontSize="small" />, label: "Blog", href: "/tin-tuc" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
        py: 2,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(4, 1fr)", // Mobile: 2 cột, tự đẩy thành nhiều hàng
            sm: "repeat(auto-fit, minmax(100px, 1fr))", // Tự co giãn để cân
          },
          gap: 2,
          maxWidth: "960px",
          mx: "auto",
          px: 2,
        }}
      >
        {footerItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              className="hover:!text-[var(--primary-color)]"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {item.icon}
              <Typography
                variant="caption"
                sx={{
                  mt: 0.5,
                  fontSize: "0.7rem",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
