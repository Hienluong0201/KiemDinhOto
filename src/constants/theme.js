/**
 */

export const palette = {
  // Neutral
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  // Base
  white: "#fff",
  black: "#1D232E",

  // Grey scale
  grey25: "#FCFCFD",
  grey50: "#F9FAFB",
  grey100: "#EAECF0",
  grey200: "#D0D5DD",
  grey300: "#98A2B3",
  grey400: "#667085",
  grey500: "#475467",
  grey600: "#344054",
  grey700: "#252D3C",
  grey800: "#1D232E",
  grey900: "#161B23",

  // Primary (Green)
  primary25: "#F6FEF9",
  primary50: "#E8F7F1",
  primary100: "#B8E7D2",
  primary200: "#95DCBC",
  primary300: "#65CC9E",
  primary400: "#47C28B",
  primary500: "#19B36E",
  primary600: "#17A364",
  primary700: "#127F4E",
  primary800: "#0E623D",
  primary900: "#0B4B2E",

  // Secondary (Green–Yellow)
  secondary50: "#F1F7E7",
  secondary100: "#E6F1D6",
  secondary200: "#CFE4B2",
  secondary300: "#AFD284",
  secondary400: "#92BE5D",
  secondary500: "#74A240",
  secondary600: "#59812F",
  secondary700: "#466328",
  secondary800: "#3A5024",
  secondary900: "#334522",

  // Error (Red)
  error50: "#FEEEEE",
  error100: "#FDCACA",
  error200: "#FCB1B1",
  error300: "#FB8D8D",
  error400: "#FA7777",
  error500: "#F95555",
  error600: "#E34D4D",
  error700: "#B13C3C",
  error800: "#892F2F",
  error900: "#692424",

  // Yellow
  yellow50: "#FFF7EC",
  yellow100: "#FFE6C4",
  yellow200: "#FFD9A8",
  yellow300: "#FFC880",
  yellow400: "#FFBD68",
  yellow500: "#FFAD42",
  yellow600: "#E89D3C",
  yellow700: "#B57B2F",
  yellow800: "#8C5F24",
  yellow900: "#6B491C",

  // Purple
  purple50: "#F4F3FF",
  purple100: "#EBE9FE",
  purple200: "#D9D6FE",
  purple300: "#BDB4FE",
  purple400: "#9B8AFB",
  purple500: "#7A5AF8",
  purple600: "#6938EF",
  purple700: "#5925DC",
  purple800: "#4A1FB8",
  purple900: "#3E1C96",


  // Blue (Brand)
    brand50:  "#E8EDFF",
    brand100: "#C2D0FF",
    brand200: "#9AB3FF",
    brand300: "#7096FF",
    brand400: "#497AFF",
    brand500: "#1A33FF", 
    brand600: "#1429CC",
    brand700: "#0E1F99",
    brand800: "#081566",
    brand900: "#040B33",
  // Overlay
  overlay20: "rgba(22, 27, 35, 0.2)",
  overlay50: "rgba(22, 27, 35, 0.5)",
} 

/**
 * Semantic Colors — dùng trong UI
 */
export const colors = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  text: palette.neutral800,
  textDim: palette.neutral600,
  background: palette.grey50,
  border: palette.grey200,
  tint: palette.primary500,
  tintInactive: palette.neutral300,
  separator: palette.neutral300,
  error: palette.error500,
  errorBackground: palette.error100,
} 

/**
 * 🧱 Spacing scale — dùng cho margin/padding
 */
export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} 

/**
 * 🎯 Corner radius
 */
export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
} 

/**
 * 🌫 Shadow preset
 */
export const shadows = {
  light: "0 1px 3px rgba(0,0,0,0.05)",
  medium: "0 4px 10px rgba(0,0,0,0.1)",
  heavy: "0 8px 24px rgba(0,0,0,0.2)",
} 
