"use client";
import React from "react";
import { MapPin, Briefcase } from "lucide-react"; // Import icons
import { FaUser } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import Activity from "./activity";
import PostSection from "@/puddle/components/postSection";

interface UserProfile {
  name: string;
  username: string;
  location: string;
  followers: number;
  following: number;
  profileImage: string;
  brandsFollowed: string[];
}

const user: UserProfile = {
  name: "Wade Warren",
  username: "@Wad_warren",
  location: "Accra, Ghana",
  followers: 24000,
  following: 1000,
  profileImage: "/assets/profile.png",
  brandsFollowed: [
    "/assets/firm.png",
    "/assets/firm.png",
    "/assets/firm.png",
    "/assets/firm.png",
    "/assets/firm.png",
    "/assets/firm.png",
  ],
};

const ProfileSection = () => {
  const router = useRouter();
  return (
    <main className=" space-y-8 rounded-xl  max-w-full md:max-w-[70%]  ">
      <div className="bg-[#100F0D] p-6 rounded-xl w-full  text-center">
        {/* Profile Header */}
        <div className="flex items-center justify-between">
          <button onClick={() => router.back()}>
            <MdKeyboardArrowLeft className="h-7 w-7 text-white" />
          </button>
          <h2 className="text-lg   text-gold font-medium border-b-2 border-gold inline-block pb-1">
            Profile
          </h2>
          <button
            className="outline-none border-none"
            onClick={() => router.push("/puddle/profile/edit")}
          >
            <Briefcase className=" text-gold w-6 h-6 cursor-pointer flex justify-end" />
          </button>
        </div>

        {/* Profile Image & Info */}
        <div className="mt-4 flex flex-col items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gold object-cover"
          />
          <h3 className="text-white text-lg font-semibold mt-3">
            {user.name}{" "}
            <MdOutlineVerified className="inline w-4 h-4 text-gold" />
          </h3>
          <p className="text-gray-400 text-sm">{user.username}</p>
          <p className="text-gray-500 flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4 text-gold" />
            {user.location}
          </p>
        </div>

        {/* Followers & Following */}
        <div className="flex justify-center gap-6 mt-4 border-b-2 border-[#231F11] pb-4">
          <div className="text-center">
            <p className="text-white font-semibold text-lg">
              {user.followers.toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-white font-semibold text-lg">
              {user.following.toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
        </div>

        {/* Brands Followed */}
        <div className="mt-4 px-3">
          <h4 className="text-[#CBD2E0] text-base md:text-xl  text-left">
            Brands you follow:
          </h4>
          <div className="flex gap-3 mt-2 overflow-x-auto">
            {user.brandsFollowed.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt="Brand"
                className="w-auto h-auto rounded-lg  object-contain"
              />
            ))}
          </div>
        </div>
      </div>
      <Activity />
      <PostSection />
    </main>
  );
};

export default ProfileSection;
