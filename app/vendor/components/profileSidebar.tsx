"use client";

import React from "react";
import Image from "next/image";
import { X, Home, Users, Repeat, Wallet, BarChart, Calendar, Settings, HelpCircle, LogOut, Bell,FileText, User } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const ProfileSidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg z-50`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-semibold"></h2>
          <X className="cursor-pointer w-6 h-6" onClick={() => setSidebarOpen(false)} />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center p-4">
          <Image src="/assets/slippers.png" alt="Profile Logo" width={50} height={50} className="rounded-lg" />
          <h3 className="mt-2 font-semibold">Barifmart Inc.</h3>
          <p className="text-gray-400 text-sm">@Barifmart_Inc</p>
          <p className="text-gray-500 text-xs mt-1">📍 Okota, Lagos</p>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-4 text-sm">
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Home className="w-5 h-5" /> All business
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Users className="w-5 h-5" /> Branches
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Repeat className="w-5 h-5" /> Switch account
          </li>
        </ul>

        <hr className="border-gray-700 mx-4" />

        <ul className="p-4 space-y-4 text-sm">
            <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
                <Bell className="w-5 h-5" /> Notifications
          </li> 
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Wallet className="w-5 h-5" /> Wallet
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <BarChart className="w-5 h-5" /> Statistics
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <FileText className="w-5 h-5" /> Order Purchase
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <User className="w-5 h-5" /> Account Manager
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Calendar className="w-5 h-5" /> Event
          </li>
        </ul>

        <hr className="border-gray-700 mx-4" />

        {/* Bottom Section */}
        <ul className="p-4 space-y-4 text-sm">
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Settings className="w-5 h-5" /> Settings
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <HelpCircle className="w-5 h-5" /> Help
          </li>
        </ul>

        {/* Logout Button */}
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded">
            <LogOut className="w-5 h-5" /> Log out
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />}
    </>
  );
};

export default ProfileSidebar;
