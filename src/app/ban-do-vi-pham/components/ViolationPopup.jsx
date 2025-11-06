"use client";

import { Box, Paper, Typography } from "@mui/material";
import BaseButton from "@/components/common/BaseButton"; 
import { colors, radius, shadows } from "@/constants/theme";

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
        borderRadius: `${radius.lg}px`,
        boxShadow: shadows.heavy,
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
          borderBottom: `1px solid ${colors.palette.grey100}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Danh sách vi phạm - {diem.ten_diem}
        </Typography>
        <BaseButton
          type="subtle"
          size="small"
          onClick={onClose}
          sx={{
            color: colors.textDim,
            fontSize: "1rem",
            minWidth: "auto",
            px: 1,
            "&:hover": { color: colors.palette.error500 },
          }}
        >
          ✕
        </BaseButton>
      </Box>

      {/* Thanh chức năng */}
      <Box sx={{ p: 2, borderBottom: `1px solid ${colors.palette.grey100}` }}>
        <BaseButton
          type="subtle"
          size="small"
          fullWidth
          sx={{
            mb: 1,
            borderRadius: radius.md,
            justifyContent: "flex-start",
            fontSize: "0.85rem",
          }}
        >
          🔍 Kiểm tra biển số của bạn
        </BaseButton>

        <BaseButton
          type="primary"
          size="small"
          fullWidth
          sx={{
            borderRadius: radius.md,
            fontSize: "0.85rem",
          }}
        >
          Nhận thông báo qua Zalo khi có lỗi mới (Miễn phí)
        </BaseButton>
      </Box>

      {/* Danh sách */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.palette.grey300,
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
            <tr
              style={{
                borderBottom: `2px solid ${colors.palette.grey200}`,
                textAlign: "left",
              }}
            >
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
                  borderBottom: `1px solid ${colors.palette.grey100}`,
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
