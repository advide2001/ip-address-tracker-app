"use client";

import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const customSvgIcon = icon({
  iconUrl: "/../../images/icon-location.svg",
  iconSize: [34, 42],
});

const Map = (props) => {
  return (
    <MapContainer center={props.coords} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customSvgIcon} position={props.coords}></Marker>
    </MapContainer>
  );
};

export default Map;
