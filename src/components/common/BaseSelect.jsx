"use client";

import { Select } from "@mui/material";
import { colors, radius } from "@/constants/theme";

/**
 * BaseSelect — component Select dùng chung, style đồng bộ theo brand
 */
export default function BaseSelect({
  children,
  variant = "outlined", // outlined | filled | borderless
  size = "medium", // small | medium
  sx = {},
  ...props
}) {
  const variantMap = {
    outlined: {
      backgroundColor: colors.palette.white,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.palette.grey200,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.palette.brand300,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.palette.brand500,
        borderWidth: 1.5,
      },
    },
    filled: {
      backgroundColor: colors.palette.grey100,
      borderRadius: radius.md,
      "& .MuiSelect-select": { py: 1 },
    },
    borderless: {
      backgroundColor: "transparent",
      border: "none",
      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    },
  };

  return (
    <Select
      size={size}
      sx={{
        borderRadius: radius.md,
        fontWeight: 500,
        fontSize: "0.9rem",
        transition: "all 0.2s ease-in-out",
        ...variantMap[variant],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Select>
  );
}
    