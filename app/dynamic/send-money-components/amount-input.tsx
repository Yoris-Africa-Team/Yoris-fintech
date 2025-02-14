import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AmountInput = () => {
  return (
    <div className="flex flex-col gap-10 mb-10 max-w-[90%] w-full mx-auto">
      {/* Account Input */}
      <div className="text-left">
        <label className="block  mb-1">Account</label>
        <input
          type="text"
          placeholder="Recipient Account"
          className="w-full p-3 bg-[#181818] text-white rounded-md outline-none"
        />
        <p className="text-xs text-[#989898] mt-1">+ ₦50 Withdrawal Fee</p>
      </div>

      {/* Select Amount */}
      <div className="text-left">
        <label className="block text-xs mb-2">Select Amount</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[100000, 200000, 300000, 400000, 500000, 600000].map((amount) => (
            <button
              key={amount}
              className="bg-[#181818] text-white font-normal text-base md:text-xl py-2 rounded-md"
            >
              ₦{amount.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Enter Amount */}
      <div className="text-left">
        <label className="block  mb-1">Enter Amount</label>
        <input
          type="number"
          placeholder="₦100 - ₦1,000,000.00"
          className="w-full p-3 bg-[#181818] text-white rounded-md outline-none"
        />
      </div>

      {/* Next Button */}
      <button className="bg-[#C3AD60]  text-black py-3 rounded-md flex items-center justify-center gap-2 font-bold">
        <span>Next</span>
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default AmountInput;
