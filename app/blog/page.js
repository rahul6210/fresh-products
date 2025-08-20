import React from 'react'
import { blogData } from '../Components/BlogCard1';
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';
import slugify from '../slugify';



export const metadata = {
  title: "TastyDaily Blog – Latest Recipes, Tips & Food Trends",
  description: "Stay updated with TastyDaily's latest blog posts covering delicious recipes, health tips, cooking guides, and trending food topics for every foodie.",
};


export default function page() {
  return (
    <div>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 gapx-6 gap-y-20 px-5 md:px-5 xl:px-10 py-10 xl:py-15 bg-[#EFF5EE]'>
        {blogData.map((items, index) => (
          <div key={index} className="bg-white rounded-2xl shadow overflow-hidden relative flex flex-col h-full">
 <Link href={`/blog/${slugify(items.title)}`}>
            <img
              src={items.image}
              alt=""
              className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover rounded-t-2xl"
            />
</Link>

            <div className="h-8 w-40 border rounded-2xl flex justify-center items-center text-[#00AA63] bg-white font-semibold absolute top-40 md:top-50 lg:top-60 left-4 text-sm md:text-base shadow">
              {items.date}
            </div>

            <div className="px-5 md:px-6 py-6 md:py-8 flex flex-col gap-4 bg-white">
               <Link href={`/blog/${slugify(items.title)}`} className="text-xl md:text-2xl font-bold hover:text-[#00AA63] transition duration-300">
                {items.title}
              </Link>
              <p className="text-sm md:text-base text-gray-700">{items.description}</p>
              <p className="text-sm text-gray-600 font-medium">{items.category}</p>

              <Link href={`/blog/${slugify(items.title)}`} className="flex items-center gap-2 text-[#00AA63] font-semibold cursor-pointer">
                Read More
                <IoIosArrowRoundForward className="text-xl" />
              </Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

