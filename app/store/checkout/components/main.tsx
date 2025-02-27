'use client';
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import PaymentNotification from "./payment-notification";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const CheckoutSection = () => {
  const router = useRouter();
  const [showPaymentNotification, setShowPaymentNotification] = useState(false);

  return (
    <section className="relative max-w-full my-auto mx-auto text-white">
      {showPaymentNotification && <PaymentNotification />}

      <div className={`py-10 w-full mb-10 border-b-[0.1px] border-b-[#38383866] ${showPaymentNotification ? "blur-md" : ""}`}></div>
      
      {/* Header */}
      <div className={`flex gap-3 ml-8 items-center mb-12 ${showPaymentNotification ? "blur-md" : ""}`}>
        <button className="p-1 border border-white rounded-lg" onClick={() => router.push("/store/cart")}>
          <MdKeyboardArrowLeft className="h-8 w-8 cursor-pointer" />
        </button>
        <h1 className="font-semibold text-2xl md:text-3xl">Order Confirmation</h1>
      </div>

      <main className={`flex max-w-[85%] mx-auto flex-col lg:flex-row gap-6 ${showPaymentNotification ? "blur-md" : ""}`}>
        <div className="flex flex-col gap-4 w-full max-w-full md:max-w-[70%]">
          {/* Delivery Address Section */}
          <div className="w-full bg-[#262119] relative flex gap-2 items-start border-2 border-[#C3AD6033] text-white py-8 px-4 rounded-lg">
            <MdOutlineArrowRight className="absolute right-4 top-4 text-white h-8 w-8 cursor-pointer" 
              onClick={() => router.push('/store/checkout/location')} 
            />
            <CiLocationOn className="text-gold h-6 w-6" />  
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">Esther Howard</h2>
              <p className="text-sm text-gray-400">(603) 555-0123</p>
              <p className="text-sm text-gray-400">
                4517 Washington Ave, Manchester, Kentucky, USA, 39495
              </p>
            </div>
          </div>

          {/* Product List */}
          <div className="w-full mt-6 bg-[#0E0D0B] border-2 border-[#C3AD6033] p-8 rounded-lg">
            <div className="flex items-center gap-4">
              <Image src="/assets/slippers.png" alt="Product" width={100} height={100} className="rounded-lg" />
              <div className="flex-1">
                <h2 className="font-medium text-base">Product Name</h2>
                <p className="text-yellow-500 font-semibold">₦999.99</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="px-3 py-1 bg-gold bg-opacity-40 text-gold font-bold rounded-lg">-</button>
                  <span className="text-lg">3</span>
                  <button className="px-3 py-1 bg-gold bg-opacity-40 text-gold font-bold rounded-lg">+</button>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Estimated delivery on <span className="text-gold">Jan 17</span></p>
          </div>
        </div>

        {/* Summary Section */}
        <div className={`w-full md:max-w-[30%] border-2 border-[#C3AD6033] flex flex-col gap-6 p-6 bg-[#0E0D0B] rounded-lg ${showPaymentNotification ? "blur-md" : ""}`}>
          <h2 className="text-lg font-semibold text-[#E6D4A4] mb-4">Summary</h2>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Total Delivery Fee:</span>
            <span>₦3,500</span>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>VAT (Tax):</span>
            <span>₦120</span>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Date:</span>
            <span>01, Jan, 2025</span>
          </div>
          <div className="p-3 bg-[#231F11] rounded-lg flex justify-between items-center">
            <span className="text-sm font-medium">Total:</span>
            <span className="text-gold font-semibold text-base md:text-lg">₦10,000</span>
          </div>
          <button 
            className="mt-4 w-full bg-gold text-[#272313] py-2 rounded-xl text-base font-semibold hover:bg-hovergold  "
            onClick={() => setShowPaymentNotification(true)}
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </main>
    </section>
  );
};

export default CheckoutSection;
