'use client'
import { useState } from "react";
import Header from "@/constant/Header";

const AddAccountManager = () => {
  const [username, setUsername] = useState("@kingsley_ayeni99320");
  const [permissions, setPermissions] = useState({
    products: false,
    messaging: true,
    wallet: false,
    socialMedia: true,
    orderManagement: true,
    statistics: false,
    events: true,
    accountManager: true,
  });

  // Handle individual checkbox change
  const handleCheckboxChange = (key:any) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle "Select All" toggle
  const handleSelectAll = () => {
    const allSelected = Object.values(permissions).every((val) => val);
    const newPermissions = Object.keys(permissions).reduce((acc, key) => {
      acc[key] = !allSelected;
      return acc;
    }, {});
    setPermissions(newPermissions);
  };

  return (
    <div>
        <Header />
       <div className=" bg-black text-white px-6 py-8 pt-20" >
      <div className="max-w-lg w-full mx-auto">
        {/* Header */}
        <h1 className="text-[#C3AD60] text-lg font-semibold mb-2">
          Add Account Manager
        </h1>

        {/* Input Section */}
        <p className="text-gray-400 mb-2">
          Please input the username or email address of the account manager you wish to add to your business branch.
        </p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-[#1A1A1A] p-3 rounded-lg text-white outline-none"
        />

        {/* Account Manager Profile */}
        <div className="flex items-center mt-4">
          <img
            src="https://via.placeholder.com/50" // Replace with actual image
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3">
            <h2 className="text-lg font-semibold">Kingsley Ayeni</h2>
            <p className="text-gray-400">@kingsley_ayeni99320</p>
          </div>
        </div>

        {/* Permissions Section */}
        <h2 className="mt-6 text-lg text-[#C3AD60] font-semibold">Select all</h2>
        <div className="mt-3 space-y-2">
          {Object.keys(permissions).map((key) => (
            <label key={key} className="flex justify-between items-center cursor-pointer">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
              <input
                type="checkbox"
                checked={permissions[key]}
                onChange={() => handleCheckboxChange(key)}
                className="w-5 h-5 accent-[#C3AD60]"
              />
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSelectAll}
            className="mr-4 px-4 py-2 border border-[#C3AD60] text-[#C3AD60] rounded-lg"
          >
            Select All
          </button>
          <button className="w-full py-3 bg-[#C3AD60] text-black font-semibold rounded-lg">
            SAVE
          </button>
        </div>
      </div>
    </div> 
    </div>
    
  );
};

export default AddAccountManager;
