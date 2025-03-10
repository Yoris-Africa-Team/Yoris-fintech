'use client'
import React, { useState } from "react";
import Header from "@/constant/Header";
import { div } from "framer-motion/client";

const orders = [
  { id: "OD-123456789", name: "Pazival odison", status: "Pending", amount: "₦920,000", color: "bg-orange-400" },
  { id: "OD-123456789", name: "Pazival odison", status: "Completed", amount: "₦920,000", color: "bg-green-400" },
  { id: "OD-123456789", name: "Pazival odison", status: "Completed", amount: "₦920,000", color: "bg-green-400" },
];

const OrderPurchase = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div>
        <Header />
        <div className="bg-black text-[#C3AD60] pt-20 min-h-screen max-w-5xl mx-auto">
        <h1 className="text-center text-lg font-semibold mb-4">Order purchase</h1>

        {/* Tabs */}
        <div className="flex bg-gray-800 rounded-lg overflow-hidden">
            {["All", "Pazival odison", "Completed"].map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-center ${
                activeTab === tab ? "text-[#C3AD60] border-b-2 border-[#C3AD60]" : "text-gray-500"
                }`}
            >
                {tab}
            </button>
            ))}
        </div>

        {/* Search */}
        <input
            type="text"
            placeholder="Search"
            className="w-full mt-4 p-2 bg-gray-900 text-white rounded-lg border border-gray-700"
        />

        {/* Orders List */}
        <div className="mt-4 space-y-4">
            {orders
            .filter((order) => activeTab === "All" || order.status === activeTab)
            .map((order, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg text-white">
                <p className="font-bold">{order.status}</p>
                <p className="text-gray-400">{order.name}</p>
                <p className="text-gray-500 text-sm">ID: {order.id}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-semibold">{order.amount}</span>
                    <span className={`w-3 h-3 rounded-full ${order.color}`}></span>
                </div>
                </div>
            ))}
        </div>
        </div>
    </div>
    
  );
};

export default OrderPurchase;
