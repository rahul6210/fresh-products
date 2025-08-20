import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



export default function Footer() {
    return (
        <div  data-aos="zoom-out-up" className='bg-[#23403D] px-5  md:px-12  xl:px-16 py-8 md:py-12 xl:py-16'>
            <div className='   flex gap-50 md:flex md:flex-col  lg:flex lg:flex-row'>
                <div className='w-[45%] hidden lg:block '>
                    <div className='flex flex-col gap-5'>
                        <img src="/image/tastydaily-0556409248.webp" className='h-10 w-50' alt="" />
                        <p className=' text-gray-500  leading-loose text-lg'>
                            We're Tasty Daily Shop, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers.
                        </p>

                        <div className='text-2xl flex gap-5 text-red-500'>
                            <FaFacebookF />
                            <RiInstagramFill />
                            <IoLogoWhatsapp />
                            <FaYoutube />

                        </div>
                        <p className=' text-sm text-gray-400'>© 2023 Tasty Daily Grocery WordPress Theme</p>
                    </div>

                </div>
                <div className='w-[100%] py-7 flex flex-col items-center gap-5  md:flex-row md:justify-between '>
                    <div className='md:w-[25%] text-gray-400 text-md md:text-sm flex flex-col items-center gap-7'>

                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Shipping Policy</p>
                        <p>Refund Policy</p>
                        <p>Privacy Policy</p>
                        <p>Delivery Info</p>
                        <p>Term and Conditions</p>
                    </div>



                    <div className='flex flex-col items-center  gap-9 w-[100%] md:w-[40%]'>
                        <h2 className='text-2xl font-semibold text-red-400'>Subscribe for Get News
                        </h2>
                        <p className='text-gray-400 text-center md:text-right'>Sign up to get 10% off your first order and stay up to date on the latest product releases, special offers and news</p>
                        <div className= 'h-15 w-60 md:h-15 md:w-85 border border-stone-600 rounded-full flex justify-around items-center ps-2 '>
                            <span className='text-red-300'><MdOutlineEmail /></span>
                            <p className='text-xl  text-amber-50 '>Your Email</p>
                            <div className=' md:h-[96%] md:w-[53%]  rounded-full p-3 md:p-1  bg-red-400 flex justify-center items-center text-white font-semibold'>Subscribe</div>
                        </div>
                        <div className='flex justify-center  gap-2 h-7 w-11'>
                            <img src="/image/footer/tastydaily-2647063364.webp" alt="" />
                            <img src="/image/footer/tastydaily-2647277186.webp" alt="" />
                            <img src="/image/footer/tastydaily-2648618743.webp" alt="" />
                            <img src="/image/footer/tastydaily-2648803124.webp" alt="" />
                            <img src="/image/footer/tastydaily-2648296211.webp" alt="" />
                            <img src="/image/footer/tastydaily-2648938713.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%]  flex flex-col items-center  py-4 gap-7 lg:hidden'>

                <img src="/image/tastydaily-0556409248.webp" className='h-10 w-50' alt="" />
                <p className=' text-gray-500  leading-loose text-lg text-center'>
                    We're Tasty Daily Shop, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers.
                </p>

                <div className='text-2xl flex gap-5 text-red-500'>
                    <FaFacebookF />
                    <RiInstagramFill />
                    <IoLogoWhatsapp />
                    <FaYoutube />

                </div>
                <p className=' text-sm text-white'>© 2023 Tasty Daily Grocery WordPress Theme</p>


            </div>
        </div>
    )
}
