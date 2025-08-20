import React from 'react'

export default function Organic() {
    return (
        <div data-aos="fade-left" className='bg-[#EFF5EE] px-4 md:ps-12 xl:px-16  '>
            <div className='bg-[#AAD7C3] h-auto px-5 md:ps-12 lg:px-12 rounded-2xl flex flex-col items-stretch lg:items-end md:flex md:flex-row '>
                <div className='lg:px-12 py-5 md:py-10 lg:py-18 text-[#23403D] w-[100%] md:w-[50%] lg:w-[60%] '>
                    <h2 className=' text-3xl lg:text-[44px] font-semibold '>
                        We Prioritize Organic Products</h2>
                    <p className='py-5 lg:text-xl lg:leading-8  text-justify '>Were you aware that non-organic items can contain substantial pesticide residues and artificial preservatives? That's why we emphasize sourcing organic items. They not only offer a more delightful taste but also contribute to maintaining healthier soils and promoting biodiversity.</p>
                    <p className=' lg:text-xl  lg:leading-8  text-justify '>Our commitment to quality is evident in our strict standards, with over 500 ingredients on our "never" list. From artificial food dyes to additives, we scrutinize every product we produce and sell to ensure they are not only healthy for you but also for the environment.</p>
                    <div className='flex justify-center md:justify-start'><button className='h-13 w-35 my-5 md:mt-10 rounded-full font-semibold bg-white text-[#23403D] hover:bg-red-400 hover:text-white hover: duration-300 ease-in'>Read More</button>
                    </div>              
                      </div>
                <div className=" w-[100%] md:w-[52%] lg:h-auto lg:w-[40%]">

                    <img src="/image/Organic/tastydaily-2858430381.png" className='h-full flex items-end  ' alt="" />
                </div>
            </div>
        </div>



    )
}
//w-full md:w-[1600px] lg:w-[1500px] flex justify-right items-end