import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link'
export default function BlogDeatil({findSinlgeBlog}) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="py-10 flex justify-center items-center gap-3 text-sm text-gray-600">
        <Link href="/">Home</Link>
        <MdOutlineKeyboardArrowRight/>
        <Link href="/blog">Blog</Link>
        <MdOutlineKeyboardArrowRight/>
        <span className="text-black font-medium">
                     {findSinlgeBlog.title}

        </span>
      </div>

      {/* Title */}
      <div className="text-4xl font-semibold flex justify-center text-center mb-10">
        <p className="w-[60%]">
            {findSinlgeBlog.title}
        </p>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#f0f5ef] min-h-screen py-10 px-4 md:px-16 lg:px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Article */}
          <div className="lg:col-span-2">
            <div className="rounded overflow-hidden ">
              <Image
                src={findSinlgeBlog.image}
                alt="Cooking blog thumbnail"
                width={100}
                height={500}
                className="rounded  w-full h-auto "
              />
            </div>
            <article className="bg-white rounded-lg shadow p-6">


              {/* Meta Info */}
              <ul className="flex flex-wrap text-sm text-gray-500 gap-4 mt-4">
                <li>
                  By{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                  >
                    Amanda Wilson
                  </a>
                </li>
                <li>October 3, 2023</li>
                <li>
                  <a href="#" className="text-green-600 hover:underline">
                    Cooking
                  </a>
                </li>
              </ul>

              {/* Content */}
              <div className="mt-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  In the hustle and bustle of daily life, preparing nutritious meals for
                  the family can be a challenge. We're here to assist you with quick and
                  family-friendly meal ideas using the diverse products available at our
                  store.
                </p>
                <p className="mt-2">
                  From simple stir-fries to wholesome sheet pan dinners, we’ll show you
                  how to create delicious and balanced meals that the whole family will
                  love, even on the busiest of days.
                </p>
              </div>

              {/* Tags + Share */}
              <div className="mt-6 flex justify-between items-center text-sm">
                <span className="text-blue-600">Cooking</span>
                <span className="text-gray-500">Share 🔗</span>
              </div>
            </article>

            {/* Nav Link */}
            <div className="mt-6">
              <div className="bg-white border rounded-lg px-4 py-3 text-blue-600 hover:underline cursor-pointer">
                ← Going Green: Tips for Sustainable Shopping and Eco-Friendly Choices
              </div>
            </div>

            {/* Comment Box */}
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Post a Comment</h3>
              <p className="text-sm text-gray-600 mb-4">
                Your email address will not be published. Required fields are marked *
              </p>

              <form className="space-y-4">
                <textarea
                  placeholder="Comment *"
                  className="w-full border rounded p-3 min-h-[120px] bg-[#EDF5EC]"
                  required
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    className="border p-2 rounded bg-[#EDF5EC]"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="border p-2 rounded bg-[#EDF5EC]"
                  />
                  <input
                    type="url"
                    placeholder="Website"
                    className="border p-2 rounded bg-[#EDF5EC]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="save" />
                  <label htmlFor="save" className="text-sm">
                    Save my name, email, and website in this browser for the next time I
                    comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className='  h-full w-full'>
            <div className='sticky  top-0'>
              <div className="space-y-6">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-lg font-semibold mb-2">Categories</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {['Cooking', 'Discount', 'Health', 'New', 'Trends'].map((cat) => (
                      <li key={cat}>
                        <a href="#" className="hover:underline">
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Search */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-lg font-semibold mb-2">Search</h4>
                  <div className="flex items-center border rounded">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-1 p-2 outline-none rounded-l"
                    />
                    <button className="p-2">
                      <FaSearch />
                    </button>
                  </div>
                </div>

                {/* Latest Posts */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-lg font-semibold mb-3">Latest Posts</h4>
                  <ul className="space-y-3 text-sm">
                    {[
                      {
                        title: 'Family-Friendly Cooking',
                        img: '/image/blog/tastydaily-0304180933.jpg',
                        date: 'October 3, 2023',
                      },
                      {
                        title: 'Going Green: Tips for Sustainability',
                        img: '/image/blog/tastydaily-0304299666.jpg',
                        date: 'October 3, 2023',
                      },
                      {
                        title: 'DIY Charcuterie Boards',
                        img: '/image/blog/tastydaily-0304299666.jpg',
                        date: 'October 3, 2023',
                      },
                    ].map((post, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Image
                          src={post.img}
                          width={50}
                          height={50}
                          alt={post.title}
                          className="rounded"
                        />
                        <div className='relative'>
                          <div className='sticky'>
                            <p className="font-medium hover:underline">{post.title}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-lg font-semibold mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {['cooking', 'discount', 'food', 'health', 'new', 'trends'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
