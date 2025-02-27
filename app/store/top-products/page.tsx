'use client'
// import { section } from "framer-motion/client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Header from "@/constant/Header";
import Layout from "../components/layout";
import TopProductsSection from "./components/main";
import Grocery from "../components/main/grocery";

const TopProducts = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Layout>
        <section>
          {/* Top Search Bar */}
          <header className="p-4  flex items-center justify-between">
            <button onClick={() => router.back()}>
            <MdKeyboardArrowLeft className="flex items-center justify-start text-gold h-8 w-8" />

            </button>
            <div className="flex flex-1 justify-center">
              <input
                type="text"
                placeholder="Search for your Products"
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
        </section>
        <TopProductsSection />
        <Grocery />
      </Layout>
    </>
  );
};

export default TopProducts;
