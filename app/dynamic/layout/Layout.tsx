"use client";
import React from "react";
import Header from "@/constant/Header";
import { Home, LineChart } from "lucide-react";
import { useRouter,usePathname } from "next/navigation";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  return (
    <div className=" text-white md:p-8 p-4">
      {/* Header (Fixed) */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Side Navigation (Fixed) */}
      <nav className="fixed md:top-1/2 md:left-4 md:-translate-y-1/2 md:w-auto md:h-auto bg-black bg-[#100F0DB2] bg-opacity-70 p-4 rounded-xl z-50 flex flex-row md:flex-col gap-6 bottom-0 left-0 w-full justify-around md:justify-start md:rounded-xl">
        <button 
          className={`p-3 rounded-lg transition ${
            pathname === "/" ? "bg-[#C3AD60] text-black" : "text-white"
          }`}
          onClick={() => router.push("/")}
        >
          <Home className="w-6 h-6" />
        </button>

        <button 
          className={`p-3 rounded-lg transition ${
            pathname === "/transaction-history" ? "bg-[#C3AD60] text-black" : "text-white"
          }`}
          onClick={() => router.push("/transaction-history")}
        >
          <LineChart className="w-6 h-6" />
        </button>
      </nav>



      {/* Content (Takes full space but avoids overlap) */}
      <main className="max-w-[1300px] mx-auto pt-[40px]">{children}</main>
    </div>
  );
};

export default Layout;
