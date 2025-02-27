'use client'
import React from 'react';
import {  Wallet, Banknote } from 'lucide-react';
import { IoIosAddCircleOutline,IoIosArrowBack } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useDashboard } from '../context/DashboardContext';


const WalletView = () => {
     const { setActiveComponent } = useDashboard();
   
  return (
    <section className="bg-[#100F0D] flex flex-col justify-between gap-16  rounded-2xl border border-[#C3AD60] p-6 text-center w-full  mx-auto">
      
      {/* Header with Back Icon */}
      <div className="flex justify-between items-center ">
        <IoIosArrowBack className="text-[#C3AD60] cursor-pointer " 
         onClick={() => setActiveComponent('firstView')}       
        />
        <h2 className="text-lg text-white font-medium">Yoris Wallet</h2>
        <Wallet className="text-[#C3AD60]" />
      </div>

     <div className='flex flex-col items-center gap-10 my-[60px] '>
       {/* Wallet Balance */}
       <div className="text-center">
        
        <h1 className="text-white text-3xl font-bold">₦100,892.<span className="text-lg">00</span></h1>
        <p className="text-gray-400 text-sm mt-2">Wallet Balance</p>
      </div>

      {/* Top Up Button */}
      <button className="  items-center justify-center py-2 px-7 text-gold hover:text-black' cursor-pointer hover:bg-[#C3AD60] hover:text-black  border-[#C3AD60] border  flex gap-2  rounded-full font-medium"
        onClick={() => setActiveComponent('topUp')}
      >
        <IoIosAddCircleOutline className=' h-6 w-6 '/>
        <span className=''>Top up</span>
      </button>

      {/* Action Buttons */}
      <div className="flex justify-center gap-8  text-[#C3AD60]">
        <div className="flex flex-col items-center cursor-pointer">
          <MdOutlineAccountCircle className="w-8 h-8 " />
          <p className="text-sm mt-2">Account</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer"
        onClick={() => setActiveComponent('withdraw')}
        >
          <Banknote className="w-8 h-8" />
          <p className="text-sm mt-2">Withdraw</p>
        </div>
      </div>
     </div>

    </section>
  );
}

export default WalletView;
