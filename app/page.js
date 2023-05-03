import React from "react";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import DataCard from "./components/DataCard";

export default function Home() {
  return (
    <div>
      <div className="h-[35vh] w-full bg-hero-mobileBg bg-cover bg-center bg-no-repeat md:h-[30vh] md:bg-hero-desktopBg">
        <h1 className="text-3xl font-semibold text-white">
          IP Address Tracker
        </h1>
        <SearchBar />
        <DataCard />
      </div>
      <Map />
    </div>
  );
}
