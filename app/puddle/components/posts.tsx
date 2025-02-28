'use client';
import React from 'react';
import Trending from './trending';
import PostSection from './postSection';


const Posts: React.FC = () => {
  return (
   <main className='ml-0 md:ml-4 mt-7 flex flex-col md:flex-row items-start gap-3'>
     <div className='w-full max-w-full md:max-w-[70%]'><PostSection /></div>
    <Trending />
   </main>
    
  );
};

export default Posts;
