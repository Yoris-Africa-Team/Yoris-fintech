"use client";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define the interface for a cart item
interface CartItem {
  id: number;
  name: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
  active: boolean;
}

const CartSection = () => {
   const router = useRouter();

  // Sample cart items
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "SJDCSOIAOXOCAOHO",
      color: "blue",
      quantity: 3,
      price: 2000,
      image: "/assets/slippers.png",
      active: true,
    },
    {
      id: 2,
      name: "SJDCSOIAOXOCAOHO",
      color: "blue",
      quantity: 2,
      price: 2500,
      image: "/assets/slippers.png",
      active: true,
    },
    {
      id: 3,
      name: "SJDCSOIAOXOCAOHO",
      color: "blue",
      quantity: 1,
      price: 1500,
      image: "/assets/slippers.png",
      active: true,
    },
    {
      id: 4,
      name: "SJDCSOIAOXOCAOHO",
      color: "blue",
      quantity: 5,
      price: 3000,
      image: "/assets/slippers.png",
      active: true,
    },
    {
      id: 5,
      name: "SJDCSOIAOXOCAOHO",
      color: "blue",
      quantity: 2,
      price: 1800,
      image: "/assets/slippers.png",
      active: true,
    },
    {
      id: 6,
      name: "SJDCSOIAOXOCAOHO",
      color: "blue",
      quantity: 4,
      price: 2200,
      image: "/assets/slippers.png",
      active: true,
    },
  ]);

  // Handle increment and decrement
  const updateQuantity = (id: number, type: "inc" | "dec") => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Checkout Section
  const shippingCost = 120; // Fixed shipping cost

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotal = () => {
    return getSubtotal() + shippingCost;
  };

  return (
    <section className="max-w-[95%] mx-auto mt-8">
      {/* Cart header */}
      <button className="flex gap-2 items-center" onClick={()=>router.back()}>
        <MdKeyboardArrowLeft className="h-8 w-8 cursor-pointer" />
        <h1 className="font-semibold text-2xl md:text-3xl">Cart</h1>
      </button>

      <main className="flex flex-col w-full gap-8  lg:flex-row ">
        {/* Cart Section */}
        <div className=" mt-3 w-full max-w-full md:max-w-[70%] rounded-lg border-[0.5px] border-[#9A8340] overflow-hidden">
          <div className="w-full flex justify-between rounded-t-lg bg-[#9A8340] text-white items-center px-6 py-4">
            <h1 className="font-semibold text-xl md:text-2xl">Cart</h1>
            <Image
              src="/assets/location.svg"
              alt="location"
              height={40}
              width={40}
            />
          </div>

          {/* Cart items */}
          <div className="bg-[#0E0D0B] w-full flex flex-col pb-8 rounded-b-lg">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 border-b border-[#9A8340] text-white"
              >
               <div className="flex flex-col md:flex-row  items-center gap-4">
                <div className="flex items-center  gap-4">
                     {/* Checkbox */}
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-transparent accent-yellow-500"
                />

                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                </div>

                {/* Product Details */}
                <div className="">
                  <h2 className="font-medium text-base">{item.name}</h2>
                  <p className="text-gray-400 text-sm">Color: {item.color}</p>
                  <p className="text-yellow-500 text-base font-normal">
                    ₦{item.price.toLocaleString()}
                  </p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQuantity(item.id, "dec")}
                      className="p-1 bg-gold rounded-lg"
                    >
                      <AiOutlineMinus className="text-black font-bold" />
                    </button>
                    <span className="px-3 py-1 bg-inherit rounded-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, "inc")}
                      className="p-1 bg-gold rounded-lg"
                    >
                      <AiOutlinePlus className="text-black font-bold" />
                    </button>
                  </div>
                </div>
               </div>

                {/* Delete & Active status */}
                <div className="flex flex-row md:flex-col justify-center items-center md:items-end gap-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white"
                  >
                    <FaTrash className="text-lg" />
                  </button>
                  <span className="flex items-center text-white">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>{" "}
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Section */}
        <div className="max-w-full mx-auto md:max-w-[30%] w-full ">
          <div className="w-full  bg-[#0E0D0B] space-y-8 text-white rounded-lg  p-8 mt-3">
            <h2 className="text-lg font-semibold text-[#E6D4A4]">Summary</h2>

            {/* Subtotal */}
            <div className="flex justify-between  text-sm">
              <span className="text-gray-400">Sub Total</span>
              <span>₦{getSubtotal().toLocaleString()}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between  text-sm">
              <span className="text-gray-400">Shipping:</span>
              <span>₦{shippingCost.toLocaleString()}</span>
            </div>

            {/* Date */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Date:</span>
              <span>01, Jan, 2025</span>
            </div>

            {/* Total */}
            <div className=" p-3 bg-[#231F11] rounded-lg flex justify-between items-center">
              <span className="text-sm font-medium">Total :</span>
              <span className="text-gold font-semibold text-base md:text-lg">
                ₦{getTotal().toLocaleString()}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="mt-4 w-full hover:bg-[#806d2a] bg-gold text-black py-2 rounded-xl text-lg font-medium"
            onClick={() => router.push('/store/checkout')}
            >
              Check Out
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CartSection;
