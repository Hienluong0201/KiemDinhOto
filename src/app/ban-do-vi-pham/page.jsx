"use client";

import React, { useState, useMemo,useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import dynamic from "next/dynamic";
import StationService from "../../services/SationService";
const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function BanDoViPhamPage() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [selectedViolationPoint, setSelectedViolationPoint] = useState(null);
  const [city, setCity] = useState("Tất cả");
  const [district, setDistrict] = useState("Tất cả");
  const [viPham, setViPham] = useState("Tất cả");
  const [showWelcome, setShowWelcome] = useState(false);
  const [areas, setAreas] = useState([]);
  const [loadingAreas, setLoadingAreas] = useState(true);
  const diemViPham = [
    { id: 1, ten_diem: "Ngã tư Hàng Xanh", lat: 10.8023, lng: 106.7136, city: "Hồ Chí Minh", district: "Bình Thạnh", muc_do: "Cao", vi_pham: ["Vượt đèn đỏ", "Vượt quá tốc độ"], dia_chi: "Điện Biên Phủ, Bình Thạnh", so_luong: 487 },
    { id: 2, ten_diem: "Cầu Sài Gòn", lat: 10.8027, lng: 106.7304, city: "Hồ Chí Minh", district: "Quận 2", muc_do: "Trung bình", vi_pham: ["Sử dụng điện thoại khi lái xe"], dia_chi: "Xa lộ Hà Nội, Quận 2", so_luong: 234 },
    { id: 3, ten_diem: "Ngã tư Thủ Đức", lat: 10.8503, lng: 106.7603, city: "Hồ Chí Minh", district: "Thủ Đức", muc_do: "Cao", vi_pham: ["Không đội mũ bảo hiểm", "Vượt đèn đỏ"], dia_chi: "Võ Văn Ngân, Thủ Đức", so_luong: 512 },
    { id: 4, ten_diem: "Ngã Tư Sở", lat: 21.0087, lng: 105.8202, city: "Hà Nội", district: "Đống Đa", muc_do: "Cao", vi_pham: ["Vượt đèn đỏ", "Đi sai làn"], dia_chi: "Nguyễn Trãi, Đống Đa", so_luong: 322 },
    { id: 5, ten_diem: "Cầu Chương Dương", lat: 21.039, lng: 105.871, city: "Hà Nội", district: "Long Biên", muc_do: "Trung bình", vi_pham: ["Vượt quá tốc độ", "Không thắt dây an toàn"], dia_chi: "Nguyễn Văn Cừ, Long Biên", so_luong: 189 },
    { id: 6, ten_diem: "Cầu Rồng", lat: 16.061, lng: 108.229, city: "Đà Nẵng", district: "Hải Châu", muc_do: "Cao", vi_pham: ["Vượt quá tốc độ", "Dừng đỗ sai quy định"], dia_chi: "Đường Trần Hưng Đạo, Hải Châu", so_luong: 142 },
    { id: 7, ten_diem: "Cầu Mỹ Thuận", lat: 10.3678, lng: 105.9583, city: "Vĩnh Long", district: "Long Hồ", muc_do: "Thấp", vi_pham: ["Vượt quá tốc độ"], dia_chi: "QL1A, Long Hồ", so_luong: 89 },
    { id: 8, ten_diem: "Ngã tư An Sương", lat: 10.8431, lng: 106.6121, city: "Hồ Chí Minh", district: "Hóc Môn", muc_do: "Trung bình", vi_pham: ["Vượt quá tốc độ", "Chuyển làn sai quy định"], dia_chi: "QL22, Hóc Môn", so_luong: 273 },
    { id: 9, ten_diem: "Trần Duy Hưng", lat: 21.0145, lng: 105.8003, city: "Hà Nội", district: "Cầu Giấy", muc_do: "Cao", vi_pham: ["Vượt đèn đỏ", "Lấn làn"], dia_chi: "Trần Duy Hưng, Cầu Giấy", so_luong: 406 },
  ];
  const danhSachViPhamMau = [
  { bienSo: "50F7***79", loaiViPham: "Đi sai làn đường", thoiGian: "03/2025" },
  { bienSo: "50F9***55", loaiViPham: "Không đội mũ bảo hiểm", thoiGian: "06/2025" },
  { bienSo: "51K8***33", loaiViPham: "Sử dụng điện thoại khi lái xe", thoiGian: "02/2025" },
  { bienSo: "29B4***92", loaiViPham: "Vi phạm quy định đỗ xe", thoiGian: "08/2025" },
  { bienSo: "59A9***13", loaiViPham: "Vượt đèn đỏ", thoiGian: "07/2025" },
  { bienSo: "59A4***38", loaiViPham: "Vượt đèn đỏ", thoiGian: "12/2024" },
  { bienSo: "59A1***08", loaiViPham: "Sử dụng điện thoại khi lái xe", thoiGian: "09/2025" },
  { bienSo: "51K7***40", loaiViPham: "Vượt đèn đỏ", thoiGian: "01/2025" },
  { bienSo: "51K6***94", loaiViPham: "Vượt quá tốc độ", thoiGian: "11/2024" },
  { bienSo: "50F8***47", loaiViPham: "Sử dụng điện thoại khi lái xe", thoiGian: "12/2024" },
];

  const filtered = useMemo(() => {
    return diemViPham.filter(
      (d) =>
        (city === "Tất cả" || d.city === city) &&
        (district === "Tất cả" || d.district === district) &&
        (viPham === "Tất cả" || d.vi_pham.some((vp) => vp.includes(viPham)))
    );
  }, [city, district, viPham]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedMap");
    if (!hasVisited) {
      setShowWelcome(true);
    }
  }, []);
const handleSelectCity = (cityName) => {
  setCity(cityName);
  localStorage.setItem("hasVisitedMap", "true");
  setShowWelcome(false);
};


useEffect(() => {
  const fetchAreas = async () => {
    try {
      setLoadingAreas(true);
      console.log("🚀 Gọi API getAllStationArea...");
      const data = await StationService.getAllStationArea();
      console.log("📦 Dữ liệu trả về từ API:", data);
      if (Array.isArray(data)) {
        setAreas(data);
        console.log(`✅ Nhận ${data.length} khu vực`);
      } else {
        console.warn("⚠️ Dữ liệu khu vực không hợp lệ:", data);
      }
    } catch (err) {
      console.error("❌ Lỗi khi load khu vực:", err);
    } finally {
      setLoadingAreas(false);
    }
  };
  fetchAreas();
}, []);


  return (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      bgcolor: "#f8f9ff",
    }}
  >
    {/* HEADER */}
    <Paper
      elevation={1}
      sx={{
        px: 3,
        py: 1,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e0e0e0",
        flexShrink: 0,
        bgcolor: "#1A33FF",
        color: "#fff",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Bản đồ điểm nóng vi phạm
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            bởi
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              component="img"
              src="/favicon.ico"
              alt="TTDK logo"
              sx={{
                height: 22,
                width: "auto",
                borderRadius: "4px",
                boxShadow: "0 0 3px rgba(0,0,0,0.15)",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.5px",
                color: "#fff",
              }}
            >
              TTDK
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="caption"
          sx={{
            opacity: 0.85,
            mt: 0.3,
            display: "block",
            fontStyle: "italic",
          }}
        >
          Dữ liệu có thể chưa đầy đủ hoặc chưa chính xác, vui lòng kiểm tra lại
        </Typography>
      </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      {/* Trở về TTDK */}
      <Typography
        component="a"
        href="https://ttdk.com.vn/"
        target="_blank"
        sx={{
          color: "#fff",
          fontWeight: 400,
          fontSize: "1rem",
          textDecoration: "none",
          "&:hover": { textDecoration: "underline", opacity: 0.9 },
        }}
      >
        Trở về TTDK
      </Typography>

      {/* Trở về muagoiphatnguoi */}
      <Typography
        component="a"
        href="http://affiliate.ttdk.com.vn/AppSharing/TraCuuPhatNguoi?appuserid=632213"
        target="_blank"
        sx={{
          color: "#fff",
          fontWeight: 400,
          fontSize: "1rem",
          textDecoration: "none",
          "&:hover": { textDecoration: "underline", opacity: 0.9 },
        }}
      >
        Mua gói phạt nguội
      </Typography>

      {/* Tra cứu phạt nguội */}
      <Typography
        component="a"
        href="https://phatnguoi.ttdk.com.vn/"
        target="_blank"
        sx={{
          color: "#fff",
          fontWeight: 400,
          fontSize: "1rem",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          "&:hover": { textDecoration: "underline", opacity: 0.9 },
        }}
      >
        Tra cứu phạt nguội
      </Typography>
      {/* Phản ánh */}
      <Typography
        component="a"
        href="https://zalo.me/ttdk2023"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#fff",
          fontWeight: 400,
          fontSize: "1rem",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": { textDecoration: "underline", opacity: 0.9 },
        }}
      >
        Phản ánh
      </Typography>
    </Box>
    </Paper>

    {/* MAP + SIDEBAR */}
    <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* MAP */}
      <Box sx={{ flex: 1 }}>
        <MapView
          filtered={filtered}
          selectedPoint={selectedPoint}
          onSelect={setSelectedPoint}
          centerOnCity={city}
        />
      </Box>

      {/* SIDEBAR */}
      <Paper
        elevation={0}
        sx={{
          width: 460,
          borderLeft: "1px solid #e0e0e0",
          bgcolor: "#fafbff",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          height: "100%",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "10px",
          },
        }}
      >
        {/* Bộ lọc sticky */}
      <Box
        sx={{
          mb: 2,
          p: 1.5,
          bgcolor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* --- Tiêu đề và nút --- */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {filtered.length} điểm vi phạm
          </Typography>
          <FormControl size="small">
            <Select
              value="50"
              displayEmpty
              sx={{
                borderRadius: "10px",
                fontSize: "0.8rem",
                "& .MuiSelect-select": { py: 0.6, px: 1.5 },
              }}
            >
              <MenuItem value="50">50 điểm</MenuItem>
              <MenuItem value="100">100 điểm</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          <FormControl fullWidth size="small" sx={{ flex: 1 }}>
            <Select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              displayEmpty
              sx={{
                borderRadius: "10px",
                fontSize: "0.8rem",
                "& .MuiSelect-select": { py: 0.7 },
              }}
            >
              <MenuItem value="Tất cả">Tất cả thành phố</MenuItem>
              {[...new Set(diemViPham.map((d) => d.city))].map((c) => (
                <MenuItem key={c} value={c}>{c}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth size="small" sx={{ flex: 1 }}>
            <Select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              displayEmpty
              sx={{
                borderRadius: "10px",
                fontSize: "0.8rem",
                "& .MuiSelect-select": { py: 0.7 },
              }}
            >
              <MenuItem value="Tất cả">Tất cả quận/huyện</MenuItem>
              {[...new Set(diemViPham.map((d) => d.district))].map((q) => (
                <MenuItem key={q} value={q}>{q}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* --- Hàng 2: Loại vi phạm --- */}
        <FormControl fullWidth size="small">
          <Select
            value={viPham}
            onChange={(e) => setViPham(e.target.value)}
            displayEmpty
            sx={{
              borderRadius: "10px",
              fontSize: "0.8rem",
              "& .MuiSelect-select": { py: 0.7 },
            }}
          >
            <MenuItem value="Tất cả">Tất cả loại vi phạm</MenuItem>
            {[...new Set(diemViPham.flatMap((d) => d.vi_pham))].map((v) => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>


        {/* Danh sách điểm vi phạm */}
        {filtered.map((diem) => (
          <Paper
            key={diem.id}
            variant="outlined"
            onClick={() => setSelectedPoint(diem)}
            sx={{
              p: 2,
              mb: 1.5,
              borderRadius: "12px",
              borderColor:
                selectedPoint?.id === diem.id
                  ? "var(--primary-color)"
                  : "#ddd",
              bgcolor:
                selectedPoint?.id === diem.id ? "#eef2ff" : "#fff",
              transition: "0.25s",
              cursor: "pointer",
              "&:hover": { borderColor: "var(--primary-color)" },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {diem.ten_diem}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
               {diem.dia_chi}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              {" "}
              <Box
                component="span"
                sx={{
                  px: 1,
                  py: 0.2,
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  color: "#fff",
                  bgcolor:
                    diem.muc_do === "Cao"
                      ? "#E53935"
                      : diem.muc_do === "Trung bình"
                      ? "#FB8C00"
                      : "#43A047",
                  mr: 1,
                }}
              >
                {diem.muc_do}
              </Box>
              — {diem.so_luong} lần vi phạm
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: 1 }}>
              {diem.vi_pham.slice(0, 2).map((vp, i) => (
                <Typography
                  key={i}
                  variant="caption"
                  sx={{
                    px: 1,
                    py: 0.3,
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    bgcolor: "#fafafa",
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
                    py: 0.3,
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    bgcolor: "#fafafa",
                  }}
                >
                  +{diem.vi_pham.length - 2}
                </Typography>
              )}
            </Box>

            <Button
              variant="outlined"
              size="small"
               onClick={(e) => {
                e.stopPropagation();
                setSelectedViolationPoint(diem);
              }}
              fullWidth
              sx={{
                mt: 1.5,
                textTransform: "none",
                borderRadius: "10px",
                borderColor: "#ddd",
                fontSize: "0.75rem",
                "&:hover": {
                  borderColor: "var(--primary-color)",
                  color: "var(--primary-color)",
                },
              }}
            >
              Xem danh sách bị phạt
            </Button>
          </Paper>
        ))}
      </Paper>
    </Box>
    {/* POPUP Danh sách vi phạm */}
    {selectedViolationPoint && (
      <Paper
        elevation={6}
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 480,
          maxHeight: "80vh",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#fff",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Danh sách vi phạm - {selectedViolationPoint.ten_diem}
          </Typography>
          <Button
            onClick={() => setSelectedViolationPoint(null)}
            size="small"
            sx={{ textTransform: "none", color: "text.secondary" }}
          >
            ✕
          </Button>
        </Box>
        {/* Tìm kiếm và thông báo */}
        <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
          <Button
            fullWidth
            variant="outlined"
            size="small"
            sx={{
              mb: 1,
              borderRadius: "10px",
              textTransform: "none",
              justifyContent: "flex-start",
              fontSize: "0.85rem",
            }}
          >
            🔍 Kiểm tra biển số của bạn
          </Button>
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{
              borderRadius: "10px",
              bgcolor: "#1A33FF",
              color: "#fff",
              textTransform: "none",
              fontSize: "0.85rem",
              "&:hover": { bgcolor: "#1429cc" },
            }}
          >
            Nhận thông báo qua Zalo khi có lỗi mới (Miễn phí)
          </Button>
        </Box>
        {/* Bảng danh sách */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: "8px",
            },
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
                <th style={{ padding: "8px" }}>Biển số xe</th>
                <th style={{ padding: "8px" }}>Loại vi phạm</th>
                <th style={{ padding: "8px" }}>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {danhSachViPhamMau.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td style={{ padding: "8px" }}>{item.bienSo}</td>
                  <td style={{ padding: "8px" }}>{item.loaiViPham}</td>
                  <td style={{ padding: "8px" }}>{item.thoiGian}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Paper>
    )}
{showWelcome && (
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
        borderRadius: "16px",
        width: 400,
        textAlign: "center",
        position: "relative",
        zIndex: 2500, 
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Chào mừng bạn đến với
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Bản đồ điểm nóng vi phạm
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
        Vui lòng chọn khu vực bạn muốn xem
      </Typography>

      {loadingAreas ? (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Đang tải danh sách khu vực...
        </Typography>
      ) : (
        <FormControl fullWidth size="medium">
          <Select
            displayEmpty
            defaultValue=""
            onChange={(e) => handleSelectCity(e.target.value)}
            MenuProps={{
              container: document.body, // render menu ra ngoài popup
              disablePortal: false, // cho phép hiển thị ngoài portal
              PaperProps: {
                sx: {
                  maxHeight: 300,
                  overflowY: "auto",
                  mt: 1,
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  zIndex: 9999, // ✅ nằm cao hơn tất cả (trên popup)
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
              borderRadius: "10px",
              bgcolor: "#f8f8f8",
              textAlign: "left",
              "& .MuiSelect-select": { py: 1.2 },
            }}
          >
            <MenuItem value="" disabled>
              -- Chọn khu vực --
            </MenuItem>

            {areas.map((area) => (
              <MenuItem key={area.code} value={area.value}>
                📍 {area.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Paper>
  </Box>
)}

  </Box>
  
);
}
