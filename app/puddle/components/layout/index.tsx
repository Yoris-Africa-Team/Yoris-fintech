'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookMessenger } from "react-icons/fa6";
import { RiHome5Line, RiSearch2Line } from "react-icons/ri";
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
  { href: "/puddle/more", icon: VscEllipsis },
  { href: "/puddle/settings", icon: IoSettingsOutline },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex bg-[#080604] pt-[4.5rem] text-white min-h-screen">
      {/* Fixed Sidebar */}
      <aside className="fixed top-[25%] rounded-xl left-0  bg-black flex flex-col items-center py-4 px-1 gap-6 shadow-lg">
        <nav className="flex flex-col items-center gap-4">
          {navItems.map(({ href, icon: Icon }) => (
            <Link key={href} href={href} className="relative group">
              <div
                className={`p-3 rounded-xl transition-all ${
                  pathname === href
                    ? "" // Highlight selected
                    : ""
                }`}
              >
                <Icon className="text-2xl  text-[#C79B3B]" />
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-16 flex-1 bg-[#080604] flex flex-col pb-16 lg:pb-0">
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
