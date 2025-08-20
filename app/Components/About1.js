import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

import { IoIosArrowRoundForward } from "react-icons/io";
import BlogCard1 from './BlogCard1';



export default function About1() {
  //
  return (
    <div>
      <div className='h-30 w-full flex flex-col justify-center items-center '>
        <div className='flex justify-center items-center'>
          <p>home</p>
                 <MdOutlineKeyboardArrowRight />
          <p>About us</p>

        </div>
        <h1 className='text-4xl font-bold'>About </h1>

      </div>
      <div className='px-10 py-5 bg-[#EFF5EE]'>
        <div className='w-[95%] h-auto p-5 md:p-8 lg:p-12 lg:flex lg:justify-between lg:gap-10  rounded-2xl bg-white'>
          <div className='mb-6'>
            <img src="/image/about/tastydaily-0409066126 copy.jpg" className='rounded-2xl  lg:hidden' alt="" />
          </div>
          <div className=' md:w-[100%] lg:w-[50%] lg:text-lg flex flex-col gap-5 '>
            <p>At TastyDaily, we are committed to providing you with the freshest and highest-quality groceries at affordable prices. Our mission is to simplify your shopping experience, save you time, and ensure you have access to a wide range of products to meet all your household needs.</p>
            <p>TastyDaily is a leading online grocery store that brings convenience to your doorstep. We understand the importance of fresh and nutritious food for a healthy lifestyle, and we strive to make it easy for you to access a diverse selection of groceries.
            </p>
            <p>To be the go-to destination for customers seeking the freshest produce, pantry staples, and household essentials while delivering exceptional customer service and an effortless online shopping experience.</p>

            <div className='flex flex-col gap-1 text-center items-center md:text-start md:items-start'>
              <div className='flex flex-col md:flex-row gap-4 items-center'> <FaShieldAlt className="text-xl " />
                <p className='font-semibold text-xl'>Quality</p>
              </div>

              <p>We source our products from reputable suppliers to ensure you receive only the best quality items.</p>
            </div>
            <div className='flex flex-col gap-1 text-center items-center md:text-start md:items-start'>
              <div className='flex flex-col md:flex-row gap-4 items-center'>
                <CiCircleQuestion className='text-3xl' />
                <p className='font-semibold text-xl'>Customer Support</p>
              </div>
              <p>Our friendly and knowledgeable customer support team is available to assist you with any inquiries or concerns.</p>
            </div>
            <div className='flex flex-col gap-1 text-center items-center md:text-start md:items-start'>
              <div className='flex flex-col md:flex-row gap-4 items-center'>
                <MdOutlineCheckBoxOutlineBlank className='text-3xl' />
                <p className='font-semibold text-xl'>Fast and Reliable Delivery</p>
              </div>
              <p>We ensure your order reaches your doorstep promptly and in pristine condition.</p>
            </div>

          </div>

          <div className=' w-[50%]'>
            <img src="/image/about/tastydaily-0409066126 copy.jpg" className='h-full rounded-2xl hidden lg:block' alt="" />
          </div>
        </div>
      </div>
<BlogCard1/>


    </div>
  )
}
