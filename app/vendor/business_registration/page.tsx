'use client'
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "@/constant/Header";
import { Camera } from "lucide-react";

export default function BusinessRegistration() {
  const [phone, setPhone] = useState("");
  const [steps, setSteps] = useState(1);

  return (
    <div>
    <Header />
    <div className="min-h-screen pt-20 bg-black text-white  items-center p-6">
      <div className="max-w-2xl mx-auto  w-full  p-6 rounded-lg shadow-lg">
        {steps !=3 &&(
            <>
                <h1 className=" text-[#C3AD60] text-xl font-semibold mb-4">
                Business Registration
                </h1>
                <p className="text-sm text-gray-400 mb-6 ">
                Tell us about your business. Note that all information cannot be edited until after business verification.
                </p>
            </>
        )}
        

        {/* Business Name */}
        {steps === 1 &&(
            <>
            <input
          type="text"
          placeholder="Business name"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
        />

        {/* Business Type */}
        <select className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4">
          <option>Business type</option>
          <option>Retail</option>
          <option>Wholesale</option>
          <option>Service Provider</option>
        </select>

        {/* Business Category */}
        <select className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4">
          <option>Business category</option>
          <option>Food & Beverage</option>
          <option>Electronics</option>
          <option>Health & Wellness</option>
        </select>

        {/* Phone Input with Flag */}
        <PhoneInput
          country={"ng"} // Default to Nigeria
          value={phone}
          onChange={setPhone}
          inputClass="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none"
          buttonClass="bg-gray-800"
          dropdownClass="bg-gray-800"
        />

        {/* Zip/Postal Code */}
        <input
          type="text"
          placeholder="Zip/Postal Code"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mt-4"
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mt-4 h-24"
        ></textarea>

        {/* Business Address */}
        <h2 className="text-[#C3AD60] text-lg mt-6 mb-3">Business Address</h2>

        <input
          type="text"
          placeholder="Street address, P.O. etc."
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
        />

        {/* Country */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl">🇳🇬</span>
          <span className="text-white">Nigeria</span>
        </div>

        {/* State */}
        <select className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4">
          <option>State</option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Port Harcourt</option>
        </select>

        {/* District */}
        <select className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4">
          <option>District</option>
          <option>Victoria Island</option>
          <option>Ikeja</option>
          <option>Surulere</option>
        </select>

        {/* Nearest Landmark */}
        <input
          type="text"
          placeholder="Nearest Landmark"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
        />

        {/* Zip/Postal Code */}
        <input
          type="text"
          placeholder="Zip/Postal Code"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
        />

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="w-1/2 py-3 border border-[#C3AD60] text-[#C3AD60] rounded hover:bg-[#C3AD60] hover:text-black transition">
            CLEAR
          </button>
          <button onClick={()=>setSteps(2)} className="w-1/2 py-3 bg-[#C3AD60] text-black rounded hover:bg-[#C3AD60] transition">
            SUBMIT FOR VERIFICATION
          </button>
        </div>
            </>
        )}
        {steps === 2 &&(
            <>
                 <input
                type="text"
                placeholder="BVN"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
                />

                <select  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4">
                <option>National ID</option>
                <option>Intl Passport</option>
                <option>Driver's Liscense</option>
                </select>

                <input
                type="text"
                placeholder="ID NUMBER"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
                />
                <div className=" flex gap-x-2 py-4">
                    <input type="checkbox" checked className="accent-red-500" />
                    <p>This business is a registered business</p>
                </div>

                <input
                type="text"
                placeholder="Business Registration Type CAC,RC,etc"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
                />

                <input
                type="text"
                placeholder="Registration Number"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C3AD60] mb-4"
                />

            <div className="flex space-x-4">
          <button className="w-1/2 py-3 border border-[#C3AD60] text-[#C3AD60] rounded hover:bg-[#C3AD60] hover:text-black transition">
            CLEAR
          </button>
          <button onClick={()=>setSteps(3)} className="w-1/2 py-3 bg-[#C3AD60] text-black rounded hover:bg-[#C3AD60] transition">
            SUBMIT FOR VERIFICATION
          </button>
        </div>

            </>
        )}
        {steps === 3 &&(
            <>
            <div className=" bg-black text-white p-6">
      <div className="max-w-lg w-full p-6">
        {/* Header */}
        <h2 className=" text-lg text-[#C3AD60] mb-6">Add Photo</h2>

        {/* Logo Upload */}
        <div>
          <h3 className="text-md mb-2">Logo</h3>
          <p className="text-sm text-gray-400 mb-4">
            Please provide us your company’s distinctive logo, or get in touch
            with us to have one made for you.
          </p>
          <div className="w-full h-40 bg-gray-900 flex justify-center items-center rounded-lg">
            <Camera className="text-gray-500 w-10 h-10" />
          </div>
        </div>

        {/* App Name Input */}
        <div className="">
          <h3 className="text-md mb-2">App name</h3>
          <p className="text-sm text-gray-400 mb-2">
            Please provide us your unique App name. You can use the same name
            for your business and app.
          </p>
          <input
            type="text"
            placeholder="App name"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#C3AD60]"
          />
          <p className="text-sm text-gray-400 mt-2">
            There can be no more than <span className="text-[#C3AD60]">nine(9)</span> letters.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col space-y-3">
          <button className="w-full py-3 border border-[#C3AD60] text-[#C3AD60] rounded hover:bg-yellow-500 hover:text-black transition">
            CLEAR
          </button>
          <button className="w-full py-3 bg-[#C3AD60] text-black rounded hover:bg-yellow-500 transition">
            SUBMIT FOR VERIFICATION
          </button>
        </div>
      </div>
    </div>

            </>
        )}
      </div>
    </div>
    </div>
    
  );
}
