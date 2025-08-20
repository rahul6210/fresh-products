"use client"
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { GiRaddish } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { GiSlicedBread } from "react-icons/gi";
import { RiDrinksLine } from "react-icons/ri";
import { PiSquaresFourThin } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Top from './Top';
import Link from 'next/link';
import { usePathname } from 'next/navigation';




export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname()
  const [toggler, setToggler] = useState(false)
  const togglerHandler = () => {
    setToggler(!toggler)
  }
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 400) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    }
    window.addEventListener("scroll", scrollHandler)

    return () => window.removeEventListener("scroll", scrollHandler)

  })
  // }


  const navItems=[
    {
     title:"Home",
     link:"/"
    },
      {
     title:"Blog",
     link:"/blog"
    },
      {
     title:"About",
     link:"/about-us"
    },
      {
     title:"Shop",
     link:"/shop",
     innerItems:[
      {
          title:"chicken",
     link:"/chicken"
      }
     ]
    }
  ]
  return (
    <div>
      <Top />
      <div className='bg-[#23403D] text-white  px-5 md:px-12 lg:px-15'>
        <nav className=' lg:block  px-0 py-5  hidden'>
          <ul className=' lg:flex justify-between  gap-4 font-semibold'>
                {navItems.map((elm, index) => (
        elm.title === "Shop" ? (
          <li key={index} className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-red-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {elm.title} <MdKeyboardArrowDown />
            </div>

            {isOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
                {elm.innerItems.map((item, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ) : (
          <li
            key={index}
            className={`hover:text-red-700 flex items-center gap-2 ${pathName==elm.link?"text-red-500":""}`}
          >
            <Link href={elm.link}>{elm.title}</Link>
          </li>
        )
      ))}

         



        


            <div className='flex items-center gap-3 '> <p className='color-text'><GoClock /></p> Delivery on Next from 10.AM to 08:00PM</div>
            <div className='flex items-center gap-3  '> <p className='color-text'><MdOutlineEmail /></p> info@tasty-daily.com</div>
            <div className='flex items-center gap-3 '><p className='color-text'><CiUser /></p> +1900777525</div>

          </ul>
        </nav>




        <div className={`siderbar bg-[#23403D] fixed z-70 inset-y-0 right-0 w-[100%]  md:w-[50%]  ${toggler ? "block" : "hidden"} lg:hidden`}>
          <div className='text-5xl flex justify-end '><button onClick={togglerHandler}><IoClose /></button>
          </div>
          <div className='flex flex-col gap-5 text-[15px] font-semibold  px-5 py-7 '>
            <div className='flex gap-5 items-center'>  <p className='color-text'> <CiShoppingBasket /></p>
              <p> Shop</p></div>
            <div className='flex gap-2 items-center'><p className=''> <GiRaddish /></p><p> Vegetables</p></div>
            <div className='flex gap-2 items-center'> <p><GiFruitBowl /></p><p> Fresh Fruit</p>
            </div>
            <div className='flex gap-2 items-center'><p><GiMeat /></p><p> meat</p></div>
            <div className='flex gap-2 items-center'><p><IoFishOutline /></p><p> see food</p> </div>
            <div className='flex gap-2 items-center'><p><GiSlicedBread /></p><p> Baking</p></div>
            <div className='flex gap-2 items-center'><p><RiDrinksLine /> </p><p>Drink</p></div>
            <div className='flex gap-2 items-center'><p><PiSquaresFourThin /> </p><p>Other</p></div>
            <div className='flex flex-col gap-2 px-2'>
              <p>Home</p>
              <p>Shop</p>
              <p>Blog</p>
              <p>Page</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <p className='flex items-center'>English <MdKeyboardArrowDown /></p>
              <p className='flex items-center'><CiUser /> +1900 777525</p>
              <p className='flex items-center'><MdOutlineEmail /> info@tasty-daily.com</p>

            </div>
          </div>

        </div>


      </div>

      <div className={`flex text-white ${fixed ? "fixed w-full top-0" : "static"} justify-between py-5 px-5 md:px-12 lg:px-15 w-full z-50 bg-[#23403D]`}>
        <div>
          <img src="image/tastydaily-0556409248.webp" className='h-[25px] md:h-[40px]' alt="" />
        </div>
        <div className='lg:flex gap-5 text-[12px] font-semibold hidden   '>
          <div className='flex gap-2 items-center'>  <p className='color-text'>
            <CiShoppingBasket /></p>
            <p>  Shop
            </p></div>





          <div className='flex gap-2 items-center'>
            <p className='color-text'> <GiRaddish /></p>
            <p> Vegetables</p></div>
          <div className='flex gap-2 items-center'> <p className='color-text'><GiFruitBowl /></p><p> Fresh Fruit</p>
          </div>
          <div className='flex gap-2 items-center'><p className='color-text'><GiMeat /></p><p> meat</p></div>
          <div className='flex gap-2 items-center'><p className='color-text'><IoFishOutline /></p><p> seafood</p>
          </div>
          <div className='flex gap-2 items-center'><p className='color-text'><GiSlicedBread /></p><p> Baking</p>
          </div>
          <div className='flex gap-2 items-center'><p className='color-text'><RiDrinksLine /> </p><p>drink</p></div>
          <div className='flex gap-2 items-center'><p className='color-text'><PiSquaresFourThin /> </p><p> other</p></div>
        </div>
        <div className='hidden lg:flex items-center gap-3 text-2xl '>
          <IoSearch />
          <LuUser />
          <FaRegHeart />
          <FiShoppingCart />

        </div>
        <button className='md:block lg:hidden text-2xl ' onClick={togglerHandler}><IoMenu /></button>
      </div>
    </div>

  )

}
