"use client";

import { Box, Typography, FormControl, MenuItem } from "@mui/material";
import { colors, radius, shadows } from "@/constants/theme";
import  BaseSelect  from "../../../components/common/BaseSelect";
import  BaseButton  from "../../../components/common/BaseButton";
/**
 * Bộ lọc hiển thị điểm vi phạm — dùng BaseSelect để đồng bộ style
 */
export default function FilterPanel({
  city,
  setCity,
  district,
  setDistrict,
  viPham,
  setViPham,
  diemViPham,
  filtered,
}) {
  return (
    <Box
      sx={{
        mb: 2,
        p: 1.5,
        bgcolor: colors.palette.white,
        borderRadius: `${radius.md + 2}px`,
        boxShadow: shadows.light,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* --- Tiêu đề và nút --- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: colors.text }}>
          {filtered?.length || 0} điểm vi phạm
        </Typography>
        <FormControl size="small">
          <BaseSelect value="50" displayEmpty size="small">
            <MenuItem value="50">50 điểm</MenuItem>
            <MenuItem value="100">100 điểm</MenuItem>
          </BaseSelect>
        </FormControl>
      </Box>

      {/* --- Hàng 1: Thành phố + Quận --- */}
      <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
        <FormControl fullWidth size="small">
          <BaseSelect
            value={city}
            onChange={(e) => setCity(e.target.value)}
            displayEmpty
            size="small"
          >
            <MenuItem value="Tất cả">Tất cả thành phố</MenuItem>
            {[...new Set(diemViPham.map((d) => d.city))].map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </BaseSelect>
        </FormControl>

        <FormControl fullWidth size="small">
          <BaseSelect
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            displayEmpty
            size="small"
          >
            <MenuItem value="Tất cả">Tất cả quận/huyện</MenuItem>
            {[...new Set(diemViPham.map((d) => d.district))].map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </BaseSelect>
        </FormControl>
      </Box>

      {/* --- Hàng 2: Loại vi phạm --- */}
      <FormControl fullWidth size="small">
        <BaseSelect
          value={viPham}
          onChange={(e) => setViPham(e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="Tất cả">Tất cả loại vi phạm</MenuItem>
          {[...new Set(diemViPham.flatMap((d) => d.vi_pham))].map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </BaseSelect>
      </FormControl>

      {/* --- Nút hành động (ví dụ thêm) --- */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <BaseButton type="primary" size="small">
          Áp dụng lọc
        </BaseButton>
      </Box>
    </Box>
  );
}
