'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PaymentNotification = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="flex flex-col justify-center items-center gap-8 p-16 bg-[#0E0D0B] border-2 border-[#C3AD6033] rounded-lg shadow-lg w-[90%] max-w-md text-center">
        <Image 
          src="/assets/withdrawal-notification.png"
          alt="Payment Success Icon"
          width={150}
          height={150}
        />
        <h1 className="font-normal text-2xl md:text-3xl text-white">
          Thank you! We’ve received your payment
        </h1>
        <button 
          className="bg-gold text-sm px-8 py-3 hover:bg-hovergold outline-none font-semibold text-black text-center rounded-xl hover:bg-opacity-90 transition"
          onClick={() => router.push('/store')}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PaymentNotification;
