'use client';
import React, { JSX, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   CircleDollarSign, Smartphone, PartyPopper, PlaySquare, Utensils, Film,
   Hotel, ShoppingCart, Car, Dumbbell, HeartPulse, Train, Ship, Plane,
   Banknote, Globe, Send, Upload
} from "lucide-react";
import { useDashboard } from '../context/DashboardContext';

interface ShortcutItem {
   id: string;
   name: string;
   icon: JSX.Element;
}

const FirstView = () => {
   const [showMore, setShowMore] = useState(false);
   const bottomRef = useRef<HTMLDivElement | null>(null); // Ref for scrolling
   const { setActiveComponent, replaceWithContacts, setReplaceWithContacts } = useDashboard(); // Use context


   useEffect(() => {
      if (showMore && bottomRef.current) {
         setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
         }, 500); // Wait for animation to complete before scrolling
      }
   }, [showMore]);

   const shortcuts: ShortcutItem[] = [
      { id: '1', name: 'Utilities', icon: <CircleDollarSign className="w-6 h-6 text-black" /> },
      { id: '2', name: 'Mobile Top-up', icon: <Smartphone className="w-6 h-6 text-black" /> },
      { id: '3', name: 'Events', icon: <PartyPopper className="w-6 h-6 text-black" /> },
      { id: '4', name: 'Food', icon: <Utensils className="w-6 h-6 text-black" /> },
      { id: '5', name: 'Mobile Top-up', icon: <Smartphone className="w-6 h-6 text-black" /> },
      { id: '6', name: 'Events', icon: <PartyPopper className="w-6 h-6 text-black" /> },
      { id: '7', name: 'Movies', icon: <PlaySquare className="w-6 h-6 text-black" /> },
      { id: '8', name: 'Cinemas', icon: <Film className="w-6 h-6 text-black" /> },
      { id: '9', name: 'Hotels', icon: <Hotel className="w-6 h-6 text-black" /> },
      { id: '10', name: 'Procurement', icon: <ShoppingCart className="w-6 h-6 text-black" /> },
      { id: '11', name: 'Car Insurance', icon: <Car className="w-6 h-6 text-black" /> },
      { id: '12', name: 'Gyms & Spas', icon: <Dumbbell className="w-6 h-6 text-black" /> },
      { id: '13', name: 'Health', icon: <HeartPulse className="w-6 h-6 text-black" /> },
      { id: '14', name: 'Trains', icon: <Train className="w-6 h-6 text-black" /> },
      { id: '15', name: 'Ferries', icon: <Ship className="w-6 h-6 text-black" /> },
      { id: '16', name: 'Flights', icon: <Plane className="w-6 h-6 text-black" /> },
      { id: '17', name: 'Invest', icon: <Banknote className="w-6 h-6 text-black" /> },
      { id: '18', name: 'Ferries', icon: <Ship className="w-6 h-6 text-black" /> },
      { id: '19', name: 'Trips', icon: <Globe className="w-6 h-6 text-black" /> },
   ];

   return (
      <div className="bg-[#100F0D] border border-[#C3AD60] rounded-2xl p-6">
         <h2 className="text-xl mb-6">Shortcuts</h2>
         
         <div className="flex gap-7 md:gap-10 justify-evenly p-5 md:items-start mb-9">
            {shortcuts.slice(0, 3).map((shortcut) => (
               <div key={shortcut.id} className="flex flex-col  items-center gap-2">
                  <div className="w-14 h-14 bg-[#C3AD60] rounded-lg p-3 flex items-center justify-center">
                     {shortcut.icon}
                  </div>
                  <span className="text-sm text-wrap max-w-14 text-center text-white">{shortcut.name}</span>
               </div>
            ))}
         </div>

         <div className="space-y-4 mb-10">
            <button
               className="w-full py-3 bg-[#C3AD60] text-black flex items-center justify-center gap-2 rounded-lg"
               onClick={() => setActiveComponent('wallet')} // Switch to TopUp
            >
               <Upload className="w-5 h-5" /> Top up/Withdraw
            </button>
            <button className="w-full py-3 border border-[#C3AD60] text-[#C3AD60] flex items-center justify-center gap-2 rounded-lg"
              onClick={() => {
               setActiveComponent('sendMoney'); 
               setReplaceWithContacts(true);
             }}
            >
               <Send className="w-5 h-5" /> Send money to Yoris contact
            </button>
         </div>

         {/* Icons with smooth transition */}
         <motion.div
            className="grid grid-cols-3 md:grid-cols-4 p-4 gap-12 overflow-hidden"
            initial={{ height: 180, opacity: 0.8 }}
            animate={{ height: showMore ? "auto" : 180, opacity: showMore ? 1 : 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
         >
            {(showMore ? shortcuts.slice(3) : shortcuts.slice(3, 11)).map((shortcut, index) => (
               <div key={shortcut.id} className="flex flex-col items-center gap-2"
                   // Attach ref to the last item
               >
                  <div 
                  
                  className="w-12 h-12 bg-[#C3AD60] rounded-lg flex items-center justify-center">
                     {shortcut.icon}
                  </div>
                  <span className="text-sm text-center text-white">{shortcut.name}</span>
               </div>
            ))}
         </motion.div>

         {/* Toggle button for See More / Close */}
         <div className="flex justify-end mt-4"
         ref={bottomRef}
         >
            <button onClick={() => setShowMore(!showMore)} className="text-[#C3AD60] text-sm underline">
               {showMore ? 'Close' : 'See More'}
            </button>
         </div>
      </div>
   );
}

export default FirstView;
