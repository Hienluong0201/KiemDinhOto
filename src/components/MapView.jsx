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
  const [viewState, setViewState] = React.useState({
    longitude: 106.7009, 
    latitude: 10.7769,
    zoom: 11,
  });

  
  React.useEffect(() => {
    if (selectedPoint) {
      setViewState((prev) => ({
        ...prev,
        longitude: selectedPoint.lng,
        latitude: selectedPoint.lat,
        zoom: 12,
      }));
    }
  }, [selectedPoint]);

  
  React.useEffect(() => {
    if (!centerOnCity) return;
    if (centerOnCity === "Hồ Chí Minh") {
      setViewState({
        longitude: 106.7009,
        latitude: 10.7769,
        zoom: 11,
      });
    } else if (centerOnCity === "Hà Nội") {
      setViewState({
        longitude: 105.8542,
        latitude: 21.0285,
        zoom: 11,
      });
    }
  }, [centerOnCity]);

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
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    >
      <NavigationControl position="top-left" />

      
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
              animation: "pulseGlow 0.8s infinite ease-out",
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

      {/* Popup chi tiết điểm */}
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

      <style jsx global>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 87, 34, 1);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 25px rgba(255, 87, 34, 0.5);
            transform: scale(1.1);
          }
          100% {
            box-shadow: 0 0 0 45px rgba(255, 87, 34, 0);
            transform: scale(1);
          }
        }
      `}</style>
    </Map>
  );
}
