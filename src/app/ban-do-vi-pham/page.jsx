"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🧭 Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// 📍 Component giúp pan đến khu vực mới
function ChangeView({ coords }) {
  const map = useMap();
  map.flyTo(coords, 12, { duration: 1.2 });
  return null;
}

export default function BanDoViPhamPage() {
  const [showPopup, setShowPopup] = useState(true);
  const [khuVucList, setKhuVucList] = useState([]);
  const [selectedKhuVuc, setSelectedKhuVuc] = useState(null);

  useEffect(() => {
    // Giả lập API khu vực
    const fakeData = [
      { id: 1, ten_khu_vuc: "TP. Hồ Chí Minh", lat: 10.7769, lng: 106.7009 },
      { id: 2, ten_khu_vuc: "Hà Nội", lat: 21.0285, lng: 105.8542 },
      { id: 3, ten_khu_vuc: "Đà Nẵng", lat: 16.0544, lng: 108.2022 },
      { id: 4, ten_khu_vuc: "Cần Thơ", lat: 10.0452, lng: 105.7469 },
    ];
    setKhuVucList(fakeData);
  }, []);

  const handleConfirm = () => {
    if (!selectedKhuVuc) {
      alert("Vui lòng chọn khu vực trước khi xem bản đồ!");
      return;
    }
    setShowPopup(false);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Popup chọn khu vực */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "2rem",
              textAlign: "center",
              width: "90%",
              maxWidth: "420px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              animation: "fadeIn 0.4s ease",
            }}
          >
            <h2 style={{ color: "#262FED", marginBottom: "10px" }}>
              Chào mừng bạn đến <br />
              <strong>Bản đồ vi phạm giao thông</strong>
            </h2>
            <p>Vui lòng chọn khu vực bạn muốn xem:</p>

            <select
              onChange={(e) => {
                const kv = khuVucList.find(
                  (x) => x.id === Number(e.target.value)
                );
                setSelectedKhuVuc(kv);
              }}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
              value={selectedKhuVuc?.id || ""}
            >
              <option value="">-- Chọn khu vực --</option>
              {khuVucList.map((kv) => (
                <option key={kv.id} value={kv.id}>
                  {kv.ten_khu_vuc}
                </option>
              ))}
            </select>

            <button
              onClick={handleConfirm}
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                background: "#262FED",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "0.3s",
              }}
            >
              Xem bản đồ
            </button>
          </div>
        </div>
      )}

      {/* Thanh chọn khu vực nổi trên bản đồ */}
      {!showPopup && (
        <div
          style={{
            position: "absolute",
            top: 15,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10000, // đảm bảo luôn nổi trên map
            background: "white",
            borderRadius: "10px",
            padding: "8px 12px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ fontWeight: 600 }}>Khu vực:</label>
          <select
            onChange={(e) => {
              const kv = khuVucList.find(
                (x) => x.id === Number(e.target.value)
              );
              setSelectedKhuVuc(kv);
            }}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "0.95rem",
            }}
            value={selectedKhuVuc?.id || ""}
          >
            <option value="">-- Chọn khu vực --</option>
            {khuVucList.map((kv) => (
              <option key={kv.id} value={kv.id}>
                {kv.ten_khu_vuc}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* ✅ Nút chọn lại khu vực */}
      {!showPopup && (
       <button
  onClick={() => setShowPopup(true)}
  style={{
    position: "fixed",
    bottom: 30,
    right: 30,
    zIndex: 10001,
    background: "#262FED",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "10px 18px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 3px 12px rgba(0,0,0,0.3)",
    transition: "all 0.2s ease",
  }}
  onMouseOver={(e) => (e.target.style.background = "rgba(38,47,237,0.85)")}
  onMouseOut={(e) => (e.target.style.background = "#262FED")}
>
  🔄 Chọn lại khu vực
</button>

      )}

      {/* Map */}
      <MapContainer
        center={[16.0471, 108.2068]}
        zoom={6}
        style={{
          width: "100%",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedKhuVuc && (
          <>
            <ChangeView coords={[selectedKhuVuc.lat, selectedKhuVuc.lng]} />
            <Marker
              position={[selectedKhuVuc.lat, selectedKhuVuc.lng]}
              icon={customIcon}
            >
              <Popup>
                <b>{selectedKhuVuc.ten_khu_vuc}</b>
                <br />
                Khu vực hiển thị điểm nóng vi phạm.
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}
