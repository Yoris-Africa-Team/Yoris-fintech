"use client";
import React from "react";
import Header from "@/constant/Header";
import { Home, LineChart } from "lucide-react";
import { useRouter,usePathname } from "next/navigation";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  return (
    <div className="min-h-screen text-white p-8 relative">
      {/* Header (Fixed) */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Side Navigation (Fixed) */}
      <nav className="fixed top-[30%] left-0 bg-black py-7 px-4 rounded-xl z-50 flex flex-col gap-9">
        <Home
        
          className={`cursor-pointer ${pathname === "/" ? "text-[#C3AD60]" : "text-white"}`}
          onClick={() => router.push("/")}
        />
        <LineChart
          className={`cursor-pointer ${pathname === "/transaction-history" ? "text-[#C3AD60]" : "text-white"}`}
          onClick={() => router.push("/transaction-history")}
        />
      </nav>

      {/* Content (Takes full space but avoids overlap) */}
      <main className="max-w-[1300px] mx-auto pt-[40px]">{children}</main>
    </div>
  );
};

export default Layout;
