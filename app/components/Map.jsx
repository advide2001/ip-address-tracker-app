"use client";

import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const customSvgIcon = icon({
  iconUrl: "/../../images/icon-location.svg",
  iconSize: [34, 42],
});

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customSvgIcon} position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
};

export default Map;
