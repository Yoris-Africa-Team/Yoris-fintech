'use client'
import { ArrowLeft, } from "lucide-react";
import React from "react";
import { FaCrown, FaArrowRight } from "react-icons/fa"; 
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const products = [
  { id: 1, name: "CURAME" },
  { id: 2, name: "BAJSKDADAKJSANAS SDBJS" },
  { id: 3, name: "BAJSKDADAKJSANAS SDBJS" },
  { id: 4, name: "BAJSKDADAKJSANAS SDBJS" },
  { id: 5, name: "BAJSKDADAKJSANAS SDBJS" },
  

];

const Products: React.FC = () => {
  const router = useRouter();
  return (
      <div className="p-6 max-w-[95%]">
        <div className="flex justify-between items-center max-w-full">
        <h2 className="text-xl font-semibold text-yellow-300">Top Products</h2>
        <button onClick={() => router.push('/store/top-products')}>
        <MdKeyboardArrowRight className="h-8 w-8" />
        </button>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative min-w-[250px] h-[300px] bg-[#BCBCBC33] rounded-lg overflow-hidden shadow-lg"
            >
              {/* Placeholder image */}
              <div className="h-full w-full bg-gray-500 animate-pulse"></div>

              {/* Crown Icon */}
              <div className="absolute top-2 right-2 text-yellow-400 text-xl">
                <FaCrown />
              </div>

              {/* Product Name & Free Badge */}
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white text-sm flex justify-between items-center">
                <span className="font-semibold">{product.name}</span>
                <span className="bg-gray-700 px-2 py-1 text-xs rounded-md">
                  Free
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Products;
