'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Puddle', path: '/puddle' },
    { name: 'App store', path: '/store' },
    { name: 'Logistics', path: '/logistics' },
    { name: 'Fintech', path: '/' },
  ];

  return (
    <header className="w-full font-sarala fixed top-0 left-0 right-0 backdrop-blur-sm bg-[#100F0DB2] bg-opacity-70 z-50 px-8 py-4">
      <div className="max-w-[1300px] flex mx-auto items-center">
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Yoris Logo" width={100} height={60} />
        </div>
        <div className="hidden md:flex flex-grow z-50 justify-center ">
          <nav className="flex gap-x-7 py-2 px-8 bg-[#080604] rounded-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-bold ${pathname.startsWith(link.path) ? 'text-white' : 'text-[#C3AD60]'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <button 
          className="md:hidden text-white ml-auto" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} className="text-[#C3AD60]" /> : <Menu size={30} className="text-[#C3AD60]" />}
        </button>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full z-[100] bg-[#100F0DB2] backdrop-blur-md text-left py-5"
        >
          <ul className="flex flex-col gap-4 h-[100vh] px-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`font-bold ${pathname.startsWith(link.path) ? 'text-white' : 'text-[#C3AD60]'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
