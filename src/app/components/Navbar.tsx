import React from 'react'
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { IoSearch } from "react-icons/io5"
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400','700']
})

const inter = Inter ({
  subsets: ['latin'],
  weight: ['400','700']
})

export const Navbar = () => {
  return (
    <div className='bg-white mx-auto border-b shadow-sm flex flex-col w-full'>
      <div className=' flex justify-center items-center w-full h-[48px] bg-black py-2'>
        <div className='flex  items-center h-[48px]  gap-[231px] ml-72'>
            <div className='flex gap-2'>
                <p className={`text-[#FAFAFA] text-sm font-normal ${poppins.className} `}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link href='/'className={`text-[#FAFAFA] underline font-semibold text-sm decoration-solid ${poppins.className}`}>ShopNow</Link>
            </div>
            <select className={`bg-black text-[#FAFAFA] text-sm font-normal ${poppins.className}`}>
                <option >English</option>
            </select>
        </div>
    </div>
    <div className='flex justify-between items-center  gap-[148px] w-[1170px] pt-8 mx-auto top-[88px] left-[135px]'>
        <div className='flex gap-[190px]'>
            <div>
                <h1 className={`${inter.className} text-2xl font-bold tracking-[3%]`}>Exclusive</h1>
            </div>
              <ul className='flex  items-center gap-12'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>Contact</Link></li>
                <li><Link href='/'>About</Link></li>
                <li><Link href='/'>Sign Up</Link></li>
              </ul>
        </div>
        <div className='flex items-center justify-center'>
          <input type="text" placeholder='What are you looking for?' className='p-3' /> 
        <IoSearch className='text-black size-5 mx-2' />
        <IoHeartOutline className='text-black size-6 mx-2'/>
        <IoCartOutline className='text-black size-6 mx-2'/>
        </div>          
    </div>
    </div>
  )
}
