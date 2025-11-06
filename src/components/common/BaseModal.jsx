"use client";

import { Box, Paper, IconButton } from "@mui/material";
import { X } from "lucide-react";
import { colors, radius, shadows, spacing } from "@/constants/theme";

/**
 * 🧱 BaseModal — component popup chung
 * Props:
 *  - open: boolean hiển thị / ẩn
 *  - onClose: function đóng popup
 *  - children: nội dung
 *  - width: chiều rộng modal (mặc định 420)
 *  - showClose: có nút X không (true/false)
 *  - sx: style tuỳ chỉnh
 */
export default function BaseModal({
  open = false,
  onClose,
  children,
  width = 420,
  showClose = true,
  sx = {},
}) {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: colors.palette.overlay50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1200,
      }}
    >
      <Paper
        sx={{
          position: "relative",
          width,
          p: spacing.xl,
          borderRadius: radius.lg,
          boxShadow: shadows.heavy,
          backgroundColor: colors.palette.white,
          color: colors.text,
          textAlign: "center",
          ...sx,
        }}
      >
        {showClose && (
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: spacing.sm,
              right: spacing.sm,
              color: colors.textDim,
              "&:hover": { color: colors.text },
            }}
          >
            <X size={20} />
          </IconButton>
        )}

        {children}
      </Paper>
    </Box>
  );
}
    