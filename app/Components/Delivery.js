import React from 'react'

export default function Delivery() {
    return (
        // <div className='bg-[#EFF5EE] px-4 md:px-12 xl:px-16 py-8 md:py-12 xl:py-16'>
        //     {/* <div className='bg-[#F0E0D0] md:flex md:flex-col  md:items-center lg:flex lg:flex-row h-140 rounded-2xl '>
        //         <div className=' h-80 w-80 lg:h-150 lg:w-[1000px] relative flex justify-center items-center '>
        //             <img src="/image/delivery/tastydaily-2852753362.webp" className='h-[100%]  w-[100%]  ps-10 absolute md:left-[50%]
        //              lg:-top-12  ' alt="" />
        //         </div>
        //         <div className='py-25 px-4'>
        //             <p className='text-3xl lg:text-7xl  font-semibold leading-20 w-[95%] md:text-center'>We Delivery on Next Day from 10:00 AM to 08:00 PM</p>
        //             <p className='text-xl lg:py-8'>
        //                 * For Orders starts from $100</p>
        //             <button className='border h-13 w-35 rounded-full bg-[#EC6E55] text-white font-semibold hover:bg-black duration-300 ease-in'>Read More</button>
        //         </div>
        //     </div> */}
        // </div>

        <div data-aos="slide-right" className='bg-[#EFF5EE] px-4 md:px-12 xl:px-16 py-12 xl:py-16'>
  <div className='bg-[#F0E0D0]  w-full flex flex-col md:ps-18 md:flex md:flex-row md:items-center md:gap-18  h-auto rounded-2xl relative'>
    
    <div className='h-80 w-[100%] lg:h-150 lg:w-[1000px] flex justify-around items-center'>
      <img src="/image/delivery/tastydaily-2852753362.webp" className='h-full [40%] object-contain p-4 absolute lg:-top-18'  alt="" />
    </div>

    <div className='py-10 px-4 text-center md:text-start  lg:text-left'>
      <p className='text-3xl lg:text-[60px] font-bold  leading-tight w-full text-[#23403D] md:w-[90%]  text-justify'>
        We Delivery on Next Day from 10:00 AM to 08:00 PM
      </p>
      <p className='text-xl py-8 font-semibold text-[#23403D]'>* For Orders starts from $100</p>
      <button className='px-6 py-3 rounded-full bg-[#EC6E55] text-white font-semibold  hover:bg-black duration-300 ease-in'>
        Read More
      </button>
    </div>

  </div>
</div>

    )
}
