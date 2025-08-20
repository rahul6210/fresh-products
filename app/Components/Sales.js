


"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IoMdArrowRoundForward } from "react-icons/io";
import { Autoplay } from 'swiper/modules';

export default function Sales() {
  const [comeDown, setComeDown] = useState([
    { val: 0, title: 'week' },
    { val: 0, title: 'days' },
    { val: 0, title: 'hours' },
    { val: 0, title: 'mintus' },
    { val: 0, title: 'second' }
  ]);

  useEffect(() => {
    const targetDate = new Date('2025-07-01T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setComeDown([
          { val: 0, title: 'week' },
          { val: 0, title: 'days' },
          { val: 0, title: 'hours' },
          { val: 0, title: 'mintus' },
          { val: 0, title: 'second' }
        ]);
      } else {
        const totalSeconds = Math.floor(diff / 1000);
        const weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60));
        const days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        setComeDown([
          { val: weeks, title: 'week' },
          { val: days, title: 'days' },
          { val: hours, title: 'hours' },
          { val: minutes, title: 'mintus' },
          { val: seconds, title: 'second' }
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const produstList = [
    {
      id: 1,
      img: "/image/Discount/tastydaily-2656013442.jpg",
      title: "Mint",
      desc: "The mint plant is a herbaceous perennial that is widely known.",
      price: "$13.00",
      oldPrice: "$22.00",
      discount: "",
      stock: "5",
      sold: "4",
      available: "1",
      rangePervcent: "33%"
    },
    {
      id: 2,
      img: "/image/Discount/tastydaily-12656409750.jpg",
      title: "Basil",
      desc: "To keep basil fresh, trim the stems and place them in a glass or jar of water.",
      price: "$8.00",
      oldPrice: "$16.00",
      discount: "",
      stock: "0",
      sold: "4",
      available: "1",
      rangePervcent: "33%"
    },
    {
      id: 3,
      img: "/image/Discount/tastydaily-2656053651.jpg",
      title: "Basil",
      desc: "To keep basil fresh, trim the stems and place them in a glass or jar of water.",
      price: "$8.00",
      oldPrice: "$16.00",
      discount: "",
      stock: "0",
      sold: "4",  
      available: "1",
      rangePervcent: "33%"
    },
    {
      id: 4,
      img: "/image/Discount/tastydaily657717900.jpg",
      title: "Mint",
      desc: "The mint plant is a herbaceous perennial that is widely known.",
      price: "$13.00",
      oldPrice: "$22.00",
      discount: "",
      stock: "5",
      sold: "4",
      available: "1",
      rangePervcent: "33%"
    },
     {
      id: 1,
      img: "/image/Discount/tastydaily-2656013442.jpg",
      title: "Mint",
      desc: "The mint plant is a herbaceous perennial that is widely known.",
      price: "$13.00",
      oldPrice: "$22.00",
      discount: "",
      stock: "5",
      sold: "4",
      available: "1",
      rangePervcent: "33%"
    },
    {
      id: 2,
      img: "/image/Discount/tastydaily-12656409750.jpg",
      title: "Basil",
      desc: "To keep basil fresh, trim the stems and place them in a glass or jar of water.",
      price: "$8.00",
      oldPrice: "$16.00",
      discount: "",
      stock: "0",
      sold: "4",
      available: "1",
      rangePervcent: "33%"
    },
    {
      id: 3,
      img: "/image/Discount/tastydaily-2656053651.jpg",
      title: "Basil",
      desc: "To keep basil fresh, trim the stems and place them in a glass or jar of water.",
      price: "$8.00",
      oldPrice: "$16.00",
      discount: "",
      stock: "0",
      sold: "4",  
      available: "1",
      rangePervcent: "33%"
    },
    {
      id: 4,
      img: "/image/Discount/tastydaily657717900.jpg",
      title: "Mint",
      desc: "The mint plant is a herbaceous perennial that is widely known.",
      price: "$13.00",
      oldPrice: "$22.00",
      discount: "",
      stock: "5",
      sold: "4",
      available: "1",
      rangePervcent: "33%"
    },
  ];

  return (
    <div className='px-4 md:px-12 xl:px-16 py-8 md:py-12 xl:py-16 bg-[#EFF5EE]'>
      <div className='flex flex-col items-center md:flex-row md:justify-center md:items-center gap-4  md:gap-8 font-semibold'>
        <h2 className='text-3xl font-semibold'>Big Sales Today</h2>
        <p className='flex justify-center items-center'>Ends in:</p>
        <div className='text-3xl text-red-400 flex gap-8'>
          {comeDown.map((elm, i) => (
            <div key={i}>
              <p>{elm.val}</p>
              <p className='text-sm text-black'>{elm.title}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className='my-10' />

      <Swiper
      // loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{          
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         modules={[Autoplay]}
        className="mySwiper"
      >
        {produstList.map((elm, index) => (
          <SwiperSlide key={index}>
            <div data-aos="flip-left" className="rounded-2xl shadow-xl overflow-hidden bg-white transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300 flex flex-col h-full">
              <div className="relative h-[300px] overflow-hidden ">
                <img src={elm.img} alt={elm.title} className="w-full h-full object-cover" />
                {elm.stock < 1 && (
                  <span className="absolute top-4 left-4 bg-red-600 px-4 py-1 rounded-full text-white text-xs font-semibold shadow-md">
                    Out of Stock
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col justify-between h-[250px]">
                {elm.stock > 0 && (
                  <div className="mb-4">
                    <div className="w-full  bg-gray-200 h-2 rounded-full mb-2 overflow-hidden">
                      <div
                        style={{ width: elm.rangePervcent }}
                        className="h-full bg-green-500 transition-all duration-300"
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Sold: {elm.sold}</span>
                      <span>Available: {elm.available}</span>
                    </div>
                  </div>
                )}
                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{elm.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{elm.desc}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400 line-through">{elm.oldPrice}</p>
                    <p className="text-xl font-bold text-red-500">{elm.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
}

