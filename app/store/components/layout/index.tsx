import React from "react";
import { FaShoppingCart, FaStar, FaHeart, FaThLarge } from "react-icons/fa";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="flex h-screen bg-black text-white pt-[4.5rem]">
        {/* Sidebar */}
        <aside className="fixed top-[80px] left-4 w-20 bg-black bg-opacity-70 p-4 rounded-xl z-50 flex flex-col gap-6">
          <nav className="flex flex-col items-center gap-4">
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
  
        {/* Main Content (Added left padding) */}
        <main className="flex-1 flex flex-col pl-24"> 
          {/* Top Search Bar */}
          <header className="p-4  flex justify-between items-center">
            <div></div>
            <input
              type="text"
              placeholder="Search Product, Brand, Grocery and more"
              className=" ring-2 ring-yellow-500 bg-transparent focus:bg-transparent text-white p-2 rounded w-full max-w-xl"
            />
            <button className="ml-4 text-yellow-500 text-2xl">
              <FaShoppingCart />
            </button>
          </header>
  
          {/* Children Content */}
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </main>
      </div>
    );
  };
  
export default Layout;
