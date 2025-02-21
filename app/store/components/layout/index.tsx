'use client'
import React from "react";
import { FaShoppingCart, FaStar, FaHeart, FaThLarge } from "react-icons/fa";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black text-white pt-[4.5rem]">
      
      {/* Sidebar: Vertical on large screens, horizontal on small screens */}
      <aside className="fixed lg:static bottom-0 w-full lg:w-auto bg-[#0E0E0E] bg-opacity-70 p-4 z-20 flex lg:flex-col justify-around lg:justify-start items-center gap-6">
        <nav className="flex lg:flex-col w-full lg:w-auto items-center justify-around lg:justify-start gap-4">
          <button className="flex flex-col items-center text-white p-3 rounded-lg">
            <FaShoppingCart className="text-xl" />
            <span className="text-xs mt-1">Shopping</span>
          </button>
          <button className="flex flex-col items-center text-white p-3 rounded-lg">
            <FaStar className="text-xl" />
            <span className="text-xs mt-1">Premium</span>
          </button>
          <button className="flex flex-col items-center text-white p-3 rounded-lg">
            <FaHeart className="text-xl" />
            <span className="text-xs mt-1">For You</span>
          </button>
          <button className="flex flex-col items-center text-white p-3 rounded-lg">
            <FaThLarge className="text-xl" />
            <span className="text-xs mt-1">Category</span>
          </button>
        </nav>
      </aside>

      {/* Main Content: Removes left padding on small screens */}
      <main className="flex-1 flex flex-col bg-[#090705] lg:pl-8 pb-16 lg:pb-0">
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
