import React from "react";
import { Heart, MessageSquare, MoreVertical, PlusCircle } from "lucide-react";

interface ActivityItem {
  id: number;
  user: string;
  location: string;
  avatar: string;
  name: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    user: "@Jac.bones",
    location: "Accra, Ghana",
    avatar: "/assets/profile.png",
    name: "Jacob Jones",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    likes: 5000,
    comments: 56,
    shares: 102,
    timestamp: "2 days ago",
  },
];

const Activity = () => {
  return (
    <div className="w-full relative p-6 rounded-xl bg-gradient-to-t from-[rgba(34,30,17,0.5)] to-[rgba(34,30,17,0)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg text-white font-semibold">Activity</h2>
        <span className="text-sm text-gray-400">700 Posts</span>
      </div>

      {activities.map((activity) => (
        <div key={activity.id} className="mb-6 p-4 rounded-xl relative ">
          {/* More Options */}
          <MoreVertical className="absolute top-4 right-4 text-gray-400 cursor-pointer" />

          {/* User Info */}
          <div className="flex items-center gap-3">
            <img
              src={activity.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-white font-medium">{activity.user}</p>
              <p className="text-xs text-gray-500">{activity.location}</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-gray-300 mt-3">
            <span className="text-white font-bold">{activity.name} </span>
            {activity.content}{" "}
            <span className="text-gold cursor-pointer">...more</span>
          </p>

          {/* Engagement Section */}
          <div className="flex gap-4 mt-3">
            <div className="flex items-center gap-1 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm">{activity.comments}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">{activity.likes}k</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
              <span className="text-sm">{activity.shares}</span>
            </div>
          </div>

          {/* Timestamp */}
          <p className="text-gray-500 text-sm mt-2">{activity.timestamp}</p>
        </div>
      ))}

      {/* Floating Add Button */}
      <button className="absolute bottom-6 right-6 bg-gold p-3 rounded-full shadow-lg">
        <PlusCircle className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default Activity;
