// "use client"
//   import react,{useEffect} from "react";
// import { GiScooter } from "react-icons/gi";
// import { LuHeartHandshake } from "react-icons/lu";
// import { LuMessagesSquare } from "react-icons/lu";
// import { MdPayment } from "react-icons/md";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Hero() {
//   useEffect(() => {
//   AOS.init({
//     duration: 1000,  
//   });
// }, []);
//   return (
//     <div className='bg-[#EFF5EE]'>
//       <div className='px-5 md:px-10 lg:px-15 py-10 flex flex-col gap-7 lg:flex lg:flex-row lg:justify-between '>
//         <div className=' h-[300px] md:h-[500px]  lg:w-[48%]  px-5 py-5 md:px-10 lg:px-15 py:5 md:py-10 lg:py-20 relative rounded-2xl bg-[url(/image/hero/tastydaily-2833252293.jpg)] bg-cover bg-center '>
//           <h2 className=' text-3xl w-[80%] md:text-5xl font-semibold md:w-[90%] text-[#23403D] sticky z-2'>
//             Tasty Vegetables from Farm Vendors
//           </h2>
//           <p className='text-md md:text-xl  w-[55%] lg:w-[55%] font-semibold py-5 md:py-10 text-[#23403D]  absolute z-2'>
//             Every Fridays CheckBest Market Deals!
//           </p>
//           <button className=' h-12 w-30 rounded-full bg-[#EC6E55] text-[white] font-semibold absolute bottom-8 left-2 lg:bottom-20  md:left-5 lg:left-50 z-4'>Shop Now</button>


// {/* 
//           <div>
//             <img src="/image/hero/tastydaily-2833252293.jpg" className=' absolute bottom-0   object-[-190px_0]  object-cover  right-0 h-120  ' alt="" />
//           </div> */}
//         </div>
//         <div className='h-[300px] md:h-[500px] lg:w-[48%]  bg-[#EDBE82] px-5 py-5 md:px-10 lg:px-15 py:5 md:py-10 lg:py-20 relative  rounded-2xl  bg-[url(/image/hero/tastydaily-28339631631.jpg)] bg-cover bg-center'>

//              <h2 className=' text-3xl w-[80%] md:text-5xl font-semibold md:w-[90%] text-[#23403D] sticky z-2'>
//             Delicious Fruits from South Africa
//           </h2>
//           <p className='text-md md:text-xl w-[55%] lg:w-[40%] font-semibold text-[#23403D] py-5 md:py-10 absolute z-2'>
//            Fresh & Non GMO Sweet Fruits
//           </p>
//           <button className=' h-12 w-30 rounded-full bg-[#EC6E55] text-[white] font-semibold absolute bottom-8 left-2 md:left-5 lg:bottom-20 lg:left-50 z-4'>Shop Now</button>



//           {/* <div>
//             <img src="/image/hero/tastydaily-2833963163 (1).jpg" className=' absolute bottom-0   object-[-190px_0]  object-cover  right-0 h-120  ' alt="" />
//           </div>           */}
//         </div>
//       </div>
//    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:flex lg:justify-between lg:gap-5 px-5 md:px-10 lg:px-15 py-10'>
//        <div className='flex flex-col gap-4 text-center'>
//       <p className='text-5xl flex justify-center text-[#EC6E55]'>  <GiScooter /></p>
//       <p className=' text-xl lg:text-2xl font-semibold w-[90%] text-[#23403D]'>Free Delivery Across the US!</p>
//       <p className=' lg:w-[90%] md:ps-6 md:text-start lg:text-center lg:text-[20px]'>Free delivery for all orders above $100</p>
//       </div>
//       <div className='flex flex-col gap-4 text-center'>
//        <p className='text-5xl flex justify-center text-[#EC6E55]'><LuHeartHandshake /></p>
//        <p className='text-xl lg:text-2xl font-semibold w-[90%] text-[#23403D] '>100% Satisfaction Guarantee!</p>
//        <p className='lg:w-[90%]  lg:text-[20px] lg:text-center '>Providing help in case of dissatisfaction</p>
//       </div>
//       <div className='flex flex-col gap-4'>
//         <p className='text-5xl flex justify-center text-[#EC6E55]'><LuMessagesSquare /></p>
//         <p className='text-xl lg:text-2xl font-semibold w-[90%] text-[#23403D] text-center '>Top-Notch Support</p>
//         <p className='text-center lg:text-[20px]'>Chat with us if you’ve any questions</p>
//       </div>
//       <div className='flex flex-col gap-4'>
//        <p className='text-5xl flex justify-center text-[#EC6E55]'><MdPayment /></p>
//        <p className='text-xl lg:text-2xl font-semibold w-[90%] text-center text-[#23403D]'>Secure Payments</p>
//        <p className='lg:w-[70%] text-center lg:text-[20px]'>We use safest payment technologies</p>
//       </div>
//    </div>

//     </div>
//   )
// }



"use client"

import React from "react";
import { GiScooter } from "react-icons/gi";
import { LuHeartHandshake, LuMessagesSquare } from "react-icons/lu";
import { MdPayment } from "react-icons/md";


export default function Hero() {


  return (
    <div className="bg-[#EFF5EE] ">
        <div data-aos="fade-up">
      <div
        className="px-5 md:px-10 lg:px-15 py-10 flex flex-col gap-7 lg:flex-row lg:justify-between"
      >
        {/* Left Card */}
        <div
          className="h-[300px] md:h-[500px] lg:w-[48%] px-5 py-5 md:px-10 lg:px-15 md:py-10 lg:py-20 relative rounded-2xl bg-[url(/image/hero/tastydaily-2833252293.jpg)] bg-cover bg-center"
          data-aos="fade-right"
        >
          <h2 className="text-3xl w-[80%] md:text-5xl font-semibold md:w-[90%] text-[#23403D] sticky z-2">
            Tasty Vegetables from Farm Vendors
          </h2>
          <p className="text-md md:text-xl w-[55%] lg:w-[55%] font-semibold py-5 md:py-10 text-[#23403D] absolute z-2">
            Every Fridays Check Best Market Deals!
          </p>
          <button className="h-12 w-30 rounded-full bg-[#EC6E55] text-white font-semibold absolute bottom-8 left-2 lg:bottom-20 md:left-5 lg:left-50 z-4">
            Shop Now
          </button>
        </div>

        {/* Right Card */}
        <div
          className="h-[300px] md:h-[500px] lg:w-[48%] bg-[#EDBE82] px-5 py-5 md:px-10 lg:px-15 md:py-10 lg:py-20 relative rounded-2xl bg-[url(/image/hero/tastydaily-28339631631.jpg)] bg-cover bg-center"
          data-aos="fade-left"
        >
          <h2 className="text-3xl w-[80%] md:text-5xl font-semibold md:w-[90%] text-[#23403D] sticky z-2">
            Delicious Fruits from South Africa
          </h2>
          <p className="text-md md:text-xl w-[55%] lg:w-[40%] font-semibold text-[#23403D] py-5 md:py-10 absolute z-2">
            Fresh & Non GMO Sweet Fruits
          </p>
          <button className="h-12 w-30 rounded-full bg-[#EC6E55] text-white font-semibold absolute bottom-8 left-2 md:left-5 lg:bottom-20 lg:left-50 z-4">
            Shop Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:flex lg:justify-between lg:gap-5 px-5 md:px-10 lg:px-15 py-10"
        data-aos="fade-up"
      >
        {/* Feature 1 */}
        <div className="flex flex-col gap-4 text-center" data-aos="zoom-in">
          <p className="text-5xl flex justify-center text-[#EC6E55]">
            <GiScooter />
          </p>
          <p className="text-xl lg:text-2xl font-semibold w-[90%] text-[#23403D]">
            Free Delivery Across the US!
          </p>
          <p className="lg:w-[90%] md:ps-6 md:text-start lg:text-center lg:text-[20px]">
            Free delivery for all orders above $100
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col gap-4 text-center" data-aos="zoom-in">
          <p className="text-5xl flex justify-center text-[#EC6E55]">
            <LuHeartHandshake />
          </p>
          <p className="text-xl lg:text-2xl font-semibold w-[90%] text-[#23403D]">
            100% Satisfaction Guarantee!
          </p>
          <p className="lg:w-[90%] lg:text-[20px] lg:text-center">
            Providing help in case of dissatisfaction
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col gap-4 text-center" data-aos="zoom-in">
          <p className="text-5xl flex justify-center text-[#EC6E55]">
            <LuMessagesSquare />
          </p>
          <p className="text-xl lg:text-2xl font-semibold w-[90%] text-[#23403D]">
            Top-Notch Support
          </p>
          <p className="text-center lg:text-[20px]">
            Chat with us if you’ve any questions
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col gap-4 text-center" data-aos="zoom-in">
          <p className="text-5xl flex justify-center text-[#EC6E55]">
            <MdPayment />
          </p>
          <p className="text-xl lg:text-2xl font-semibold w-[90%] text-[#23403D]">
            Secure Payments
          </p>
          <p className="lg:w-[70%] text-center lg:text-[20px]">
            We use safest payment technologies
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
