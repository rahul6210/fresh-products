import React from 'react'
import { FaInstagram } from "react-icons/fa";

export default function Photo() {
    return (
        <div data-aos="zoom-in-right" className="pt-8 bg-[#EFF5EE]">
            <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 relative">
               
                <div className='hidden lg:block rounded-tl-2xl'><img src="/image/photo/tastydaily-2808598935.jpg" alt="" /></div>
                <div className='hidden md:block'><img src="/image/photo/tastydaily2808214793.jpg" alt="" /></div>
                <div className=' md:block'><img src="/image/photo/tastydaily-808658127.jpg" alt="" /></div>
               
                <div className=' md:block'><img src="/image/photo/tastydaily808225562.jpg" alt="" /></div>
                <div className='hidden md:block'><img src="/image/photo/tastydaily08181687.jpg" alt="" /></div>
                <div className='hidden lg:block'><img src="/image/photo/tastydaily755010.jpg" alt="" /></div>
                <div className='h-20 w-40 md:h-[100px] md:w-40 lg:h-55 lg:w-60  bg-[#F6F8F4] rounded-xl  text-3xl flex justify-center items-center absolute left-27 top-15 md:left-75 lg:left-140 md:top-10  lg:top-2  opacity-95'> <div className='flex flex-col  justify-center items-center'> <FaInstagram className='text-red-400' />
                <a href="https://www.instagram.com"><div class="c-ip-instagram__info"><i class="ip-z-insta c-ip-instagram__logo"></i><div class="c-ip-instagram__title text-xl font-semibold text-[#23403D]">tasty_daily</div></div></a>
                 </div>
                </div>
                
            </div>
        </div>
    )
}
