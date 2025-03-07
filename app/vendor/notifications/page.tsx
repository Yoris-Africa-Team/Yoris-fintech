"use client";

import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Header from "@/constant/Header";

const notifications = [
  {
    id: "00-12345678",
    name: "Pazival odison",
    status: "Pending",
    date: "17 FEB 2025 at 9:20 AM",
    amount: "₦456,000",
  },
  {
    id: "00-12345678",
    name: "Pazival odison",
    status: "Completed",
    date: "17 FEB 2025 at 9:20 AM",
    amount: "₦456,000",
  },
  {
    id: "00-12345678",
    name: "Pazival odison",
    status: "Pending",
    date: "17 FEB 2025 at 9:20 AM",
    amount: "₦456,000",
  },
  {
    id: "00-12345678",
    name: "Pazival odison",
    status: "Completed",
    date: "17 FEB 2025 at 9:20 AM",
    amount: "₦456,000",
  },
];

const NotificationList = () => {
  const [filter, setFilter] = useState("All");

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((notif) => notif.status === filter);

  return (
    <div>
        <Header />
        <div className="max-w-5xl mx-auto pt-20 bg-black text-white p-6">
      {/* Header */}
        <h2 className="text-[#C3AD60] text-center text-lg mb-4">Notification</h2>

        {/* Search Bar */}
        <div className="relative w-full mb-4">
            <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg pl-10"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-4">
            {["All", "Completed", "Pending"].map((tab) => (
            <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                filter === tab
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
            >
                {tab}
            </button>
            ))}
            <FaFilter className="text-gray-400 ml-auto cursor-pointer" />
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
            {filteredNotifications.map((notif, index) => (
            <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg border border-gray-800"
            >
                {/* Status Tag */}
                <span
                className={`px-2 py-1 text-xs font-bold rounded ${
                    notif.status === "Pending" ? "bg-yellow-500 text-black" : "bg-green-600 text-white"
                }`}
                >
                {notif.status}
                </span>
                
                {/* Notification Details */}
                <div className="text-sm mt-2">
                <p className="font-semibold">{notif.name}</p>
                <p className="text-gray-400 text-xs">ID: {notif.id}</p>
                <p className="text-gray-400 text-xs">Total amount</p>
                </div>
                
                {/* Footer */}
                <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span>🕒 {notif.date}</span>
                <span className="text-[#C3AD60] font-semibold">{notif.amount}</span>
                </div>
            </div>
            ))}
        </div>
        </div>
        </div>
        
  );
};

export default NotificationList;
