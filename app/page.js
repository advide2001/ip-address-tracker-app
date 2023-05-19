import React from "react";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import DataCard from "./components/DataCard";
import fetchIPData from "./util/getIPAddressDetails";

export default async function Home() {
  const intitalData = await fetchIPData("216.58.214.46");
  const coords = [intitalData.lat, intitalData.lon];
  const details = {
    ip: intitalData.query,
    location: `${intitalData.city}, ${intitalData.region} ${intitalData.zip}`,
    timezone: intitalData.timezone,
    isp: intitalData.isp,
  };

  return (
    <div>
      <div className="relative flex h-[35vh] w-full flex-col justify-start gap-8 bg-hero-mobileBg bg-cover bg-center bg-no-repeat text-center md:h-[30vh] md:bg-hero-desktopBg">
        <h1 className="pt-6 text-3xl font-medium text-white">
          IP Address Tracker
        </h1>
        <SearchBar initialData={intitalData} />
        <DataCard ipDetails={details} />
      </div>
      <Map coords={coords} />
    </div>
  );
}
