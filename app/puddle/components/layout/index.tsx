"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  RiHome5Line,
  RiSearch2Line,
  RiCloseLine,
} from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { VscEllipsis } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

const navItems = [
  { href: "/puddle", icon: RiHome5Line },
  { href: "/puddle/search", icon: RiSearch2Line },
  { href: "/puddle/notifications", icon: IoMdNotificationsOutline },
  { href: "/puddle/inbox", icon: LiaFacebookMessenger },
  { href: "/puddle/profile", icon: CiUser },
  { icon: VscEllipsis }, // No href for "More"
  { href: "/puddle/settings", icon: IoSettingsOutline },
];

const sidebarItems = [
  { label: "Switch to vendor profile", icon: "↔" },
  { label: "Become a verifier", icon: "📇" },
  { label: "Edit profile", icon: "👤" },
  { label: "Switch to light mode", icon: "🌞" },
  { label: "Settings", icon: "⚙" },
  { label: "Help", icon: "❓" },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex bg-[#080604] pt-[4.5rem] text-white min-h-screen relative">
      {/* Fixed Sidebar */}
      <aside className="fixed top-[25%] left-0 bg-black flex flex-col items-center py-4 px-1 gap-6 shadow-lg">
        <nav className="flex flex-col items-center gap-8 px-3">
          {navItems.map(({ href, icon: Icon }, index) =>
            href ? (
              <Link key={href} href={href} className="relative group">
                <button>
                  <Icon className="text-2xl h-6 w-6 text-[#C79B3B]" />
                </button>
              </Link>
            ) : (
              <button
                key={index}
                onClick={toggleSidebar}
                className="relative group"
              >
                <Icon className="text-2xl h-6 w-6 text-[#C79B3B]" />
              </button>
            )
          )}
        </nav>
      </aside>

      {/* Sidebar Overlay (click to close) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Animated Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-black z-50 shadow-lg flex flex-col justify-center"
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white"
        >
          <RiCloseLine className="text-2xl" />
        </button>

        <nav className="flex flex-col p-6 space-y-4">
          {sidebarItems.map(({ label, icon }) => (
            <button key={label} className="flex items-center gap-3 text-white">
              {icon} {label}
            </button>
          ))}
          <button className="mt-auto bg-gold text-white px-4 py-2">
            Log out
          </button>
        </nav>
      </motion.div>

      {/* Main Content */}
      <main className="ml-16 flex-1 bg-[#080604] flex flex-col pb-16 lg:pb-0">
        <div className="flex-1 p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
