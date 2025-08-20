"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

export default function Chiken1() {
  const product = [
    {
      id: 1,
      image: "/image/chiken/tastydaily1.jpg",
      title: "Organic Chicken Breast 500g",
      description:
        "Fresh and tender chicken breast, perfect for healthy meals.",
      rating: 5,
      category: "Poultry & Chicken",
      price: 420.0,
      currency: "$",
      iconBtnss: [
        {
          icons: <FaRegHeart />,
          title: "heart",
          id: 1,
        },
        {
          icons: <IoEyeOutline />,
          title: "eye",
          id: 2,
        },
      ],
    },
    {
      id: 2,
      image: "/image/chiken/tastydaily-2658411452.jpg",
      title: "Boneless Chicken Thighs 1kg",
      description:
        "Juicy and flavorful chicken thighs, ideal for grilling and curry.",
      rating: 4,
      category: "Poultry & Chicken",
      price: 480.0,
      currency: "$",
      iconBtnss: [
        {
          icons: <FaRegHeart />,
          title: "heart",
          id: 1,
        },
        {
          icons: <IoEyeOutline />,
          title: "eye",
          id: 2,
        },
      ],
    },
    {
      id: 3,
      image: "/image/chiken/tastydaily-2658544856.jpg",
      title: "Spicy Chicken Wings 750g",
      description: "Marinated spicy chicken wings, ready to cook for parties.",
      rating: 5,
      category: "Poultry & Snacks",
      price: 390.0,
      currency: "$",
      iconBtnss: [
        {
          icons: <FaRegHeart />,
          title: "heart",
          id: 1,
        },
        {
          icons: <IoEyeOutline />,
          title: "eye",
          id: 2,
        },
      ],
    },
  ];

  // const [getitem,setgetitem]=useState("")

  // const searchproduct=product.filter((item)=>
  // item.description.toLowerCase().includes(getitem.toLowerCase())
  // )

  const [getVal, setGetVal] = useState("")

  const searchProduct = product.filter((item) =>
    item.title.toLowerCase().includes(getVal.toLowerCase())
  );

  return (
    <div className="py-10 px-5 bg-[#EFF5EE] min-h-screen">
      <div className="bg-white rounded-xl p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold text-gray-700">Show all results</p>
          {/* <button className="border h-10 rounded-2xl w-40 flex justify-between items-center px-4 hover:bg-gray-100">
            Search <IoIosSearch />
          </button> */}
          <div className="relative w-60">
            <input
              type="text"
              onChange={(e) => setGetitem(e.target.value)}
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              placeholder="Search"
            />
            <IoIosSearch className="absolute right-3 top-2.5 text-gray-500 text-xl pointer-events-none" />
          </div>

        </div>

        {/* Categories */}
        <ul className="flex justify-center gap-4 mb-6 flex-wrap">
          <li className="border p-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100">
            All
          </li>
          <li className="border p-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100">
            Breakfast
          </li>
          <li className="border p-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100">
            Lunch
          </li>
          <li className="border p-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100">
            Dinner
          </li>
        </ul>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {searchProduct.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{item.description}</p>
              <div className="text-yellow-500 mb-2">
                {"★".repeat(item.rating)}
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">
                  {item.currency}
                  {item.price}
                </span>
                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full text-xl">
                  <CiShoppingCart />
                </button>
              </div>
              <div className="flex gap-3">
                {item.iconBtnss.map((btn) => (
                  <button
                    key={btn.id}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-xl"
                    title={btn.title}
                  >
                    {btn.icons}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
