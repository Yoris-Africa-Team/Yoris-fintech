'use client'
import { useState } from "react";
import Header from "@/constant/Header";
import { div } from "framer-motion/client";

const BranchRegistration = () => {
  const [formData, setFormData] = useState({
    phone: "",
    street: "",
    state: "",
    district: "",
    landmark: "",
    zip: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  const handleClear = () => {
    setFormData({
      phone: "",
      street: "",
      state: "",
      district: "",
      landmark: "",
      zip: "",
    });
  };

  return (
    <div>
        <Header />
         <div className="min-h-screen bg-black text-white px-6 py-8 pt-20 ">
      <div className="max-w-lg w-full mx-auto">
        {/* Header */}
        <h1 className="text-[#C3AD60] text-lg font-semibold mb-2">
          Branch registration
        </h1>
        <p className="text-gray-400 mb-6">
          Please provide the following details so that we can confirm your business legitimacy and prevent fraud.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone Input */}
          <div className="flex items-center bg-[#1A1A1A] p-3 rounded-lg">
            <select className="bg-transparent text-white text-sm outline-none">
              <option value="+234">+234</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="8051268782"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent text-white flex-1 outline-none ml-2"
            />
          </div>

          {/* Address Fields */}
          <div className="space-y-3">
            <input
              type="text"
              name="street"
              placeholder="Street address, P.O etc."
              value={formData.street}
              onChange={handleChange}
              className="w-full bg-[#1A1A1A] p-3 rounded-lg text-white outline-none"
            />

            <div className="flex items-center bg-[#1A1A1A] p-3 rounded-lg">
              <span className="mr-2">🇳🇬</span>
              <span className="text-white text-sm">Nigeria</span>
            </div>

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full bg-[#1A1A1A] p-3 rounded-lg text-gray-400 outline-none"
            >
              <option value="">State</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
            </select>

            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full bg-[#1A1A1A] p-3 rounded-lg text-gray-400 outline-none"
            >
              <option value="">District</option>
            </select>

            <input
              type="text"
              name="landmark"
              placeholder="Nearest Landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="w-full bg-[#1A1A1A] p-3 rounded-lg text-white outline-none"
            />

            <input
              type="text"
              name="zip"
              placeholder="Zip/Postal Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full bg-[#1A1A1A] p-3 rounded-lg text-white outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-2 mt-6">
            <button
              type="button"
              onClick={handleClear}
              className="w-full py-3 border border-[#C3AD60] text-[#C3AD60] rounded-lg"
            >
              CLEAR
            </button>
            <button
              type="submit"
              className="w-full py-3 bg-[#C3AD60] text-black font-semibold rounded-lg"
            >
              SUBMIT FOR VERIFICATION
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
   
  );
};

export default BranchRegistration;
