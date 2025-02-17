'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sarala fixed top-0 left-0 right-0 bg-[#100F0DB2] bg-opacity-70 z-50 px-8 py-4">
      <div className="max-w-[1300px] flex mx-auto items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Yoris Logo" width={100} height={60} />
        </div>

        {/* Centered Desktop Navigation */}
        <div className="hidden md:flex flex-grow z-50 justify-center ">
          <nav className="flex gap-x-7 py-2 px-8 bg-[#080604] rounded-lg">
            <a href="#" className="text-[#C3AD60] font-bold">Puddle</a>
            <a href="#" className="text-[#C3AD60] font-bold">App store</a>
            <a href="#" className="text-[#C3AD60] font-bold">Logistics</a>
            <a href="#" className="text-white font-bold">Fintech</a>
          </nav>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white ml-auto" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} className="text-[#C3AD60]" /> : <Menu size={30} className="text-[#C3AD60]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full z-[100] bg-[#100F0DB2] backdrop-blur-md text-left py-5"
        >
          <ul className="flex flex-col gap-4 h-[100vh] px-8">
            <li><a href="#" className="text-[#C3AD60] font-bold">Puddle</a></li>
            <li><a href="#" className="text-[#C3AD60] font-bold">App store</a></li>
            <li><a href="#" className="text-[#C3AD60] font-bold">Logistics</a></li>
            <li><a href="#" className="text-white font-bold">Fintech</a></li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
