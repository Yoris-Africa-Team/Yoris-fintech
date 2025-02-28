'use client'
import React, { useState } from "react";
import { Camera } from "lucide-react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

const EditProfile = () => {
   const router = useRouter();
  const [profileData, setProfileData] = useState({
    fullName: "Wade Warren",
    email: "Wadewarren@gmail.com",
    username: "wade_warren",
    location: "Lagos, Nigeria",
  });

  return (
    <div className="flex flex-col items-center w-full max-w-full md:max-w-[70%]  p-8 bg-[#100F0D] rounded-xl">
      {/* Header */}
      <div className="flex items-start w-full">
          <button onClick={() => router.back()}
            className="flex justify-start outline-none"
            >
                     <MdKeyboardArrowLeft className="h-7 w-7 text-white" />
         </button>
      <h2 className="text-white text-lg flex w-full justify-center font-semibold mb-6">Edit Profile</h2>
      </div>
     

      {/* Profile Picture */}
      <div className="relative w-24 h-24">
        <img
          src="/assets/profile.png"
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-2 border-gray-600"
        />
        <label className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black/50 text-xs text-white py-1 cursor-pointer rounded-b-full">
          <Camera className="w-4 h-4 mr-1" />
          Change photo
          <input type="file" className="hidden" />
        </label>
      </div>

      {/* Form Fields */}
      <div className="w-full mt-6">
        {Object.entries(profileData).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              defaultValue={value}
              className="w-full bg-transparent border-b border-gray-500 text-white py-2 outline-none"
              disabled={key === "email"} // Email field is disabled
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between w-full mt-6">
        <button className="border border-gold text-gold px-6 py-2 hover:bg-hovergold hover:text-black duration-150 rounded-full">Cancel</button>
        <button className="bg-gold text-black px-6 py-2 hover:bg-hovergold duration-150 rounded-full">Update settings</button>
      </div>
    </div>
  );
};

export default EditProfile;
