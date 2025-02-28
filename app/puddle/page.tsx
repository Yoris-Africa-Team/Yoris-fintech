import React from 'react'
import Header from '@/constant/Header'
import Layout from './components/layout'
import { BiMoviePlay } from "react-icons/bi";
import { Image } from "lucide-react";
import { CiFaceSmile } from "react-icons/ci";
import { BsBarChart } from "react-icons/bs";
import Posts from './components/posts';

const PuddleHome = () => {
  return (
  <>
    <Header />
   <Layout>
      <form action="">
         <div className='flex bg-[#100F0D80] w-[95%] mx-auto items-center gap-3 rounded-3xl py-8 px-6 '>
            <div className='profile-photo h-7 mr-3 w-7 bg-gray-800 rounded-[50%]'></div>
            <input type="text" name="" id="" 
            className=' w-full bg-[#100F0D80]  outline-none '
            placeholder='what is happening'
            />
            <div className='flex items-center text-gold gap-6'>
               <Image className='h-4 w-4 md:h-6 md:w-6' />
               <CiFaceSmile className='h-4 w-4 md:h-6 md:w-6' />
               <BiMoviePlay className='h-4 w-4 md:h-6 md:w-6' />
               <BsBarChart className='h-4 w-4 md:h-6 md:w-6'/>
            </div>
         </div>
      </form>
      <Posts />
   </Layout>
  </>
    
  )
}

export default PuddleHome