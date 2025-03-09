"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface ProfileDetails {
  coverPhoto: string;
  profilePic: string;
  name: string;
  username: string;
  followers: string;
  following: string;
  rating: number;
  distance: string;
  bio: string;
}

const profile: ProfileDetails = {
  coverPhoto: "/assets/slippers.png",
  profilePic: "/assets/slippers.png",
  name: "Kingsley Ayeni",
  username: "@Kingsley_Ayeni7922",
  followers: "10k",
  following: "45",
  rating: 4.5,
  distance: "0.7 km",
  bio: "A little explanation of the product A little explanation of the product A little explanation of the product A little explanation of the product",
};

const ProfileSection = () => {
  return (
    <div className="w-full  flex flex-col bg-[#090705] text-white">
      {/* Cover Photo */}
      <div className="relative w-full h-[250px]">
        <Image
          src={profile.coverPhoto}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Profile Details */}
      <div className="relative flex flex-col p-6 lg:px-8 w-full">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-6 w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] border-4 border-black rounded-full overflow-hidden">
          <Image
            src={profile.profilePic}
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-3">
          <button className="px-4 py-2 border-2 border-yellow-300 text-white font-semibold rounded-lg hover:bg-yellow-300 transition">
            Edit Profile
          </button>
        </div>

        {/* Name & Username */}
        <div className="mt-8 md:mt-14 pt-4">
          <h1 className="text-xl font-bold flex items-center gap-1">
            {profile.name} <IoMdCheckmarkCircle className="text-blue-500" />
          </h1>
          <p className="text-gray-400 text-sm">{profile.username}</p>
        </div>
        
        {/* Bio */}
        <p className="text-gray-300 text-sm mt-3 leading-5 max-w-[90%]">
          {profile.bio}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-4 text-gray-400 mt-3">
          <span className="text-yellow-400 flex items-center gap-1">
            <FaStar /> {profile.rating}
          </span>
          <span>{profile.following} following</span>
          <span>{profile.followers} followers</span>
          <span>{profile.distance}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
