import React, { useState, useRef, useEffect } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const AddMomo = () => {
  const { setActiveComponent } = useDashboard();
  const [saveMomoDetails, setSaveMomoDetails] = useState(false);
  const [isNetworkDropdownOpen, setIsNetworkDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("MOBILE NETWORK");
  const [selectedCountry, setSelectedCountry] = useState("COUNTRY CODE");

  const networkRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  const networks = ["MTN", "Airtel", "Glo", "9mobile"];
  const countryCodes = ["+234", "+233", "+225", "+226"]; // Nigeria, Ghana, Ivory Coast, Burkina Faso

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        networkRef.current &&
        !networkRef.current.contains(event.target as Node)
      ) {
        setIsNetworkDropdownOpen(false);
      }
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-[#100F0D] flex flex-col rounded-2xl border border-[#C3AD60] p-6 text-center w-full mx-auto">
      {/* Header with Back Icon */}
      <div className="flex justify-start items-center">
        <div className="flex flex-1 items-center justify-between">
          <IoIosArrowBack
            className="text-[#C3AD60] cursor-pointer flex-shrink-0"
            onClick={() => setActiveComponent("acctInfo")}
          />
          <h2 className="text-sm md:text-lg text-white font-medium flex-grow justify-center flex">
            Provide momo/mobile money information
          </h2>
        </div>
      </div>

      <form action="">
        <div className="flex flex-col gap-6 w-full md:w-[60%] text-white py-20 mx-auto">
          <input
            type="text"
            placeholder="COUNTRY"
            className="outline-none border border-gold bg-inherit rounded-md p-3 w-full"
          />
          <input
            type="number"
            placeholder="PHONE NUMBER"
            className="outline-none border border-gold bg-inherit rounded-md p-3 w-full"
          />

          {/* Mobile Network Dropdown */}
          <div className="flex gap-4">
            <div className="relative w-full" ref={networkRef}>
              <div
                className="outline-none border border-gold bg-inherit rounded-md p-3 w-full flex items-center justify-between cursor-pointer"
                onClick={() => setIsNetworkDropdownOpen(!isNetworkDropdownOpen)}
              >
                {selectedNetwork}
                <IoIosArrowDown className="text-gold" />
              </div>
              {isNetworkDropdownOpen && (
                <ul
                  className="absolute left-0 mt-1 w-full bg-[#100F0D] border border-gold rounded-md shadow-md z-50 
                    transition-all duration-200 ease-out opacity-100 scale-100 origin-top"
                >
                  {networks.map((network) => (
                    <li
                      key={network}
                      className="p-3 cursor-pointer hover:bg-[#C3AD60] hover:text-black transition"
                      onClick={() => {
                        setSelectedNetwork(network);
                        setIsNetworkDropdownOpen(false);
                      }}
                    >
                      {network}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Country Code Dropdown */}
            <div className="relative w-[40%]" ref={countryRef}>
              <div
                className="outline-none border border-gold bg-inherit rounded-md p-3 w-full flex items-center justify-between cursor-pointer"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              >
                {selectedCountry}
                <IoIosArrowDown className="text-gold" />
              </div>
              {isCountryDropdownOpen && (
                <ul
                  className="absolute left-0 mt-1 w-full bg-[#100F0D] border border-gold rounded-md shadow-md z-50 
                    transition-all duration-200 ease-out opacity-100 scale-100 origin-top"
                >
                  {countryCodes.map((code) => (
                    <li
                      key={code}
                      className="p-3 cursor-pointer hover:bg-[#C3AD60] hover:text-black transition"
                      onClick={() => {
                        setSelectedCountry(code);
                        setIsCountryDropdownOpen(false);
                      }}
                    >
                      {code}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Toggle Save MOMO Details */}
          <div
            className="flex justify-between w-full cursor-pointer"
            onClick={() => setSaveMomoDetails(!saveMomoDetails)}
          >
            <h1 className="text-sm font-normal md:text-base">Save MOMO details</h1>
            {saveMomoDetails ? (
              <BsToggleOn className="h-6 w-6 text-gold" />
            ) : (
              <BsToggleOff className="h-6 w-6 text-gold" />
            )}
          </div>

          {/* Next Button */}
          <div>
            <button className="bg-gold w-full font-semibold text-base mx-auto md:w-[70%] rounded-md py-2 px-4 text-black">
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddMomo;
