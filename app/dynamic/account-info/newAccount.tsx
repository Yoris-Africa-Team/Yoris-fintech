"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const banks = ["GTBank", "Zenith Bank", "Access Bank", "UBA"];

const AddNewAccount = () => {
  const { setActiveComponent } = useDashboard();
  const [saveBankDetails, setSaveBankDetails] = useState(false);
  const [selectedBank, setSelectedBank] = useState("Select Bank");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
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
            Provide bank account information
          </h2>
        </div>
      </div>

      <form action="">
        <div className="flex flex-col gap-6 w-full md:w-[60%] text-white py-20 mx-auto">
          <input
            type="text"
            placeholder="ACCOUNT NAME"
            className="outline-none border border-gold bg-inherit rounded-md p-3 w-full"
          />
          <input
            type="number"
            placeholder="ACCOUNT NUMBER"
            className="outline-none border border-gold bg-inherit rounded-md p-3 w-full"
          />

          {/* Custom Dropdown */}
          <div className="relative w-full md:w-[60%]" ref={dropdownRef}>
            <div
              className="outline-none border border-gold bg-inherit rounded-md p-3 flex justify-between items-center cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedBank}</span>
              <IoIosArrowDown
                className={`text-white transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdownOpen && (
              <ul
                className="absolute left-0 mt-1 w-full bg-[#100F0D] border border-gold rounded-md shadow-md z-50 
               transition-all duration-200 ease-out opacity-100 scale-100 origin-top"
              >
                {banks.map((bank) => (
                  <li
                    key={bank}
                    className="p-3 cursor-pointer hover:bg-[#C3AD60] hover:text-black transition"
                    onClick={() => {
                      setSelectedBank(bank);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {bank}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Toggle Save Bank Details */}
          <div
            className="flex justify-between w-full cursor-pointer"
            onClick={() => setSaveBankDetails(!saveBankDetails)}
          >
            <h1 className="text-sm font-normal md:text-base">
              Save bank details
            </h1>
            {saveBankDetails ? (
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

export default AddNewAccount;
