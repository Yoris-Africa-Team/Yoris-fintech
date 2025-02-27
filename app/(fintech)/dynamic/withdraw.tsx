"use client";
import React from "react";
import { useDashboard } from "../context/DashboardContext";
import { ArrowRight } from "lucide-react";
import { IoIosArrowBack } from "react-icons/io";

const Withdraw = () => {
  const { setActiveComponent } = useDashboard();

  function handleSubmit(_e: React.FormEvent<HTMLFormElement>) {
    _e.preventDefault();
  }

  return (
    <section className="bg-[#100F0D] flex flex-col justify-between gap-16 rounded-2xl border border-[#C3AD60] p-6 text-center w-full mx-auto">
      {/* Header with Back Icon */}
      <div className="flex justify-start items-center">
        <div className="flex flex-1 justify-between">
          <IoIosArrowBack
            className="text-[#C3AD60] cursor-pointer flex-shrink-0"
            onClick={() => setActiveComponent("wallet")}
          />
          <h2 className="text-lg text-white font-medium flex-grow justify-center flex">
            Withdraw
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 my-[60px]">
        {/* Wallet Balance */}
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold">
            ₦100,892.<span className="text-lg">00</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">Wallet Balance</p>
        </div>

        {/* Enter Amount Section */}
        <form
          className="flex flex-col max-w-[400px] w-full mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="amount" className="flex flex-col items-start">
            <span>AMOUNT</span>
            <input
              type="number"
              id="amount"
              className="w-full py-3 my-3 bg-[#181818] outline-none px-3 rounded-md"
            />
            <span>+ N50 Withdrawal fee</span>
          </label>

          <div className="flex justify-end">
            <button
              type="button"
              className="flex bg-[#C3AD60] text-black rounded-md items-center justify-center py-4 px-5 font-bold gap-2"
              onClick={() => setActiveComponent("with-passcode")}
            >
              <span>Enter</span>
              <ArrowRight className="text-black" />
            </button>
          </div>

          <div className="flex justify-start mt-4 text-[10px] font-semibold text-white">
            Minimum of N100 to complete withdrawal*
          </div>
        </form>
      </div>
    </section>
  );
};

export default Withdraw;
