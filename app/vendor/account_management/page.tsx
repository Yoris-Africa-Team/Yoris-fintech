'use client'
import { useState } from "react";
import Header from "@/constant/Header";

const managers = [
  {
    id: 1,
    name: "Burger King",
    logo: "/burger-king-logo.png",
    company: "Barifmart Inc. - Okata, Lagos",
    role: "Management - Post, Messaging, Order management",
  },
  {
    id: 2,
    name: "Amazon",
    logo: "/amazon-logo.png",
    company: "Barifmart Inc. - Okata, Lagos",
    role: "Management - AI",
  },
];

export default function BusinessManagers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <Header />
      {/* Main Content */}
      <div className="p-6 text-white bg-black max-w-5xl mx-auto pt-20">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl text-[#C3AD60]">Businesses</h1>
          <div
            className="text-xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </div>
        </header>

        <p className="text-lg">
          The accounts managers of <strong className="text-white">barifmart Inc.</strong> are listed below.
        </p>

        <div className="mt-4 text-[#C3AD60] cursor-pointer flex items-center">
          <span className="mr-2">➕</span> add new Account manager
        </div>

        <div className="mt-6 space-y-4">
          {managers.map((manager) => (
            <div key={manager.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={manager.logo} alt={manager.name} className="w-12 h-12 rounded-md" />
                <div>
                  <h2 className="font-bold">Brand name</h2>
                  <p className="text-sm text-gray-400">{manager.company}</p>
                  <p className="text-xs text-gray-500">{manager.role}</p>
                </div>
              </div>
              <div className="cursor-pointer text-gray-400 text-lg">⚙️</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setSidebarOpen(false)}>
          <div className="fixed top-0 right-0 w-64 bg-black text-white h-full shadow-lg p-6 flex flex-col">
            <button
              className="text-white text-xl self-end mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              ✖
            </button>
            <nav className="flex flex-col justify-center h-full space-y-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🔄</span> <span>Switch to user profile</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>🌞</span> <span>Switch to Light mode</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>⚙️</span> <span>Settings</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>❓</span> <span>Help</span>
              </a>
            </nav>
            <div className="mt-auto">
              <button className="w-full bg-red-600 text-white py-2 rounded flex items-center justify-center">
                🔴 Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
