'use client';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import React from "react";

const products = [
  { id: 1, name: "CURAME" },
  { id: 2, name: "LUXE SERUM" },
  { id: 3, name: "NOVA GLOW" },
  { id: 4, name: "HYDRA RICH" },
  { id: 5, name: "ELEVATE CREAM" },
  { id: 6, name: "PURE ZEN" },
  { id: 7, name: "FRESH BLOOM" },
  { id: 8, name: "SILK TOUCH" },
  { id: 9, name: "VITAL BOOST" },
  { id: 10, name: "RADIANT MIST" },
  { id: 11, name: "GLOW ELIXIR" },
  { id: 12, name: "AURA SHINE" },
  { id: 13, name: "DEWY DROP" },
  { id: 14, name: "NOURISH PLUS" },
  { id: 15, name: "REVIVE BALM" },
  { id: 16, name: "LUMI ESSENCE" },
];

const TopProductsSection: React.FC = () => {
  return (
    <div className="p-6 max-w-[95%] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-yellow-300">Top Products</h2>
        
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-[#BCBCBC33] rounded-lg overflow-hidden shadow-lg p-4 flex flex-col justify-between items-center h-auto"
          >
            {/* Placeholder image */}
            <div className="w-full h-48 bg-gray-500 animate-pulse rounded-lg"></div>

            {/* Crown Icon */}
            <div className="absolute top-2 right-2 text-yellow-400 text-xl">
              <FaCrown />
            </div>

            {/* Product Name & Free Badge */}
            <div className="w-full text-white text-sm flex justify-between items-center mt-4">
              <span className="font-semibold">{product.name}</span>
              <span className="bg-gray-700 px-2 py-1 text-xs rounded-md">Free</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsSection;
