"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Bookmark, Heart, BarChart } from "lucide-react";

interface Post {
  id: number;
  user: string;
  username: string;
  date: string;
  content: string;
  postPic?: string;
  likes: string;
  comments: string;
  saves: string;
  views: string;
}

const posts: Post[] = [
  {
    id: 1,
    user: "Kingsley Ayeni",
    username: "@Kingsley_Ayeni792",
    date: "14 Feb 2023",
    content: "This is my first post with an image!",
    postPic: "/assets/candles.png",
    likes: "4.3K",
    comments: "34",
    saves: "116",
    views: "172K",
  },
  {
    id: 2,
    user: "Kingsley Ayeni",
    username: "@Kingsley_Ayeni792",
    date: "14 Feb 2023",
    content: "Another random post about life and thoughts.",
    postPic: "/assets/slippers.png",
    likes: "3.2K",
    comments: "22",
    saves: "98",
    views: "120K",
  },
  {
    id: 3,
    user: "Kingsley Ayeni",
    username: "@Kingsley_Ayeni792",
    date: "14 Feb 2023",
    content: "Just another day, another thought.",
    postPic: "/assets/slippers.png",
    likes: "2.7K",
    comments: "18",
    saves: "76",
    views: "90K",
  },
];

const CataloguePosts = () => {
  return (
    <div className="p-4 w-full max-w-full mx-auto">
      {posts.map((post) => (
        <div
          key={post.id}
          className="text-white mx-auto p-5 flex gap-6 items-start rounded-xl mb-4 shadow-lg"
        >
          <div>
            <Image
              src="/globe.svg"
              alt="Profile"
              objectFit="contain"
              width={90}
              height={90}
              className=" rounded-full border text-white border-gray-600"
            />
          </div>
          {/* User Info */}
          <div className="w-full max-w-[75%]">
            <div className="flex items-center gap-3">
              <p className="font-semibold">{post.user}</p>
              <p className="text-gray-400 text-sm">
                {post.username} • {post.date}
              </p>
            </div>

            {/* Post Content */}
            <p className="mt-3 text-gray-200">{post.content}</p>

            {/* Post Image (if available) */}
            {post.postPic && (
              <div className="mt-3 w-full aspect-video relative rounded-xl overflow-hidden">
                <Image
                  src={post.postPic}
                  alt="Post Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-between px-8 mt-3 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Heart className="w-6 h-6 cursor-pointer hover:text-red-500 transition" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-400 transition" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bookmark className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition" />
                <span>{post.saves}</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart className="w-6 h-6" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CataloguePosts;
