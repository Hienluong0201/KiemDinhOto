"use client";

import * as React from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { cityCoordinates } from "@/constants/cityCoordinates";
import { colors, radius, shadows, spacing } from "@/constants/theme";

export default function MapView({ filtered, selectedPoint, onSelect, centerOnCity }) {
  const mapRef = React.useRef(null);

  const [viewState, setViewState] = React.useState({
    longitude: 106.7009,
    latitude: 10.7769,
    zoom: 11,
  });

  // === Fly tới tỉnh được chọn ===
  React.useEffect(() => {
    if (centerOnCity && cityCoordinates[centerOnCity] && mapRef.current) {
      const { lat, lng } = cityCoordinates[centerOnCity];
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 10,
        speed: 0.9,
        curve: 1.4,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        essential: true,
      });
    }
  }, [centerOnCity]);

  // === Khi click chọn điểm vi phạm → zoom tới điểm đó ===
  React.useEffect(() => {
    if (selectedPoint && mapRef.current) {
      mapRef.current.flyTo({
        center: [selectedPoint.lng, selectedPoint.lat],
        zoom: 13,
        speed: 1.2,
        curve: 1.5,
        easing: (t) => t * (2 - t),
        essential: true,
      });
    }
  }, [selectedPoint]);

  // === Màu mức độ vi phạm (dùng màu từ theme) ===
  const getColor = (muc_do) => {
    switch (muc_do) {
      case "Cao":
        return colors.palette.error500; // đỏ
      case "Trung bình":
        return colors.palette.yellow500; // vàng cam
      default:
        return colors.palette.primary500; // xanh lá
    }
  };

  return (
    <Map
      ref={mapRef}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    >
      {/* === Điều khiển bản đồ === */}
      <NavigationControl position="top-left" />

      {/* === Marker điểm vi phạm === */}
      {filtered.map((diem) => (
        <Marker
          key={diem.id}
          longitude={diem.lng}
          latitude={diem.lat}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            onSelect(diem);
          }}
        >
          <div
            style={{
              background: colors.palette.white,
              border: `${spacing.xxxs}px solid ${getColor(diem.muc_do)}`,
              color: getColor(diem.muc_do),
              borderRadius: radius.xl * 2, // 48px
              padding: `${spacing.xs}px ${spacing.sm}px`, // 8px 12px
              fontWeight: 700,
              fontSize: "13px",
              boxShadow: shadows.medium,
              display: "flex",
              alignItems: "center",
              gap: `${spacing.xs}px`,
              cursor: "pointer",
              animation: "pulseGlow 1.2s infinite ease-out",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
              alt="violation marker"
              style={{
                width: 18,
                height: 18,
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(98%) saturate(5000%) hue-rotate(-5deg) brightness(90%) contrast(95%)",
              }}
            />
            <span>{diem.so_luong}</span>
          </div>
        </Marker>
      ))}

      {/* === Popup thông tin === */}
      {selectedPoint && (
        <Popup
          longitude={selectedPoint.lng}
          latitude={selectedPoint.lat}
          onClose={() => onSelect(null)}
          closeOnClick={false}
          anchor="top"
          offset={20}
          style={{
            fontFamily: "Inter, sans-serif",
            color: colors.text,
          }}
        >
          <strong>{selectedPoint.ten_diem}</strong>
          <div>📍 {selectedPoint.dia_chi}</div>
          <div>⚠️ {selectedPoint.muc_do}</div>
          <div>🚦 {selectedPoint.vi_pham.join(", ")}</div>
        </Popup>
      )}

      {/* === Hiệu ứng động === */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 ${colors.palette.brand300}99;
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 15px ${colors.palette.brand100}66;
            transform: scale(1.08);
          }
          100% {
            box-shadow: 0 0 0 30px transparent;
            transform: scale(1);
          }
        }
      `}</style>
    </Map>
  );
}
