"use client";

import { Typography, FormControl, Select, MenuItem } from "@mui/material";
import { colors, palette, radius, shadows, spacing } from "@/constants/theme";
import BaseModal from "../../../components/common/BaseModal";

export default function WelcomeModal({ open, areas, loading, onSelectCity }) {
  return (
    <BaseModal open={open} width={400} showClose={false}>
      {/* --- Tiêu đề --- */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: spacing.xs, color: colors.text }}
      >
        Chào mừng bạn đến với
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ mb: spacing.sm, color: colors.text }}
      >
        Bản đồ điểm nóng vi phạm
      </Typography>

      <Typography
        variant="body2"
        sx={{ mb: spacing.md, color: colors.textDim }}
      >
        Vui lòng chọn khu vực bạn muốn xem
      </Typography>

      {/* --- Danh sách khu vực --- */}
      {loading ? (
        <Typography variant="body2" sx={{ color: colors.textDim }}>
          Đang tải danh sách khu vực...
        </Typography>
      ) : (
        <FormControl fullWidth size="medium">
          <Select
            displayEmpty
            defaultValue=""
            onChange={(e) => onSelectCity(e.target.value)}
            MenuProps={{
              PaperProps: {
                sx: {
                  maxHeight: 300,
                  overflowY: "auto",
                  mt: 1,
                  borderRadius: radius.md,
                  backgroundColor: palette.white,
                  boxShadow: shadows.medium,
                },
              },
            }}
            sx={{
              borderRadius: radius.md,
              bgcolor: palette.grey25,
              textAlign: "left",
              "& .MuiSelect-select": { py: 1.2, px: 1.5 },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.border,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.tint,
              },
            }}
          >
            <MenuItem value="" disabled>
              -- Chọn khu vực --
            </MenuItem>
            {areas.map((area) => (
              <MenuItem key={area.code} value={area.value}>
                📍 {area.value}
                <span
                  style={{ fontSize: "0.85em", opacity: 0.7, marginLeft: 4 }}
                >
                  ({area.area})
                </span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </BaseModal>
  );
}
