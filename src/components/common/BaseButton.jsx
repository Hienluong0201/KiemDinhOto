"use client";

import { Button } from "@mui/material";
import { colors, radius, shadows } from "@/constants/theme";

/**
 * BaseButton — nút chuẩn brand (primary, secondary, danger, subtle)
 */
export default function BaseButton({
  children,
  type = "primary", // primary | secondary | danger | subtle
  size = "medium", // small | medium | large
  sx = {},
  ...props
}) {
  const styleMap = {
    primary: {
      backgroundColor: colors.palette.brand500,
      color: colors.palette.white,
      "&:hover": {
        backgroundColor: colors.palette.brand600,
        boxShadow: shadows.medium,
      },
    },
    secondary: {
      backgroundColor: colors.palette.primary100,
      color: colors.palette.primary700,
      "&:hover": { backgroundColor: colors.palette.primary200 },
    },
    danger: {
      backgroundColor: colors.palette.error500,
      color: colors.palette.white,
      "&:hover": { backgroundColor: colors.palette.error600 },
    },
    subtle: {
      backgroundColor: colors.palette.grey100,
      color: colors.palette.grey700,
      "&:hover": { backgroundColor: colors.palette.grey200 },
    },
  };

  const sizeMap = {
    small: { px: 2, py: 0.6, fontSize: "0.8rem" },
    medium: { px: 3, py: 1, fontSize: "0.9rem" },
    large: { px: 4, py: 1.3, fontSize: "1rem" },
  };

  return (
    <Button
      disableElevation
      sx={{
        borderRadius: radius.lg,
        textTransform: "none",
        fontWeight: 600,
        transition: "all 0.2s ease-in-out",
        ...styleMap[type],
        ...sizeMap[size],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
