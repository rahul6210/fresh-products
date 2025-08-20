
import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import slugify from '@/app/slugify';
import BlogDeatil from '@/app/Components/BlogDeatil';
import { blogData } from '@/app/Components/BlogCard1';


export const generateStaticParams = () => {
  return blogData
    .filter((item) => item?.title) // optional: safety check
    .map((item) => ({
      slug: slugify(item.title),
    }));
};


export default function BlogPage({ params: { slug } }) {



  const findSinlgeBlog = blogData.find((item) => slugify(item.title) == slug)
  return (
    <div>
      <BlogDeatil findSinlgeBlog={findSinlgeBlog} />

    </div>
  );
}
