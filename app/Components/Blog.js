import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import slugify from '../slugify';
import BlogCard1 from './BlogCard1';



export default function Blog() {

  return (
    <div>

      <div className='h-40 w-full  flex flex-col justify-center items-center'>
        <div className='flex gap-2 justify-center items-center font-semibold'>
          <p><Link href="/">home</Link></p>
          <MdOutlineKeyboardArrowRight />
          <p>blog</p>
        </div>

      </div>
      <BlogCard1 />
    </div>
  )
}

