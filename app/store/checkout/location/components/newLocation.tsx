'use client';
import React from "react";
import { MdClose } from "react-icons/md";

interface NewLocationProps {
  setShowLocation: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewLocation: React.FC<NewLocationProps> = ({ setShowLocation }) => {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-[#0E0D0B] bg-opacity-50 backdrop-blur-sm z-20">
      <div className="w-full max-w-[90%] md:max-w-[45%] mx-auto  bg-[#0E0D0B] border border-[#C3AD6033] rounded-lg px-6 py-10 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-semibold text-center flex-grow">ADD NEW ADDRESS</h2>
          <button 
            className="text-white p-2 border rounded-full"
            onClick={() => setShowLocation(false)}
          >
            
            <MdClose className="w-4 h-4" />
            
          </button>
        </div>
        
        {/* Country Selection */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">Country/Region</label>
          <div className="bg-[#231F11] p-3 rounded-md flex items-center justify-between text-sm">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-500 rounded-sm"></span> Nigeria
            </span>
            <span className="text-gray-400">▼</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Please enter your address as required by international services.
          </p>
        </div>
        
        {/* Address Fields */}
        <div className="flex flex-col mt-8 space-y-4">
         <h1 className="text-base font-light ">Fill Address Information</h1>
          <input 
            className="bg-[#231F11] p-3 rounded-md text-sm text-white placeholder-gray-400" 
            placeholder="Street address, P. O. box, etc. *" 
          />
          <select className="bg-[#231F11] p-3 rounded-md text-sm text-white">
            <option className="text-black">State *</option>
          </select>
          <select className="bg-[#231F11] p-3 rounded-md text-sm text-white">
            <option className="text-black">Local Government *</option>
          </select>
          <input 
            className="bg-[#231F11] p-3 rounded-md text-sm text-white placeholder-gray-400" 
            placeholder="Nearest Landmark *" 
          />
          <input 
            className="bg-[#231F11] p-3 rounded-md text-sm text-white placeholder-gray-400" 
            placeholder="Zip/Postal Code" 
          />
        </div>
        
        {/* Save Button */}
        <button 
          className="my-10 w-full md:w-1/2 flex justify-center mx-auto text-center  border border-[#C3AD60] text-[#C3AD60] py-2 rounded-lg text-sm font-semibold hover:bg-[#C3AD60] hover:text-black transition"
          onClick={() => setShowLocation(false)}
        >
          SAVE NEW ADDRESS
        </button>
      </div>
    </section>
  );
};

export default NewLocation;
