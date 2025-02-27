'use client';
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import NewLocation from "./components/newLocation";

const Location = () => {
  const router = useRouter();
  const [showLocation, setShowLocation] = useState(false);

  return (
    <section className="max-w-full my-auto mx-auto text-white relative">
      {/* Background Blur when NewLocation is Open */}
      {showLocation && (
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-10"></div>
      )}

      <div className="py-10 w-full mb-10 border-b-[0.1px] border-b-[#38383866]"></div>
      
      {/* Header */}
      <div className="flex gap-3 ml-8 items-center mb-12">
        <button className="p-1 border border-white rounded-lg"
          onClick={() => router.push("/store/checkout")}
        >
          <MdKeyboardArrowLeft className="h-8 w-8 cursor-pointer" />
        </button>
        <h1 className="font-semibold text-2xl md:text-3xl">Address</h1>
      </div>

      <main className="w-full max-w-[90%] md:max-w-[60%] mx-auto flex flex-col gap-6">
        <h2 className="text-lg font-semibold text-[#E6D4A4]">Saved address</h2>
        
        {/* Address List */}
        <div className="flex flex-col gap-4">
          <div className="w-full bg-[#262119] relative p-6 border-2 border-[#C3AD6033] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-gold rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg">Esther Howard</h2>
                <p className="text-sm text-gray-400">(603) 555-0123</p>
                <p className="text-sm text-gray-400">4517 Washington Ave, Manchester, Kentucky, USA, 39495</p>
                <button className="text-gold text-sm mt-2">EDIT</button>
              </div>
            </div>
            <span className="absolute top-4 right-4 text-xs text-gray-500 bg-[#C3AD6033] px-2 py-1 rounded-md">Default</span>
          </div>

          {/* Additional Address (Previously Removed) */}
          <div className="w-full bg-[#0E0D0B] relative p-6 border-2 border-[#C3AD6033] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-gold rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg">John Doe</h2>
                <p className="text-sm text-gray-400">(234) 802-123-4567</p>
                <p className="text-sm text-gray-400">12B Lekki Phase 1, Lagos, Nigeria</p>
                <button className="text-gold text-sm mt-2">EDIT</button>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button 
            className="border border-gold text-gold px-6 py-2 rounded-lg hover:bg-hovergold duration-150 hover:text-black"
            onClick={() => setShowLocation(true)}
          >
            ADD NEW ADDRESS
          </button>
          <button className="bg-gold text-[#272313] px-6 py-2 rounded-lg font-semibold duration-150 hover:bg-hovergold"
          onClick={() => router.back()}
          >
            CONTINUE
          </button>
        </div>
      </main>

      {/* NewLocation Modal */}
      {showLocation && <NewLocation setShowLocation={setShowLocation} />}
    </section>
  );
};

export default Location;
