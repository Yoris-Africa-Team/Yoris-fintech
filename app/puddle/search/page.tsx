import React from 'react';
import Header from '@/constant/Header';
import Layout from '../components/layout';
import Trending from '../components/trending';
import { Search, User } from 'lucide-react';
import { MdKeyboardArrowRight } from "react-icons/md";

const recentSearches = [
  { id: 1, name: 'Wade Warren', username: '@Wad_Warren', location: 'Accra, Ghana', avatar: '/avatar1.png' },
  { id: 2, name: 'Eko Hotels and Suites', username: '@EkoHotels', location: 'Accra, Ghana', avatar: '/avatar2.png' },
  { id: 3, name: 'The Ankara Lady', username: '@AnkaraLady', location: 'Accra, Ghana', avatar: '/avatar3.png' },
  { id: 4, name: 'Kagan Tech', username: '@KaganT', location: 'Accra, Ghana', avatar: '/avatar4.png' },
];

const SearchPage = () => {
  return (
    <>
      <Header />
      <Layout>
        {/* Search Bar */}
        <div className="w-full bg-[#100F0D] p-4 rounded-xl flex items-center gap-3 shadow-lg">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="What do you want to find...?"
            className="w-full bg-transparent text-white outline-none placeholder-gray-500"
          />
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row justify-between px-4 mt-6">
          {/* Recent Searches (Left Side) */}
          <div className="md:w-2/3 lg:w-1/3  shadow-md p-6 rounded-xl">
            <h2 className="text-lg font-semibold text-gold mb-3">Recent</h2>
            <div className="space-y-6">
              {recentSearches.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-400">{user.username}</p>
                    </div>
                  </div>
                  <button className='outline-none border p-1 rounded-md border-white'><MdKeyboardArrowRight className="w-5 h-5 text-gray-400" /></button>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Section (Right Side) */}
          <Trending />
        </div>
      </Layout>
    </>
  );
};

export default SearchPage;
