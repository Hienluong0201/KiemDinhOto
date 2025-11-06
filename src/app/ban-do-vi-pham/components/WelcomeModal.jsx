import { Box, Paper, Typography, FormControl, Select, MenuItem } from "@mui/material";
import { colors, palette, spacing, radius, shadows } from "@/constants/theme";

export default function WelcomeModal({ open, areas, loading, onSelectCity }) {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Paper
        sx={{
          p: 4,
          borderRadius: `${radius.lg}px`, // 16px
          width: 400,
          textAlign: "center",
          position: "relative",
          backgroundColor: palette.white, // trắng tuyệt đối
          color: colors.text,
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)", // đổ bóng sâu hơn
          zIndex:   2500,
        }}
      >
        {/* --- Tiêu đề --- */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: colors.text,
          }}
        >
          Chào mừng bạn đến với
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 2,
            color: colors.text,
          }}
        >
          Bản đồ điểm nóng vi phạm
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: colors.textDim,
          }}
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
              onChange={(e) => {
                const selected = e.target.value;
                onSelectCity(selected);
              }}
              MenuProps={{
                container: document.body,
                disablePortal: false,
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    overflowY: "auto",
                    mt: 1,
                    borderRadius: `${radius.md}px`,
                    backgroundColor: palette.white,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                    zIndex: 9999,
                  },
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
              sx={{
                borderRadius: `${radius.md}px`,
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
                  <span style={{ fontSize: "0.85em", opacity: 0.7, marginLeft: 4 }}>
                    ({area.area})
                  </span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Paper>
    </Box>
  );
}
