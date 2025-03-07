'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaStar, FaHeart, FaThLarge } from "react-icons/fa";

const navItems = [
  { href: "/store", label: "Shopping", icon: FaShoppingCart },
  { href: "/store/premium", label: "Premium", icon: FaStar },
  { href: "/store/for-you", label: "For You", icon: FaHeart },
  { href: "/store/category", label: "Category", icon: FaThLarge },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black text-white pt-[4.5rem]">
      
      
      <aside className="fixed lg:static bottom-0 w-full lg:w-auto bg-[#0E0E0E] bg-opacity-70 p-4 z-20 flex lg:flex-col justify-around lg:justify-start items-center gap-6">
        <nav className="flex lg:flex-col w-full lg:w-auto items-center justify-around lg:justify-start gap-4">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={`flex flex-col items-center p-3 rounded-lg transition-all ${pathname === href ? "text-[#C3AD60]" : "text-white"}`}>
              <Icon className="text-xl" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-[#090705] pb-16 lg:pb-0">
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
