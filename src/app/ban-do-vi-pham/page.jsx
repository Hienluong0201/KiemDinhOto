"use client";

import React, { useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Paper, Typography } from "@mui/material";
import StationService from "@/services/SationService";
import { colors, radius } from "@/constants/theme";

// Components
import FilterPanel from "@/components/FilterPanel";
import ViolationCard from "@/components/ViolationCard";
import ViolationPopup from "@/components/ViolationPopup";
import WelcomeModal from "@/components/WelcomeModal";

// Lazy load Map
const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

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
          bgcolor: "#1A33FF",
          color: "#fff",
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
                sx={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}
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
                color: "#fff",
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
