import React from "react";

const data = {
  ipAddress: "192.212.174.101",
  location: "Brooklyn, NY 10001",
  timezone: "UTC -05:00",
  isp: "SpaceX Starlink",
};

const DataCard = () => {
  return (
    <div className="absolute bottom-0 left-0 z-10 mx-auto flex w-[90%] translate-x-[5%] translate-y-1/2 flex-col items-center justify-evenly gap-4 rounded-xl bg-white px-6 py-4">
      <div className="mx-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          IP Address
        </p>
        <p className="mt-1 text-lg font-semibold">{data.ipAddress}</p>
      </div>
      <div className="mx-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Location
        </p>
        <p className="mt-1 text-lg font-semibold">{data.location}</p>
      </div>
      <div className="mx-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Timezone
        </p>
        <p className="mt-1 text-lg font-semibold">{data.timezone}</p>
      </div>
      <div className="mx-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          ISP
        </p>
        <p className="mt-1 text-lg font-semibold">{data.isp}</p>
      </div>
    </div>
  );
};

export default DataCard;
