import React from "react";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import DataCard from "./components/DataCard";

export default function Home() {
  return (
    <div className="relative">
      <div className="h-[35vh] w-full bg-hero-mobileBg bg-cover bg-center bg-no-repeat md:h-[25vh] md:bg-hero-desktopBg"></div>
      <Map />
      <div className="fixed inset-0 z-10 flex flex-col">
        <h1>IP Address Tracker</h1>
        <SearchBar />
        <DataCard />
      </div>
    </div>
  );
}
