import React from "react";
import Map from "./components/Map";

export default function Home() {
  return (
    <div className="relative">
      <div className="h-[35vh] w-full bg-hero-mobileBg bg-cover bg-center bg-no-repeat md:h-[25vh] md:bg-hero-desktopBg"></div>
      <Map />
    </div>
  );
}
