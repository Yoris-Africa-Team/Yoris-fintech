import React from "react";
import { Home} from "lucide-react";
import { useDashboard } from "@/(fintech)/context/DashboardContext";
import { useRouter } from "next/navigation";
import { CgSortAz } from "react-icons/cg";


// Define the Transaction interface
interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: "credit" | "debit";
  time: string;
  avatar: string;
  date: string;
}

// Sample transactions data
const transactions: Transaction[] = [
  {
    id: "1",
    name: "Daniel Barrows",
    time: "8:27 pm",
    amount: 800,
    type: "debit",
    avatar: "/images/profile1.jpg",
    date: "Today",
  },
  {
    id: "2",
    name: "Reggie Miller",
    time: "3:17 pm",
    amount: 600,
    type: "credit",
    avatar: "/images/profile2.jpg",
    date: "Today",
  },
  {
    id: "3",
    name: "Walmart",
    time: "6:00 am",
    amount: 800,
    type: "debit",
    avatar: "/images/walmart-logo.png",
    date: "Today",
  },
  {
    id: "4",
    name: "Daniel Barrows",
    time: "8:27 pm",
    amount: 800,
    type: "debit",
    avatar: "/images/profile1.jpg",
    date: "Sunday, 18 Dec",
  },
];

const TransactionsDisplay = () => {
   const router = useRouter()   

  return (
    <div className="w-full mx-auto  p-6 border border-gold rounded-xl bg-[#100F0D] md:mt-0  text-white">
      {/* Header */}
      <div className=" my-7 pl-3">
         <Home className="
         text-white cursor-pointer h-6 w-6 md:h-8 md:w-8"
         onClick={() => router.push('/')} />
      </div>
      <div className="flex justify-between items-center mb-6">
        <button className="bg-gold px-4 text-xs py-2 text-black rounded">All Transactions</button>
        <span className="rounded-md bg-gold p-1">
        <CgSortAz className="text-black cursor-pointer h-6 w-6 md:h-8 md:w-8"/>
        </span>
      </div>

      {/* Transactions List */}
      {["Today", "Sunday, 18 Dec"].map((date) => (
        <div key={date} className="mb-6">
          <h2 className="text-center text-gray-400 text-sm mb-3">{date}</h2>
          {transactions
            .filter((tx) => tx.date === date)
            .map((tx) => (
              <div key={tx.id} className="flex justify-between items-center py-3 border-b-2 border-[#2A1F01]">
                {/* Profile or Logo */}
                <div className="flex items-center gap-3">
                  <img src={tx.avatar} alt={tx.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">{tx.name}</p>
                    <p className="text-xs text-gray-400 ">{tx.time}</p>
                  </div>
                </div>

                {/* Amount */}
                <p className={tx.type === "debit" ? "text-red-500 font-bold text-xs" : "text-green-500 font-bold text-xs"}>
                  {tx.type === "debit" ? `-₦${tx.amount}.00` : `₦${tx.amount}.00`}
                </p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TransactionsDisplay;
