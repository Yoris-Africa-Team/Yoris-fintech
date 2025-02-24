"use client";
import React from "react";
import { Bell, Send, Home, LineChart } from "lucide-react";
import { MdAddCard } from "react-icons/md";


import TopUp from "../dynamic/top-up";
import { DashboardProvider, useDashboard } from "@/(fintech)/context/DashboardContext";


import { useRouter } from "next/navigation";

import TransactionsDisplay from "./transactions-display";
import TransactionDetails from "./transaction-details";


const TransactionContent = () => {
  
   
  const router = useRouter();




  return (
   <>
   <div className="flex justify-between items-center mb-8 pt-14">
     <h1 className="text-xl">Good Morning, Username</h1>
     <div className="flex gap-4">
       <Bell
         className="w-6 h-6 text-gold cursor-pointer"
         onClick={() => router.push("/notifications")}
       />

       <MdAddCard className="w-6 h-6 cursor-pointer text-gold" />
     </div>
   </div>

   {/* Balance Cards */}
   <div className="overflow-x-auto flex gap-6 mb-8 md:grid md:grid-cols-2 md:overflow-visible">
      {[1, 2].map((card) => (
        <div
          key={card}
          className="p-6 min-w-[90%] md:w-full min-h-72 flex flex-col justify-between rounded-2xl border border-[#C3AD60] bg-gradient-to-r from-[#2A1F01] via-[#9F863C] to-[#2E2203]"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">₦100,000.00</h2>
            <span className="text-sm">Active</span>
          </div>
          <p className="text-sm">User Name</p>
        </div>
      ))}
    </div>

   {/* Dynamic Content Switching */}
   <div className="flex flex-col md:flex-row gap-6 items-start  justify-center">
     {/* Left Component (60%) */}
     <div className="w-full md:w-[55%]">
       <TransactionsDisplay/>
     </div>

     {/* Right Component (40%) */}
     <div className="w-full md:w-[45%] md:block hidden">
      <TransactionDetails/>
     </div>
   </div>
 </>
  )
}

const TransactionHistory = () => (
  <DashboardProvider>
      <TransactionContent />
  </DashboardProvider>
);



export default TransactionHistory