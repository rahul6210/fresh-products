"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Promotion() {
   
    const promotion = [
        {
            "image": "/image/Discount/tastydaily22808199350.jpg",
            "badge": "Discount",
            "title": "Fresh Deals Await: Shop Now!",
            "date": "From 1 May 2023 00:00 AM"
        },
        {
            "image": "/image/Discount/tastydaily2808831780-765x471.jpg",
            "badge": "Free",
            "title": "Natural Fresh Drink in Our Market",
            "date": "From 1 May 2023 00:00 AM"
        },
        {
            "image": "/image/Discount/tastydaily808603206-765x471.jpg",
            "badge": "Discount",
            "title": "Cheap Meat from Our Farmers",
            "date": "From 1 May 2023 00:00 AM"
        },
        {
            "image": "/image/Discount/tastydaily134672-765x471.jpg",
            "badge": "Discount",
            "title": "Tasty Bread Everyday!",
            "date": "From 1 May 2023 00:00 AM"
        }

    ]
    return (
            <>

             <div className='px-4 md:px-12 xl:px-16  bg-[#EFF5EE]'>
            <div className='text-center  md:flex md:justify-between'>
                <h2 className='text-4xl font-semibold'>Promotions</h2>
                <button className='h-10 w-30 py-1 border-2 text-xl font-semibold rounded-full mt-4 hover:bg-black hover:text-white hover:duration-300 ease-in'>show</button>
            </div>

              <Swiper
  spaceBetween={20}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
  className="mySwiper"
>

     {promotion.map((elm, index) => (
        <SwiperSlide key={index} data-aos="zoom-in"

>
                    <div className='h-85 md:h-85 my-10 shadow mt-8 rounded-xl bg-white ' key={index}>
                        <img src={elm.image} className='rounded-t-xl' alt="" />
                        <div className='px-5'>
                            <button className='shadow py-0.5 px-3 rounded-full relative -top-3 bg-white text-red-400 text-[14px]'>{elm.badge}</button>
                            <p className='text-2xl font-semibold hover:text-red-500 '>{elm.title}</p>
                            <p className='py-3 text-gray-500 text-[14px]'>{elm.date}</p>
                        </div>
                    </div>

                    </SwiperSlide>
                
                ))}
       
      
      </Swiper>

         

        </div>


         
    
    </>
        
    )
}
