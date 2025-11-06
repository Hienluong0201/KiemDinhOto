import { Box, Paper, Typography, Button } from "@mui/material";
import { colors, spacing, radius, shadows } from "@/constants/theme";

export default function ViolationCard({ diem, selected, onSelect, onViewDetail }) {
  return (
    <Paper
      variant="outlined"
      onClick={() => onSelect(diem)}
      sx={{
        p: 2,
        mb: 1.5,
        borderRadius: "12px",
        borderColor: selected ? colors.palette.brand500 : colors.border,
        bgcolor: colors.palette.white, // luôn trắng
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: selected ? shadows.medium : shadows.light,
        "&:hover": {
          borderColor: colors.palette.brand500,
          boxShadow: shadows.medium,
          transform: "translateY(-1px)",
        },
      }}
    >
      {/* Tiêu đề */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          color: colors.palette.black,
          fontSize: "1rem",
          mb: 0.3,
        }}
      >
        {diem.ten_diem}
      </Typography>

      {/* Địa chỉ */}
      <Typography
        variant="body2"
        sx={{
          color: colors.textDim,
          fontSize: "0.9rem",
          mb: 1,
        }}
      >
        {diem.dia_chi}
      </Typography>

      {/* Mức độ + số lần */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Box
          component="span"
          sx={{
            px: 1.4,
            py: 0.35,
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "0.75rem",
            color: colors.palette.white,
            bgcolor:
              diem.muc_do === "Cao"
                ? colors.palette.error500
                : diem.muc_do === "Trung bình"
                ? colors.palette.yellow500
                : colors.palette.primary600,
            mr: 1,
          }}
        >
          {diem.muc_do}
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: colors.text,
            fontWeight: 500,
          }}
        >
          {diem.so_luong} lần vi phạm
        </Typography>
      </Box>

      {/* Các loại vi phạm */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 1.2 }}>
        {diem.vi_pham.slice(0, 2).map((vp, i) => (
          <Typography
            key={i}
            variant="caption"
            sx={{
              px: 1.1,
              py: 0.4,
              border: `1px solid ${colors.border}`,
              borderRadius: "8px",
              bgcolor: colors.palette.grey25,
              color: colors.text,
              fontSize: "0.8rem",
              lineHeight: 1.2,
            }}
          >
            {vp}
          </Typography>
        ))}
        {diem.vi_pham.length > 2 && (
          <Typography
            variant="caption"
            sx={{
              px: 1,
              py: 0.4,
              border: `1px solid ${colors.border}`,
              borderRadius: "8px",
              bgcolor: colors.palette.grey25,
              color: colors.textDim,
              fontSize: "0.8rem",
            }}
          >
            +{diem.vi_pham.length - 2}
          </Typography>
        )}
      </Box>

      {/* Nút xem danh sách */}
      <Button
        variant="outlined"
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          onViewDetail(diem);
        }}
        fullWidth
        sx={{
          mt: 0.5,
          textTransform: "none",
          borderRadius: "10px",
          borderColor: colors.border,
          fontSize: "0.8rem",
          fontWeight: 500,
          color: colors.text,
          py: 0.7,
          bgcolor: colors.palette.white,
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: colors.palette.brand500,
            color: colors.palette.brand500,
            bgcolor: colors.palette.brand50,
          },
        }}
      >
        Xem danh sách bị phạt
      </Button>
    </Paper>
  );
}
