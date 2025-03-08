'use client'
import React, { useEffect, useState } from "react";
import { Heart, MessageSquare, MoreVertical } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Trending from "@/puddle/components/trending";
import { fetchNotifications } from "services/notificationService";

interface Notification {
  id: string;
  type: "like" | "comment";
  user: string;
  usersInvolved: string[];
  content: string | null;
  text?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const NotificationSection = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await fetch("/api/notifications"); // Fetch from API route
        if (!response.ok) throw new Error("Failed to fetch notifications");
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        setError("Failed to load notifications.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getNotifications();
  }, []);

  return (
    <main className="w-full flex flex-col md:flex-row gap-3 p-5">
      <div className="p-6 rounded-xl w-full max-w-full md:max-w-[70%]">
        <div className="flex gap-6 mx-auto mb-8 w-full justify-center">
          <button className="text-base text-gold font-medium outline-none border-b-2 border-b-gold">
            All
          </button>
          <button className="text-base text-gold font-medium outline-none border-none">
            Recent
          </button>
        </div>
        <h3 className="text-sm text-gold mb-3">Today</h3>

        {loading ? (
          <p className="text-gray-400">Loading notifications...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : notifications.length === 0 ? (
          <p className="text-gray-400">No notifications available.</p>
        ) : (
          <div className="space-y-8">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="rounded-xl p-4 relative bg-gradient-to-t from-[rgba(34,30,17,0.5)] to-[rgba(34,30,17,0)]"
              >
                {/* Vertical Ellipsis */}
                <MoreVertical className="absolute top-4 right-4 text-gray-400 cursor-pointer" />

                {/* Interaction Row */}
                <div className="flex items-center justify-start gap-3 text-gray-400 text-sm mb-2">
                  {notif.type === "like" ? (
                    <FaHeart className="text-red-500 w-6 h-6" />
                  ) : (
                    <MessageSquare className="text-blue-500 w-6 h-6" />
                  )}
                  <p>
                    <span className="text-white">{notif.user}</span>{" "}
                    {notif.type === "like"
                      ? `and ${notif.usersInvolved.length - 1} others liked your post`
                      : "commented on your post"}
                  </p>
                </div>

                {/* Comment or Post Content */}
                <div className="flex gap-4 items-start p-4">
                  <div className="md:h-8 md:w-6 border-gray-700 border-l-[3px] border-b-[3px]"></div>

                  {/* Display Image if present */}
                  {notif.content && (
                    <div className="w-full max-w-full md:max-w-[60%] h-auto">
                      <img
                        src={notif.content}
                        alt="Post"
                        className="rounded-lg w-full h-auto md:h-[200px] object-cover"
                      />
                    </div>
                  )}

                  {/* Display Text if no image */}
                  {!notif.content && notif.text && (
                    <p className="text-gray-300 text-sm max-w-full md:max-w-[60%]">
                      {notif.text}
                    </p>
                  )}
                </div>

                {/* Like and Comment Count */}
                <div className="flex items-center gap-4 text-gray-500 mt-3">
                  <div className="flex items-center gap-1">
                    <FaHeart className="text-red-500 w-4 h-4" />
                    <span className="text-white text-sm">{notif.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-white text-sm">{notif.comments}</span>
                  </div>
                </div>

                {/* Timestamp */}
                <p className="text-gray-500 text-end text-xs mt-2">
                  {notif.timestamp}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Trending />
    </main>
  );
};

export default NotificationSection;
