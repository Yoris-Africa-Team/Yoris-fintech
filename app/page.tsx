"use client";
import React from "react";
import { Bell, Send, Home, LineChart } from "lucide-react";
import { MdAddCard } from "react-icons/md";
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
import { useRouter } from "next/navigation";
import Layout from "./dynamic/layout/Layout";
import AddMomo from "./dynamic/account-info/addMomo";
import AddNewAccount from "./dynamic/account-info/newAccount";
import AccountInfo from "./dynamic/account-info/account-info";
import AddNewCard from "./dynamic/account-info/newCard";



const DashboardContent = () => {
  const { activeComponent, setActiveComponent,replaceWithContacts, setReplaceWithContacts } =
    useDashboard();
  const router = useRouter();

  const componentsMap = {
    firstView: <FirstView />,
    wallet: <WalletView />,
    topUp: <TopUp />,
    "top-passcode": <TopPasscode />,
    withdraw: <Withdraw />,
    "with-passcode": <WithdrawPasscode />,
    sendMoney: <SendMoney />,
    acctInfo: <AccountInfo />,
    addMomo: <AddMomo />,
    addNewCard: <AddNewCard />,
    addNewAcct: <AddNewAccount />,
  };
  return (
    <div className="flex flex-col justify-between md:gap-4 ">
      <div>
      <div className="flex justify-between items-center mb-8 pt-14">
        <h1 className="text-xl">Good Morning, Username</h1>
        <div className="flex gap-4">
          <Bell
            className="w-6 h-6 text-gold cursor-pointer"
            onClick={() => router.push("/notifications")}
          />

          <MdAddCard className="w-6 h-6 cursor-pointer text-gold" 
          onClick={() => setActiveComponent('acctInfo')}
          />
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1  mx-auto md:grid-cols-2 gap-6 mb-8">
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
      </div>

      {/* Dynamic Content Switching */}
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center h-screen">
        {/* Left Component (60%) */}
        <div className="w-full md:w-[55%]">
          {/* If 'sendMoney' is active, replace FirstView with SendMoney */}
          {componentsMap[activeComponent] || <FirstView />}
        </div>

        {/* Right Component (40%) */}
        <div className="w-full md:w-[45%]">
          {/* If 'sendMoney' is active, replace Transactions with Contacts */}
          {replaceWithContacts ? <Contacts /> : <Transactions />}
        </div>
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