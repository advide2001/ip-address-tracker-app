import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="flex w-[90%] overflow-hidden rounded-xl bg-white lg:w-[768px]">
      <label htmlFor="ipAddress" className="sr-only">
        Search for IP address
      </label>
      <input
        type="text"
        id="ipAddress"
        size={12}
        maxLength={15}
        placeholder="Search..."
        className="flex-1 pl-3 text-xl focus:outline-none"
      />
      <button type="submit" className="bg-black p-4">
        <ChevronRightIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
