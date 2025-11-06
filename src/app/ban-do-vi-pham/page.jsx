"use client";

import React, { useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Paper, Typography } from "@mui/material";
import StationService from "@/services/SationService";
import { colors, radius } from "@/constants/theme";

// Components
import FilterPanel from "./components/FilterPanel";
import ViolationCard from "./components/ViolationCard";
import ViolationPopup from "./components/ViolationPopup";
import WelcomeModal from "./components/WelcomeModal";

// Lazy load Map
const MapView = dynamic(() => import("./components/MapView"), { ssr: false });

export default function BanDoViPhamPage() {
  // ==== STATE ====
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [selectedViolationPoint, setSelectedViolationPoint] = useState(null);
  const [city, setCity] = useState("Tất cả");
  const [district, setDistrict] = useState("Tất cả");
  const [viPham, setViPham] = useState("Tất cả");
  const [showWelcome, setShowWelcome] = useState(false);
  const [areas, setAreas] = useState([]);
  const [loadingAreas, setLoadingAreas] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [centerOnCity, setCenterOnCity] = useState(null); 

  // ==== DANH SÁCH LINK HEADER ====
  const headerLinks = [
    { href: "https://ttdk.com.vn/", label: "Trở về TTDK" },
    {
      href: "http://affiliate.ttdk.com.vn/AppSharing/TraCuuPhatNguoi?appuserid=632213",
      label: "Mua gói phạt nguội",
    },
    { href: "https://phatnguoi.ttdk.com.vn/", label: "Tra cứu phạt nguội" },
    { href: "https://zalo.me/ttdk2023", label: "Phản ánh" },
  ];

  // ==== DỮ LIỆU MẪU ====
  const diemViPham = [
  {
    id: 1,
    ten_diem: "Ngã tư Hàng Xanh",
    lat: 10.8023,
    lng: 106.7136,
    city: "Hồ Chí Minh",
    district: "Bình Thạnh",
    muc_do: "Cao",
    vi_pham: ["Vượt đèn đỏ", "Vượt quá tốc độ"],
    dia_chi: "Điện Biên Phủ, Bình Thạnh",
    so_luong: 487,
  },
  {
    id: 2,
    ten_diem: "Cầu Sài Gòn",
    lat: 10.8027,
    lng: 106.7304,
    city: "Hồ Chí Minh",
    district: "Quận 2",
    muc_do: "Trung bình",
    vi_pham: ["Sử dụng điện thoại khi lái xe"],
    dia_chi: "Xa lộ Hà Nội, Quận 2",
    so_luong: 234,
  },
  {
    id: 3,
    ten_diem: "Ngã tư Thủ Đức",
    lat: 10.8503,
    lng: 106.7603,
    city: "Hồ Chí Minh",
    district: "Thủ Đức",
    muc_do: "Cao",
    vi_pham: ["Không đội mũ bảo hiểm", "Vượt đèn đỏ"],
    dia_chi: "Võ Văn Ngân, Thủ Đức",
    so_luong: 512,
  },
  {
    id: 4,
    ten_diem: "Ngã sáu Gò Vấp",
    lat: 10.8382,
    lng: 106.6718,
    city: "Hồ Chí Minh",
    district: "Gò Vấp",
    muc_do: "Cao",
    vi_pham: ["Không thắt dây an toàn", "Vượt quá tốc độ"],
    dia_chi: "Nguyễn Oanh, Gò Vấp",
    so_luong: 398,
  },
  {
    id: 5,
    ten_diem: "Ngã tư Phú Nhuận",
    lat: 10.7976,
    lng: 106.6773,
    city: "Hồ Chí Minh",
    district: "Phú Nhuận",
    muc_do: "Thấp",
    vi_pham: ["Đi sai làn đường"],
    dia_chi: "Nguyễn Văn Trỗi, Phú Nhuận",
    so_luong: 129,
  },
  {
    id: 6,
    ten_diem: "Ngã tư An Sương",
    lat: 10.8288,
    lng: 106.6173,
    city: "Hồ Chí Minh",
    district: "Hóc Môn",
    muc_do: "Cao",
    vi_pham: ["Vượt đèn đỏ", "Không dừng đúng vạch"],
    dia_chi: "Quốc lộ 1A, Hóc Môn",
    so_luong: 603,
  },
  {
    id: 7,
    ten_diem: "Ngã tư Bảy Hiền",
    lat: 10.7862,
    lng: 106.6558,
    city: "Hồ Chí Minh",
    district: "Tân Bình",
    muc_do: "Trung bình",
    vi_pham: ["Không bật xi-nhan", "Chạy sai làn"],
    dia_chi: "Lý Thường Kiệt, Tân Bình",
    so_luong: 276,
  },
  {
    id: 8,
    ten_diem: "Cầu Kênh Tẻ",
    lat: 10.7486,
    lng: 106.7064,
    city: "Hồ Chí Minh",
    district: "Quận 7",
    muc_do: "Cao",
    vi_pham: ["Vượt quá tốc độ", "Đi ngược chiều"],
    dia_chi: "Trần Xuân Soạn, Quận 7",
    so_luong: 342,
  },
  {
    id: 9,
    ten_diem: "Ngã tư Cộng Hòa - Hoàng Hoa Thám",
    lat: 10.8011,
    lng: 106.6467,
    city: "Hồ Chí Minh",
    district: "Tân Bình",
    muc_do: "Trung bình",
    vi_pham: ["Không dừng khi có tín hiệu", "Không đội mũ bảo hiểm"],
    dia_chi: "Cộng Hòa, Tân Bình",
    so_luong: 228,
  },
  {
    id: 10,
    ten_diem: "Ngã tư Nguyễn Thị Minh Khai - Cách Mạng Tháng 8",
    lat: 10.7764,
    lng: 106.6882,
    city: "Hồ Chí Minh",
    district: "Quận 3",
    muc_do: "Cao",
    vi_pham: ["Vượt đèn đỏ", "Đi ngược chiều"],
    dia_chi: "CMT8, Quận 3",
    so_luong: 419,
  },
  {
    id: 11,
    ten_diem: "Cầu Chữ Y",
    lat: 10.7455,
    lng: 106.6788,
    city: "Hồ Chí Minh",
    district: "Quận 8",
    muc_do: "Thấp",
    vi_pham: ["Không bật đèn khi trời tối"],
    dia_chi: "Đường Nguyễn Văn Cừ Nối Dài, Quận 8",
    so_luong: 98,
  },
  {
    id: 12,
    ten_diem: "Ngã tư Nguyễn Văn Linh - Nguyễn Hữu Thọ",
    lat: 10.7324,
    lng: 106.7028,
    city: "Hồ Chí Minh",
    district: "Quận 7",
    muc_do: "Cao",
    vi_pham: ["Vượt đèn đỏ", "Chạy quá tốc độ"],
    dia_chi: "Nguyễn Văn Linh, Quận 7",
    so_luong: 356,
  },
  {
    id: 13,
    ten_diem: "Cầu Ông Lãnh",
    lat: 10.7645,
    lng: 106.6932,
    city: "Hồ Chí Minh",
    district: "Quận 1",
    muc_do: "Thấp",
    vi_pham: ["Đi ngược chiều"],
    dia_chi: "Trần Hưng Đạo, Quận 1",
    so_luong: 112,
  },
  {
    id: 14,
    ten_diem: "Ngã tư Nguyễn Kiệm - Phạm Văn Đồng",
    lat: 10.8275,
    lng: 106.6818,
    city: "Hồ Chí Minh",
    district: "Gò Vấp",
    muc_do: "Cao",
    vi_pham: ["Không dừng đúng vạch", "Vượt quá tốc độ"],
    dia_chi: "Nguyễn Kiệm, Gò Vấp",
    so_luong: 474,
  },
  {
    id: 15,
    ten_diem: "Ngã sáu Dân Chủ",
    lat: 10.7789,
    lng: 106.6668,
    city: "Hồ Chí Minh",
    district: "Quận 3",
    muc_do: "Cao",
    vi_pham: ["Vượt đèn đỏ", "Chạy sai làn", "Không đội mũ bảo hiểm"],
    dia_chi: "Cách Mạng Tháng 8, Quận 3",
    so_luong: 523,
  },
];
  

  const danhSachViPhamMau = [
    {
      bienSo: "50F7***79",
      loaiViPham: "Đi sai làn đường",
      thoiGian: "03/2025",
    },
    {
      bienSo: "51K8***33",
      loaiViPham: "Sử dụng điện thoại khi lái xe",
      thoiGian: "02/2025",
    },
    { bienSo: "59A9***13", loaiViPham: "Vượt đèn đỏ", thoiGian: "07/2025" },
  ];

  // ==== FILTER ====
  const filtered = useMemo(() => {
    return diemViPham.filter(
      (d) =>
        (city === "Tất cả" || d.city === city) &&
        (district === "Tất cả" || d.district === district) &&
        (viPham === "Tất cả" || d.vi_pham.some((vp) => vp.includes(viPham)))
    );
  }, [city, district, viPham]);

  // ==== EFFECTS ====
  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    if (!hydrated) return;
    const hasVisited = localStorage.getItem("hasVisitedMap");
    if (!hasVisited) setShowWelcome(true);
  }, [hydrated]);

  // ==== CHỌN TỈNH TỪ MODAL ====
  const handleSelectCity = (cityName) => {
    setCity(cityName);
    localStorage.setItem("hasVisitedMap", "true");
    setShowWelcome(false);
    setCenterOnCity(cityName); 
  };

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        setLoadingAreas(true);
        const data = await StationService.getAllStationArea();
        if (Array.isArray(data)) setAreas(data);
      } catch (err) {
        console.error("❌ Lỗi khi load khu vực:", err);
      } finally {
        setLoadingAreas(false);
      }
    };
    fetchAreas();
  }, []);

  // ==== RENDER ====
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        bgcolor: colors.background,
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
          borderBottom: `1px solid ${colors.border}`,
          flexShrink: 0,
          bgcolor: colors.palette.brand500,
          color: colors.palette.white,
        }}
      >
        {/* BÊN TRÁI */}
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
                sx={{ height: 22, width: "auto"}}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "1rem", color: colors.palette.white, }}
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

        {/* BÊN PHẢI */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {headerLinks.map((link) => (
            <Typography
              key={link.href}
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: colors.palette.white,
                fontWeight: 400,
                fontSize: "1rem",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline", opacity: 0.9 },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>
      </Paper>

      {/* MAP + SIDEBAR */}
      <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Bản đồ */}
        <Box sx={{ flex: 1 }}>
          <MapView
            filtered={filtered}
            selectedPoint={selectedPoint}
            onSelect={setSelectedPoint}
            centerOnCity={centerOnCity}
          />
        </Box>

        {/* Sidebar */}
        <Paper
          elevation={0}
          sx={{
            width: 460,
            borderLeft: `1px solid ${colors.border}`,
            bgcolor: colors.palette.grey50,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            height: "100%",
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: colors.border,
              borderRadius: "10px",
            },
          }}
        >
          <FilterPanel
            city={city}
            setCity={setCity}
            district={district}
            setDistrict={setDistrict}
            viPham={viPham}
            setViPham={setViPham}
            diemViPham={diemViPham}
            filtered={filtered}
          />

          {filtered.map((diem) => (
            <ViolationCard
              key={diem.id}
              diem={diem}
              selected={selectedPoint?.id === diem.id}
              onSelect={setSelectedPoint}
              onViewDetail={setSelectedViolationPoint}
            />
          ))}
        </Paper>
      </Box>

      {/* POPUP DANH SÁCH */}
      <ViolationPopup
        open={!!selectedViolationPoint}
        onClose={() => setSelectedViolationPoint(null)}
        diem={selectedViolationPoint}
        danhSach={danhSachViPhamMau}
      />

      {/* MODAL CHỌN KHU VỰC */}
      <WelcomeModal
        open={showWelcome}
        areas={areas}
        loading={loadingAreas}
        onSelectCity={handleSelectCity}
      />
    </Box>
  );
}
