import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { GiScooter } from "react-icons/gi";

export default function Top() {
  const array1 = [
    {
      icon: <CiHeart />,
      title: "100% Satisfaction"
    },
    {
      icon: <FiMessageSquare />,
      title: "Top-Notch Support"
    },
    {
      icon: <CiCreditCard1 />,
      title: "Secure Payment"
    },
    {
      icon: <GiScooter />,
      title: "Free Delivery Acrose the US!"
    },
    {
      icon: <CiHeart />,
      title: "100% Satisfaction"
    },
    {
      icon: <FiMessageSquare />,
      title: "Top-Notch Support"
    },
    {
      icon: <CiCreditCard1 />,
      title: "Secure Payment"
    },
    {
      icon: <GiScooter />,
      title: "Free Delivery Acrose the US!"
    },
     {
      icon: <FiMessageSquare />,
      title: "Top-Notch Support"
    },
    {
      icon: <CiCreditCard1 />,
      title: "Secure Payment"
    },
    {
      icon: <GiScooter />,
      title: "Free Delivery Acrose the US!"
    },
    {
      icon: <CiHeart />,
      title: "100% Satisfaction"
    },
    {
      icon: <FiMessageSquare />,
      title: "Top-Notch Support"
    },
    {
      icon: <CiCreditCard1 />,
      title: "Secure Payment"
    },
    {
      icon: <GiScooter />,
      title: "Free Delivery Acrose the US!"
    },
  ]
  return (
    <div>
      <div className="marquee-wrapper  bg-[#EC6E55] text-white py-4">
        <div className=" flex gap-10 marqueeScroll ">
          {array1.map((elm, index) => (
            <div key={index} className="flex items-center gap-3">
              <p>{elm.icon}</p>
              <p>{elm.title}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}
