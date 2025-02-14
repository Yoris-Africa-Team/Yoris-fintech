import React from "react";
import { IoIosArrowBack, } from "react-icons/io";
import { X } from "lucide-react";
import { LuArrowUpDown } from "react-icons/lu";
import AmountInput from "./send-money-components/amount-input";
import { useDashboard } from "../context/DashboardContext";

const SendMoney = () => {
const {setActiveComponent, setReplaceWithContacts} = useDashboard()

  return (
    <section className="bg-[#100F0D] flex flex-col justify-between gap-[70px] rounded-2xl border border-[#C3AD60] p-6 text-center w-full mx-auto max-w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <button className="text-white p-1 flex-shrink-0 rounded-full border border-white "
        onClick={() => {
          setActiveComponent('firstView')
          setReplaceWithContacts(false)
        }}
        >
        <X size={18} />
        </button>
        <div className=" text-white flex items-center flex-grow justify-center gap-2 font-semibold text-lg">
         <LuArrowUpDown className="text-[#C3AD60] "/>
         <h1>Send Money</h1>
         </div>
        
      </div>

    <AmountInput />

    </section>
  );
};

export default SendMoney;
