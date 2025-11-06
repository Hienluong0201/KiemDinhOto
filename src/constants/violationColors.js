import { colors } from "@/constants/theme";

/**
 * Màu đại diện cho các mức độ vi phạm
 * Dễ mở rộng thêm nếu có thêm trạng thái sau này
 */
export const VIOLATION_COLORS = {
  Cao: {
    text: colors.palette.error700,
    border: colors.palette.error500,
    background: colors.palette.error50,
  },
  "Trung bình": {
    text: colors.palette.yellow700,
    border: colors.palette.yellow500,
    background: colors.palette.yellow50,
  },
  Thấp: {
    text: colors.palette.primary700,
    border: colors.palette.primary500,
    background: colors.palette.primary50,
  },
  
  // "Rất cao": {...}, "Cảnh báo": {...}
};

/**
 * Hàm tiện ích để lấy màu nhanh theo mức độ
 */
export const getViolationColor = (level) =>
  VIOLATION_COLORS[level] || VIOLATION_COLORS["Thấp"];
