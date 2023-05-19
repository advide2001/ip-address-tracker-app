"use client";

import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function validateIPAddress(ipAddress) {
  // Regular expression pattern for IP address validation
  const ipAddressPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

  // IP address is valid
  if (ipAddressPattern.test(ipAddress)) return true;
  // IP address is invalid
  else return false;
}

const SearchBar = () => {
  // logic
  const [ipAddress, setIpAddress] = useState("");
  const [isValidIP, setIsValidIP] = useState(true);

  const handleInputChange = (e) => {
    setIpAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateIPAddress(ipAddress)) {
      setIsValidIP(true);
      setIpAddress("");
      // TODO: fetch data
    } else setIsValidIP(false);
  };

  // render output
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto flex w-[90%] overflow-hidden rounded-xl bg-white lg:w-[768px]">
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
          onChange={handleInputChange}
          value={ipAddress}
        />
        <button type="submit" className="bg-black p-4">
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      </div>
      {!isValidIP && (
        <p className="mx-auto flex w-[90%] text-lg text-yellow-300 lg:w-[768px]">
          * Enter a valid IP address
        </p>
      )}
    </form>
  );
};

export default SearchBar;
