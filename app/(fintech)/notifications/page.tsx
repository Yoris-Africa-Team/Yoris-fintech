'use client'
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const Notifications = () => {
  const router = useRouter();
  const [expandedMessages, setExpandedMessages] = useState<{ [key: number]: boolean }>({});

  const toggleMessage = (id: number) => {
    setExpandedMessages((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const notifications = [
    {
      id: 1,
      sender: "Daniel Barrows",
      recipient: "Kingsley Ayeni",
      message: "klshbuwevhduguhdjqvdnxsanbxshudfw...",
      timestamp: "23, Feb at 9:27 pm",
      image: "https://via.placeholder.com/40",
      isUnread: true,
    },
    {
      id: 2,
      sender: "Daniel Barrows",
      recipient: "Kingsley Ayeni",
      message: "dfbegwjhsguhdjqvdnxsanbxshudfw...",
      timestamp: "23, Feb at 9:27 pm",
      image: "https://via.placeholder.com/40",
      isUnread: false,
    },
    {
      id: 3,
      sender: "Daniel Barrows",
      recipient: "Kingsley Ayeni",
      message: "dfbegwjhduguhdjqvdnxsanbxshudfw...",
      timestamp: "23, Feb at 9:27 pm",
      image: "https://via.placeholder.com/40",
      isUnread: true,
    },
    {
      id: 4,
      sender: "Daniel Barrows",
      recipient: "Kingsley Ayeni",
      message: "dfbegwjhsanbashbxsanbxshudfw...",
      timestamp: "23, Feb at 9:27 pm",
      image: "https://via.placeholder.com/40",
      isUnread: false,
    },
    {
      id: 5,
      sender: "Daniel Barrows",
      recipient: "Kingsley Ayeni",
      message: "dfbegwjhsjqvdnxsanbxshudfw...",
      timestamp: "23, Feb at 9:27 pm",
      image: "https://via.placeholder.com/40",
      isUnread: true,
    },
  ];

  return (
    <section className="mx-auto max-w-[1300px] mt-14 pb-6 rounded-md border border-gold w-full">
      {/* Header */}
      <div className="flex items-center bg-gold py-3 px-4 w-full text-white">
        <IoIosArrowBack className="text-white cursor-pointer text-lg md:text-xl" 
        onClick={() => router.push('/')}
        />
        <span className="text-lg md:text-xl font-medium mx-auto">Notifications</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-3 bg-[#100F0D] w-full h-full">
        {/* Inbox Header */}
        <div className="flex items-center justify-between text-white w-[90%] mx-auto border-b border-[#282520] pb-2 pt-4">
          <h1 className="text-sm md:text-base font-medium">Inbox</h1>
          <span className="text-xs md:text-sm p-1 rounded-sm bg-[#B31414] px-2">10+</span>
        </div>

        {/* Notifications List */}
        <div className="px-4 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-3 md:gap-4 p-3 border-b-2 border-[#2A1F01] w-full"
            >
              {/* Sender Image */}
              <img
                src={notification.image}
                alt="Profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
              />

              {/* Notification Content */}
              <div className="flex-1 text-white">
                <p className="text-xs md:text-sm font-semibold truncate overflow-hidden w-[90%]">
                  <span className="font-medium">{notification.sender}</span>{" "}
                  <span className="font-normal">sent money to</span>{" "}
                  <span className="font-medium">{notification.recipient}</span>
                </p>

                {/* Message Display */}
                <p className="text-[10px] md:text-xs text-gray-400 mt-1 max-w-full truncate overflow-hidden">
                  {expandedMessages[notification.id]
                    ? notification.message
                    : `${notification.message.slice(0, 50)}... `}
                  {notification.message.length > 50 && (
                    <button
                      onClick={() => toggleMessage(notification.id)}
                      className="text-gold text-[10px] md:text-xs font-semibold ml-1"
                    >
                      {expandedMessages[notification.id] ? "See Less" : "See More"}
                    </button>
                  )}
                </p>

                <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                  {notification.timestamp}
                </p>
              </div>

              {/* Unread Indicator */}
              {notification.isUnread && (
                <span className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full flex-shrink-0"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifications;
