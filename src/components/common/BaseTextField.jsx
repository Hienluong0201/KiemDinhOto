"use client";

import { TextField } from "@mui/material";
import { colors, radius } from "@/constants/theme";

/**
 * BaseTextField — input chung theo style brand
 */
export default function BaseTextField({
  variant = "outlined",
  size = "medium",
  sx = {},
  ...props
}) {
  return (
    <TextField
      variant={variant}
      size={size}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: radius.md,
          backgroundColor: colors.palette.white,
          "& fieldset": { borderColor: colors.palette.grey200 },
          "&:hover fieldset": { borderColor: colors.palette.brand300 },
          "&.Mui-focused fieldset": {
            borderColor: colors.palette.brand500,
            borderWidth: 1.5,
          },
        },
        transition: "all 0.2s ease-in-out",
        ...sx,
      }}
      {...props}
    />
  );
}
