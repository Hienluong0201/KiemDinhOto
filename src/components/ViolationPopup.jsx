import { Box, Paper, Button, Typography } from "@mui/material";
import { colors, spacing, radius, shadows } from "@/constants/theme";

export default function ViolationPopup({ open, onClose, diem, danhSach }) {
  if (!open) return null;

  return (
    <Paper
      elevation={6}
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 480,
        maxHeight: "80vh",
        overflow: "hidden",
        borderRadius: `${radius.lg}px`, // 16px
        boxShadow: shadows.heavy, // "0 8px 24px rgba(0,0,0,0.2)"
        zIndex: 2000,
        display: "flex",
        flexDirection: "column",
        bgcolor: colors.palette.white,
        color: colors.text,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Danh sách vi phạm - {diem.ten_diem}
        </Typography>
        <Button
          size="small"
          onClick={onClose}
          sx={{
            textTransform: "none",
            color: "text.secondary",
            fontSize: "1rem",
            minWidth: "auto",
            "&:hover": { color: "#E53935" },
          }}
        >
          ✕
        </Button>
      </Box>

      {/* Thanh chức năng */}
      <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          sx={{
            mb: 1,
            borderRadius: "10px",
            textTransform: "none",
            justifyContent: "flex-start",
            fontSize: "0.85rem",
          }}
        >
          🔍 Kiểm tra biển số của bạn
        </Button>
        <Button
          fullWidth
          variant="contained"
          size="small"
          sx={{
            borderRadius: "10px",
            bgcolor: "#1A33FF",
            color: "#fff",
            textTransform: "none",
            fontSize: "0.85rem",
            "&:hover": { bgcolor: "#1429CC" },
          }}
        >
          Nhận thông báo qua Zalo khi có lỗi mới (Miễn phí)
        </Button>
      </Box>

      {/* Danh sách */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "8px",
          },
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9rem",
            color: colors.text,
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
              <th style={{ padding: "8px" }}>Biển số xe</th>
              <th style={{ padding: "8px" }}>Loại vi phạm</th>
              <th style={{ padding: "8px" }}>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {danhSach.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid #eee",
                }}
              >
                <td style={{ padding: "8px" }}>{item.bienSo}</td>
                <td style={{ padding: "8px" }}>{item.loaiViPham}</td>
                <td style={{ padding: "8px" }}>{item.thoiGian}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Paper>
  );
}
