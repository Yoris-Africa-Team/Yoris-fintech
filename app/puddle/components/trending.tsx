'use client';
import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import { ArrowRightCircle, MapPin } from 'lucide-react';

interface TrendingItem {
  id: number;
  hashtag: string;
  followers?: string;
  posts?: string;
  avatar: string;
}

interface BusinessItem {
  id: number;
  username: string;
  name: string;
  location: string;
  avatar: string;
  timeAgo: string;
  likes: number;
  comments: number;
}

const trendingData: TrendingItem[] = [
  { id: 1, hashtag: '#ellu_p', followers: '2.5M followers', avatar: '/assets/profile.png' },
  { id: 2, hashtag: '#ellu_p', posts: '2.5M posts', avatar: '/assets/profile.png' },
  { id: 3, hashtag: '#ellu_p', posts: '2.5M posts', avatar: '/assets/profile.png' },
  { id: 4, hashtag: '#ellu_p', posts: '2.5M posts', avatar: '/assets/profile.png' },
  { id: 5, hashtag: '#ellu_p', followers: '2.5M followers', avatar: '/assets/profile.png' },
  { id: 6, hashtag: '#ellu_p', followers: '2.5M followers', avatar: '/assets/profile.png' },
];

const trendingBusiness: BusinessItem[] = [
  {
    id: 1,
    username: '@Wad_Warren',
    name: 'LifeKidz Display Art',
    location: 'Accra, Ghana',
    avatar: '/assets/slippers.png',
    timeAgo: '20 mins ago',
    likes: 1000,
    comments: 34,
  },
  {
    id: 2,
    username: '@Wad_Warren',
    name: 'Q-Biz',
    location: 'Accra, Ghana',
    avatar: '/assets/firm.png',
    timeAgo: '30 mins ago',
    likes: 850,
    comments: 29,
  },
  
];

const Trending: React.FC = () => {
  return (
    <div className="max-w-full h-fit md:max-w-[30%] bg-[#100F0D] shadow-[0px_3px_30px_0px_#00000026] text-white p-6 rounded-2xl">
      {/* Trending Section */}
      <h2 className="text-lg font-semibold text-gold mb-3">Trendings</h2>
      <div className="space-y-4">
        {trendingData.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={item.avatar} alt={item.hashtag} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{item.hashtag}</p>
                <p className="text-sm text-gray-400">{item.followers || item.posts}</p>
              </div>
            </div>
            <ArrowRightCircle className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>

      {/* Trending Business Section */}
      <h2 className="text-lg font-semibold text-gold mt-6 mb-3">Trending Business</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {trendingBusiness.map((business) => (
          <div key={business.id} className="min-w-[200px] bg-[#1c1c1c] p-3 rounded-lg shadow-md">
            <img src={business.avatar} alt={business.name} className="w-full h-32 object-contain" />
            <p className="font-semibold mt-2">{business.name}</p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gold" /> {business.location}
            </p>
            <p className="text-xs text-gray-500 mt-1">{business.timeAgo}</p>
            <div className="flex justify-between mt-3 text-gray-400 text-sm">
              <span className="flex items-center gap-1 text-red-500">
                <FaHeart className="text-lg" /> {business.likes}
              </span>
              <span className="flex items-center gap-1">
                <FaComment className="text-lg" /> {business.comments}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;