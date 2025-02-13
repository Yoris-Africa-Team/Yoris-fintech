'use client'
import React, { useState, useRef, JSX } from 'react';
import Image from 'next/image';
import { Bell, Send } from 'lucide-react';
import Header from './constant/Header';

interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: 'credit' | 'debit';
  time: string;
  avatar: string;
}

interface ShortcutItem {
  id: string;
  name: string;
  icon: JSX.Element;
}

const Dashboard = () => {
 

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

  const shortcuts: ShortcutItem[] = [
    { id: '1', name: 'Utilities', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '2', name: 'Mobile Top-up', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '3', name: 'Events', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '4', name: 'Food', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '5', name: 'Movies', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '6', name: 'Cinema', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '7', name: 'Hotels', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '8', name: 'Procurement', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> },
    { id: '9', name: 'Car Insurance', icon: <div className="w-6 h-6 bg-[#C3AD60]" /> }
  ];

  

  return (
    <div
      className="min-h-screen bg-black text-white p-8 max-w-[1300px] mx-auto"
    >
      <Header />

      <div className="flex justify-between items-center mb-8 pt-14">
        <h1 className="text-xl">Good Morning, Username</h1>
        <div className="flex gap-4">
          <Bell className="w-6 h-6 text-gold-500" />
          <Send className="w-6 h-6 text-gold-500" />
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {[1, 2].map((card) => (
          <div
            key={card}
            className="p-6 min-h-72 flex flex-col justify-between rounded-2xl border border-[#C3AD60] bg-gradient-to-r from-[#2A1F01] via-[#9F863C] to-[#2E2203]"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">₦100,000.00</h2>
              <span className="text-sm">Active</span>
            </div>
            <p className="text-sm">User Name</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-6">
        {/* Shortcuts */}
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl mb-6">Shortcuts</h2>
          <div className="grid grid-cols-3 gap-6 mb-6">
            {shortcuts.slice(0, 3).map((shortcut) => (
              <div
                key={shortcut.id}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  {shortcut.icon}
                </div>
                <span className="text-sm">{shortcut.name}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-6">
            <button className="w-full py-3 bg-gold-500 rounded-lg">
              Top up/Withdraw
            </button>
            <button className="w-full py-3 border border-gold-500 rounded-lg">
              Send money to Yoris contact
            </button>
          </div>

          {/* Grid Icons */}
          <div className="grid grid-cols-4 gap-6">
            {shortcuts.slice(3).map((shortcut) => (
              <div
                key={shortcut.id}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  {shortcut.icon}
                </div>
                <span className="text-sm">{shortcut.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-zinc-900 rounded-2xl p-6">
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
      </div>
    </div>
  );
};

export default Dashboard;
