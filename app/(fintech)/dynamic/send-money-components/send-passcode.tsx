"use client";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useDashboard } from "@/(fintech)/context/DashboardContext";
import { IoIosArrowBack } from "react-icons/io";
import SendNotification from "./send-notification";

type ComponentType = "input" | "checkout" | "sendPasscode" | null;

const SendPasscode = ({
  setNextComponent,
}: {
  setNextComponent: (component: ComponentType) => void;
}) => {
  const { setActiveComponent } = useDashboard();

  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);
  const correctPasscode = "1234"; // Replace with actual logic

  const handleInput = (num: string) => {
    if (passcode.length < 4) {
      const newPasscode = passcode + num;
      setPasscode(newPasscode);

      if (newPasscode.length === 4) {
        if (newPasscode === correctPasscode) {
          console.log("Passcode Correct! ✅");
          setNextComponent("checkout"); // Move to next step
        } else {
          setError(true);
          setTimeout(() => {
            setPasscode("");
            setError(false);
          }, 1500);
        }
      }
    }
  };

  return (
    <>
      {/* Error Message */}
      {error && (
        <div className="absolute bottom-20 left-4 w-fit bg-[#C3AD60] text-black text-center px-6 py-3 rounded-lg">
          Incorrect passcode, please try again!
        </div>
      )}

      <div className="py-3 items-center justify-center flex flex-col">
        {passcode === correctPasscode ? (
          <SendNotification />
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center absolute top-5 md:top-10 right-0 left-0 w-full bg-[#C3AD60] p-2">
              <div
                className="bg-black p-2 flex-shrink-0 cursor-pointer"
                onClick={() => setActiveComponent("topUp")}
              >
                <IoIosArrowBack className="text-white mx-auto h-3 w-3 md:h-5 md:w-5" />
              </div>
              <h1 className="text-black flex-grow justify-center flex">
                Enter passcode
              </h1>
            </div>

            {/* Passcode Input Box */}
            <div className="bg-[#1A1A1A] p-8 rounded-2xl shadow-lg w-80 text-center">
              <FaLock className="text-[#C3AD60] text-3xl mx-auto mb-4" />
              <h2 className="text-lg mb-4">Enter Passcode</h2>

              {/* Passcode Dots */}
              <div className="flex justify-center items-center gap-2 mb-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i < passcode.length ? "bg-[#C3AD60]" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Number Pad */}
              <div className="grid grid-cols-3 items-center justify-center gap-4">
                {[..."1234567890"].map((num) => (
                  <button
                    key={num}
                    className={`w-16 h-16 text-lg rounded-full bg-[#2E2E2E] hover:bg-[#C3AD60] hover:text-black transition 
                    ${num === "0" ? "col-span-1 col-start-2" : ""}`} // Center '0'
                    onClick={() => handleInput(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Forgot Password */}
              <p className="mt-4 text-blue-500 cursor-pointer">Forgot password?</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SendPasscode;
