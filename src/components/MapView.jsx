"use client";

import * as React from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapView({
  filtered,
  selectedPoint,
  onSelect,
  centerOnCity,
}) {
  const mapRef = React.useRef(null);

  const [viewState, setViewState] = React.useState({
    longitude: 106.7009,
    latitude: 10.7769,
    zoom: 11,
  });

  // Danh sách toạ độ trung tâm các tỉnh
 const cityCoordinates = {
  "An Giang": { lat: 10.4820, lng: 105.4388 },
  "Bà Rịa Vũng Tàu": { lat: 10.4510, lng: 107.0968 },
  "Bạc Liêu": { lat: 9.2926, lng: 105.7107 },
  "Bắc Kạn": { lat: 22.1470, lng: 105.8348 },
  "Bắc Giang": { lat: 21.2810, lng: 106.1977 },
  "Bắc Ninh": { lat: 21.1390, lng: 106.1023 },
  "Bến Tre": { lat: 10.2434, lng: 106.3758 },
  "Bình Dương": { lat: 10.9637, lng: 106.6933 },
  "Bình Định": { lat: 13.7820, lng: 109.2197 },
  "Bình Phước": { lat: 11.7512, lng: 106.7235 },
  "Bình Thuận": { lat: 10.9289, lng: 108.1021 },
  "Cà Mau": { lat: 9.1788, lng: 105.1440 },
  "Cao Bằng": { lat: 22.6654, lng: 106.2570 },
  "Cần Thơ": { lat: 10.0457, lng: 105.7463 },
  "Đà Nẵng": { lat: 16.0544, lng: 108.2022 },
  "Đắk Lắk": { lat: 12.7100, lng: 108.2378 },
  "Đắk Nông": { lat: 12.2645, lng: 107.6098 },
  "Điện Biên": { lat: 21.3860, lng: 103.0160 },
  "Đồng Nai": { lat: 10.9318, lng: 106.6717 },
  "Đồng Tháp": { lat: 10.4930, lng: 105.6880 },
  "Gia Lai": { lat: 13.9810, lng: 108.0023 },
  "Hà Giang": { lat: 22.8035, lng: 104.9784 },
  "Hà Nam": { lat: 20.5410, lng: 105.9213 },
  "Hà Nội": { lat: 21.0285, lng: 105.8542 },
  "Hà Tĩnh": { lat: 18.3429, lng: 105.9057 },
  "Hải Dương": { lat: 20.9381, lng: 106.3207 },
  "Hải Phòng": { lat: 20.8449, lng: 106.6881 },
  "Hậu Giang": { lat: 9.7836, lng: 105.4701 },
  "Hồ Chí Minh": { lat: 10.8231, lng: 106.6297 },
  "Hòa Bình": { lat: 20.8172, lng: 105.3376 },
  "Hưng Yên": { lat: 20.6464, lng: 106.0511 },
  "Khánh Hòa": { lat: 12.2585, lng: 109.0526 },
  "Kiên Giang": { lat: 9.8249, lng: 105.1259 },
  "Kon Tum": { lat: 14.3496, lng: 108.0000 },
  "Lai Châu": { lat: 22.3964, lng: 103.4587 },
  "Lâm Đồng": { lat: 11.9404, lng: 108.4583 },
  "Lạng Sơn": { lat: 21.8537, lng: 106.7615 },
  "Lào Cai": { lat: 22.4856, lng: 103.9707 },
  "Long An": { lat: 10.6955, lng: 106.2430 },
  "Nam Định": { lat: 20.4296, lng: 106.1688 },
  "Nghệ An": { lat: 18.8023, lng: 105.6829 },
  "Ninh Bình": { lat: 20.2506, lng: 105.9745 },
  "Ninh Thuận": { lat: 11.6739, lng: 108.9910 },
  "Phú Thọ": { lat: 21.3227, lng: 105.2058 },
  "Phú Yên": { lat: 13.0882, lng: 109.0929 },
  "Quảng Bình": { lat: 17.4688, lng: 106.6223 },
  "Quảng Nam": { lat: 15.5730, lng: 108.4740 },
  "Quảng Ngãi": { lat: 15.1205, lng: 108.7923 },
  "Quảng Ninh": { lat: 21.0064, lng: 107.2925 },
  "Quảng Trị": { lat: 16.7473, lng: 107.1897 },
  "Sóc Trăng": { lat: 9.6025, lng: 105.9739 },
  "Sơn La": { lat: 21.3280, lng: 103.9149 },
  "Tây Ninh": { lat: 11.3220, lng: 106.0970 },
  "Thái Bình": { lat: 20.4499, lng: 106.3366 },
  "Thái Nguyên": { lat: 21.5942, lng: 105.8480 },
  "Thanh Hóa": { lat: 19.8067, lng: 105.7766 },
  "Thừa Thiên Huế": { lat: 16.4637, lng: 107.5909 },
  "Tiền Giang": { lat: 10.3626, lng: 106.3453 },
  "Trà Vinh": { lat: 9.9347, lng: 106.3456 },
  "Tuyên Quang": { lat: 21.8187, lng: 105.2140 },
  "Vĩnh Long": { lat: 10.2530, lng: 105.9723 },
  "Vĩnh Phúc": { lat: 21.3080, lng: 105.6049 },
  "Yên Bái": { lat: 21.7050, lng: 104.8680 },
};


  // Khi chọn khu vực từ WelcomeModal → flyTo
  React.useEffect(() => {
    if (centerOnCity && cityCoordinates[centerOnCity] && mapRef.current) {
      const { lat, lng } = cityCoordinates[centerOnCity];
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 10,
        speed: 0.9,
        curve: 1.4,
        easing: (t) => 1 - Math.pow(1 - t, 3), // easing mềm mại
        essential: true,
      });
    }
  }, [centerOnCity]);

  // Khi click chọn điểm vi phạm → zoom tới điểm đó
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

  const getColor = (muc_do) => {
    switch (muc_do) {
      case "Cao":
        return "#E53935";
      case "Trung bình":
        return "#FB8C00";
      default:
        return "#43A047";
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
      <NavigationControl position="top-left" />

      {/* MARKERS */}
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
              background: "#fff",
              border: `3px solid ${getColor(diem.muc_do)}`,
              color: getColor(diem.muc_do),
              borderRadius: "999px",
              padding: "6px 12px",
              fontWeight: "700",
              fontSize: "13px",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              animation: "pulseGlow 1.2s infinite ease-out",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
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

      {/* POPUP */}
      {selectedPoint && (
        <Popup
          longitude={selectedPoint.lng}
          latitude={selectedPoint.lat}
          onClose={() => onSelect(null)}
          closeOnClick={false}
          anchor="top"
          offset={20}
        >
          <strong>{selectedPoint.ten_diem}</strong>
          <div>📍 {selectedPoint.dia_chi}</div>
          <div>⚠️ {selectedPoint.muc_do}</div>
          <div>🚦 {selectedPoint.vi_pham.join(", ")}</div>
        </Popup>
      )}

      {/* ANIMATION */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(230, 64, 18, 0.87);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(26, 51, 255, 0.2);
            transform: scale(1.08);
          }
          100% {
            box-shadow: 0 0 0 40px rgba(26, 51, 255, 0);
            transform: scale(1);
          }
        }
      `}</style>
    </Map>
  );
}
