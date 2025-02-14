"use client";
import React from "react";
import { Bell, Send, Home, LineChart } from "lucide-react";
import Header from "./constant/Header";
import Transactions from "./dynamic/transactions";
import FirstView from "./dynamic/first-view";
import WalletView from "./dynamic/wallet";
import TopUp from "./dynamic/top-up";
import { DashboardProvider, useDashboard } from "./context/DashboardContext";
import { div } from "framer-motion/client";
import TopPasscode from "./dynamic/topup-passcode";
import Withdraw from "./dynamic/withdraw";
import WithdrawPasscode from "./dynamic/withdraw-passcode";
import SendMoney from "./dynamic/send-money";
import Contacts from "./dynamic/contacts";

const DashboardContent = () => {
  const { activeComponent, replaceWithContacts, setReplaceWithContacts } = useDashboard();

  const componentsMap = {
    'firstView': <FirstView />,
    'wallet': <WalletView />,
    'topUp': <TopUp />,
    'top-passcode': <TopPasscode />,
    'withdraw': <Withdraw />,
    'with-passcode': <WithdrawPasscode />,
    'sendMoney': <SendMoney />
  };
  return (
    <div className="min-h-screen text-white p-8 max-w-[1300px] mx-auto">
      <Header />

      <div className="flex justify-between items-center mb-8 pt-14">
        <h1 className="text-xl">Good Morning, Username</h1>
        <div className="flex gap-4">
          <Bell className="w-6 h-6 text-gold" />
          <Send className="w-6 h-6 text-gold" />
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[1, 2].map((card) => (
          <div
            key={card}
            className="p-6 min-h-72 flex flex-col justify-between rounded-2xl border border-[#C3AD60] bg-gradient-to-r from-[#2A1F01] via-[#9F863C] to-[#2E2203]"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">₦100,000.00</h2>
              <span className="text-sm">Active</span>
            </div>
            <p className="text-sm">User Name</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 rounded-xl z-50 bg-black py-5 px-4 fixed top-[30%] left-0">
        <Home className="text-[#C3AD60]" />
        <LineChart className="text-white" />
      </div>

      {/* Dynamic Content Switching */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* If 'sendMoney' is active, replace FirstView with SendMoney */}
         {componentsMap[activeComponent] || <FirstView />}
        {/* If 'sendMoney' is active, replace Transactions with Contacts */}
        {replaceWithContacts ? <Contacts /> : <Transactions />}
      </div>
    </div>
  );
};

// Wrap DashboardContent with DashboardProvider
const Dashboard = () => (
  <DashboardProvider>
    <DashboardContent />
  </DashboardProvider>
);

export default Dashboard;
