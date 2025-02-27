'use client'
import React from 'react'
import Image from 'next/image';

interface Transaction {
   id: string;
   name: string;
   amount: number;
   type: 'credit' | 'debit';
   time: string;
   avatar: string;
 }


const Transactions = () => {
   const transactions: Transaction[] = [
      {
        id: '1',
        name: 'Daniel Barrows',
        amount: 800,
        type: 'debit',
        time: '3:17 pm',
        avatar: '/api/placeholder/32/32'
      },
      {
        id: '2',
        name: 'Reggie Miller',
        amount: 600,
        type: 'credit',
        time: '3:15 pm',
        avatar: '/api/placeholder/32/32'
      },
      {
        id: '3',
        name: 'Walmart',
        amount: 500,
        type: 'debit',
        time: '3:10 pm',
        avatar: '/api/placeholder/32/32'
      }
    ];

  return (
   <div className="bg-[#100F0D] border-[#C3AD60] border flex-1 rounded-2xl p-6">
   <div className="flex justify-between items-center mb-6">
     <h2 className="text-xl">Transactions</h2>
     <button className="text-sm text-gray-400">see more...</button>
   </div>
   <div className="space-y-4">
     {transactions.map((transaction) => (
       <div
         key={transaction.id}
         className="flex items-center justify-between"
       >
         <div className="flex items-center gap-4">
           <Image
             src={transaction.avatar}
             alt={transaction.name}
             width={40}
             height={40}
             className="rounded-full"
           />
           <div>
             <p className="font-medium">{transaction.name}</p>
             <p className="text-sm text-gray-400">{transaction.time}</p>
           </div>
         </div>
         <span
           className={`${
             transaction.type === 'credit'
               ? 'text-green-500'
               : 'text-red-500'
           }`}
         >
           {transaction.type === 'credit' ? '+' : '-'}₦{transaction.amount}
         </span>
       </div>
     ))}
   </div>
 </div>
  )
}

export default Transactions