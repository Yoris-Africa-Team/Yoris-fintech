'use client';
import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import { Droplets, MapPin } from 'lucide-react';
import Trending from './trending';

interface Post {
  id: number;
  user: {
    name: string;
    username: string;
    location: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const posts: Post[] = [
  {
    id: 1,
    user: {
      name: 'Wade Warren',
      username: '@Wad_Warren',
      location: 'Accra, Ghana',
      avatar: '/avatar1.png',
    },
    content: '24 Carat Gold chain with one of the rarest precious stones in the world.',
    image: '/assets/diamond.png',
    likes: 1000,
    comments: 34,
    shares: 10,
  },
  {
    id: 2,
    user: {
      name: 'Jacob Jones',
      username: '@Jac.bones',
      location: 'Accra, Ghana',
      avatar: '/avatar2.png',
    },
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    likes: 5000,
    comments: 56,
    shares: 102,
  },
  {
   id: 3,
   user: {
     name: 'Wade Warren',
     username: '@Wad_Warren',
     location: 'Accra, Ghana',
     avatar: '/avatar1.png',
   },
   content: '24 Carat Gold chain with one of the rarest precious stones in the world.',
   image: '/assets/diamond.png',
   likes: 1000,
   comments: 34,
   shares: 10,
 },
 {
   id: 4,
   user: {
     name: 'Jacob Jones',
     username: '@Jac.bones',
     location: 'Accra, Ghana',
     avatar: '/avatar2.png',
   },
   content:
     'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
   likes: 5000,
   comments: 56,
   shares: 102,
 },
];

const Posts: React.FC = () => {
  return (
   <main className='ml-0 md:ml-4 mt-7 flex flex-col md:flex-row items-start gap-3'>
      <div className="space-y-6 max-w-full md:max-w-[70%] w-full ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative rounded-2xl shadow-lg  w-full overflow-hidden"
          style={{
            boxShadow: post.image ? '0px 3px 30px 0px #00000026' : 'none',
          }}
        >
          {/* Image Background (Only if post has an image) */}
          {post.image ? (
            <img
              src={post.image}
              alt="Post"
              className="w-full h-auto object-cover md:object-contain"
            />
          ) : (
            <div className="bg-gradient-to-t from-[#211E11] to-transparent w-full h-56"></div>
          )}

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-12 h-12 rounded-full border-2 border-gray-500"
              />
              <div>
                <h3 className="font-semibold text-white">{post.user.name}</h3>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gold" />
                  {post.user.username} • {post.user.location}
                </p>
              </div>
            </div>

            {/* Post Content */}
            <p className="mt-4 text-gray-300">{post.content}</p>

            {/* Post Interactions */}
            <div className="flex gap-3 mt-4 text-gray-400 text-sm">
              <button className="flex items-center gap-1">
                <FaComment className="text-lg" /> {post.comments}
              </button>
              <button className="flex items-center gap-1 text-red-500">
                <FaHeart className="text-lg" /> {post.likes}
              </button>
              <button className="flex items-center gap-1">
                <Droplets className="text-lg" /> {post.shares}
              </button>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    <Trending />
   </main>
    
  );
};

export default Posts;
