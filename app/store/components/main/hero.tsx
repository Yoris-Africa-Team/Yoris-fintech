"use client";
import React from "react";
import Layout from "../layout";
import Products from "./products";
import TopSellers from "./top-sellers";
import Grocery from "./grocery";
import Games from "./games";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <Layout>
      {/* Top Search Bar */}
      <header className="p-4  flex items-center justify-between">
        <div className="flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search Product, Brand, Grocery and more"
            className="ring-2 ring-yellow-500 bg-transparent focus:bg-transparent text-white p-2 rounded w-full max-w-xl"
          />
        </div>
        <button
          className="ml-4 flex-shrink-0 text-yellow-500 text-2xl"
          onClick={() => router.push("/store/cart")}
        >
          <FaShoppingCart />
        </button>
      </header>

      <div className="p-4 w-full max-w-full overflow-x-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-1">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-48 bg-gray-700 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>

        {/* Indicator boxes */}
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-500 rounded-full"></div>
          ))}
        </div>
      </div>
      <Products />
      <TopSellers />
      <Grocery />
      <Games />
    </Layout>
  );
};

export default Hero;
