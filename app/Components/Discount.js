import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Discount() {
    
    return (
        <div data-aos="fade-down">
            <div className='md:flex md:flex-col lg:flex lg:flex-row  w-full px-4 md:px-12 xl:px-16 py-8 md:py-12 xl:py-16 bg-[#EFF5EE]   '>

                <div className='bg-white flex flex-col gap-5 md:flex md:flex-row  rounded-2xl lg:flex  lg:flex-col lg:w-[50%] '>
                    <div className=' bg-[url(/image/Discount/tastydaily-2825920093.jpg)] bg-contain bg-no-repeat  h-[400px] lg:h-[610px] px-5 py-5 md:px-10 md:py-10 rounded-2xl '>
                        <h2 className=' text-4xl  lg:text-5xl font-semibold '>Today Discounts
                        </h2>
                        <p className='flex gap-2 items-center text-[14px]  font-semibold hover:text-red-400  '>
                            VIEW ALL <span> <GoArrowRight /></span>
                        </p>
                    </div>
                    <div className='md:flex md:flex-col  md:py-10 md:bg-white rounded-2xl '>
                        <div className='flex gap-30 px-10 '>
                            <div className='flex flex-col gap-5 '>
                                <p className='hover:text-red-400'>
                                    Vegetable</p>
                                <p className='hover:text-red-400'> Fresh fruits</p>
                                <p className='hover:text-red-400'> Meat</p>
                                <p className='hover:text-red-400'>  Seafood</p>
                                <p className='hover:text-red-400'>   Eggs</p>

                            </div>

                            <div className='flex flex-col gap-5'>
                                <p className='hover:text-red-400'> Baking
                                </p>
                                <p className='hover:text-red-400'>Drinks</p>
                                <p className='hover:text-red-400'>Cheese</p>
                                <p className='hover:text-red-400'>Milk</p>

                            </div>

                        </div>

                        <p className='flex gap-2 items-center text-[14px]  py-6 font-semibold px-10 hover:text-red-400 bg-white '>
                            VIEW ALL <span> <GoArrowRight /> </span></p>
                    </div>
                </div>

                <div className='md:flex'>

                    <div className='md:[50%] lg:w-[50%] border-2 border-gray-100  bg-white  '>

                        <div className=' flex flex-col '>

                            <div className="h-[300px] group lg:w-full bg-[url('/image/Discount/tastydaily-2656013442.jpg')] bg-cover bg-center relative hover:bg-[url('/image/Discount/tastydaily-2656053651.jpg')]">

                                <div className='py-3 px-2 text-white flex gap-2 font-semibold '>
                                    <p className='bg-[#5B73D6] p-1 rounded-full text-center h-[30px] text-[15px] w-[110px] '>MARKDOWN</p>
                                    <p className='h-[30px] w-[60px] p-0.5 text-center rounded-2xl text-[15px] bg-[#00975C]'>NEW</p>
                                    <p className='h-[30px] w-[60px] p-0.5  text-center rounded-2xl text-[15px] bg-[#EC6E55]'>-13%</p>
                                </div>
                                <div className='hidden group-hover:block'>
                                    <p className='h-10 w-10 rounded-full bg-white  absolute  top-2 right-5  flex justify-center items-center hover'> <span><FaRegHeart /></span> </p>
                                    <p className='h-10 w-10  rounded-full bg-white absolute top-15 right-5 flex justify-center items-center '> <span><MdOutlineRemoveRedEye /></span> </p>

                                </div>

                                <div>
                                    <div className='h-10 w-10 rounde'></div>
                                </div>
                            </div>

                            <div className='px-7'>

                                <div className='h-2 w-full bg-[#00000037] rounded-2xl my-5'>
                                    <div className='h-2 w-[70%] bg-red-500 rounded-2xl'></div>
                                </div>
                                <div className='flex justify-between '>
                                    <p>Sold: 40</p>
                                    <p>Available: 21</p>
                                </div>
                                <p className='py-4 font-semibold hover:text-red-400'>Mint</p>
                                <p>The mint plant is a herbaceous perennial that is widely known</p>
                                <p className='py-3'>Leafy Green</p>
                                <div>
                                    <select name="" id="" className='w-[100%] p-3'>
                                        <option value="">choose an option</option>
                                        <option value="">big</option>
                                        <option value="">medium</option>
                                        <option value="">small</option>
                                    </select>
                                </div>
                                <div className='flex justify-between items-center text-xl pb-5'>
                                    <p className='text-2xl font-bold text-red-500'>$13.00-$22.00</p>
                                    <p><CiShoppingCart /></p>

                                </div>


                            </div>
                        </div>
                        <hr className='text-gray-300' />
                        <div className='flex flex-col bg-white '>
                            <div className='group h-[300px]  lg:w-full py-2 bg-[url(/image/Discount/tastydaily-12656409750.jpg)] bg-cover bg-center relative hover:bg-[url(/image/Discount/tastydaily-3656458089.jpg)]'>
                                <div className='text-white font-semibold flex gap-2 py-3 px-2'>
                                    <p className='h-[25px] w-[60px] p-0.5 border text-center rounded-2xl text-[13px] bg-[#00975C]'>NEW</p>
                                    <p className='h-[25px] w-[60px] p-0.5 border text-center rounded-2xl text-[13px] bg-[#EC6E55]'>-20%</p>

                                </div>
                                <div className='hidden group-hover:block'>
                                    <p className='h-10 w-10  rounded-full bg-white  absolute  top-2 right-5 flex justify-center items-center hover:z-22'> <span><FaRegHeart /></span> </p>
                                    <p className='h-10 w-10  rounded-full bg-white absolute top-15 right-5 flex justify-center items-center '> <span><MdOutlineRemoveRedEye /></span> </p>

                                </div>

                            </div>
                            <div className='py-3 px-7'>
                                <p className='py-4 font-bold hover:text-red-400'>Basil</p>
                                <p>The mint plant is a herbaceous perennial that is widely known</p>
                                <p className='py-3'>Leafy Green</p>
                                <div>
                                    <select name="" id="" className='w-[100%] p-4 bg-[#FAF3EF] border font-semibold'>
                                        <option value="">2 Units</option>
                                        <option value="">4 Units</option>
                                        <option value="">6 Units</option>
                                        <option value="">8 Units</option>
                                    </select>
                                </div>
                                <p className='border w-[30%] rounded-2xl bg-black text-white text-center text-[15px] my-4 '>145 in stock</p>
                                <div className='flex justify-between items-center text-xl pb-5'>
                                    <div className='text-2xl font-bold text-red-500'>
                                        <p className='text-lg text-[#00000054] line-through'>$10.00</p>
                                        <p>$8.00</p>
                                    </div>
                                    <p className='h-10 w-10 rounded-full flex justify-center items-center text-2xl bg-[#00000021]'><CiShoppingCart /></p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='md:w-[75%] lg:w-[50%] border border-gray-100 bg-white'>



                        <div className="h-[300px] group lg:w-full bg-[url(/image/Discount/tastydaily2657427560.jpg)] bg-cover bg-center relative hover:bg-[url(/image/Discount/tastydaily657717900.jpg)] duration-600 ease-in-out ">

                            <div className='py-3 px-2 text-white flex gap-2 font-semibold'>
                                <p className='h-[30px] w-[60px] p-0.5  text-center rounded-2xl text-[15px] bg-[#EC6E55]'>-25%</p>
                            </div>
                            <div className='hidden group-hover:block'>
                                <p className='h-10 w-10 rounded-full bg-white  absolute  top-2 right-5  flex justify-center items-center hover'> <span><FaRegHeart /></span> </p>
                                <p className='h-10 w-10  rounded-full bg-white absolute top-15 right-5 flex justify-center items-center '> <span><MdOutlineRemoveRedEye /></span> </p>

                            </div>

                            <div>
                                <div className='h-10 w-10 rounde'></div>
                            </div>
                        </div>

                        <div className='px-7'>

                            <div className='h-2 w-full bg-[#00000037] rounded-2xl my-5'>
                                <div className='h-2 w-[25%] bg-red-500 rounded-2xl'></div>
                            </div>
                            <div className='flex justify-between '>
                                <p>Sold: 46</p>
                                <p>Available: 128</p>
                            </div>
                            <p className='py-4 font-semibold hover:text-red-400'>Oyster Mushroom 500 gr
                            </p>
                            <p>Oyster Mushrooms are a healthy choice since they are very nutritious and low.</p>
                            <p className='py-3'>Mushrooms</p>
                            <div className='flex gap-3'>

                                <img src="/image/Discount/tastydaily0829328083-50x50.webp" className='h-7' alt="" />
                                <img src="/image/Discount/tastydaily-0829402282-50x50.webp" className='h-7' alt="" />

                            </div>


                            <p className='border w-[30%] rounded-2xl bg-black text-white text-center text-[15px] my-2 '>145 in stock</p>
                            <div className='flex justify-between items-center text-xl pb-5'>
                                <div className='text-2xl font-bold text-red-500'>
                                    <p className='text-lg text-[#00000054] line-through'>$10.00</p>
                                    <p>$12.00</p>
                                </div>
                                <p className='h-10 w-10 rounded-full flex justify-center items-center text-2xl bg-[#00000021]'><CiShoppingCart /></p>

                            </div>


                        </div>
                        <hr className='text-gray-300 ' />
                        <div className='group h-[300px] w-full py-2 bg-[url(/image/Discount/tastydaily929917939.jpg)] bg-cover bg-center relative hover:bg-[url(/image/Discount/tastydaily2657511906.jpg)]'>
                            <div className='text-white font-semibold flex gap-2 py-3 px-2'>
                                <p className='h-[25px] w-[60px] p-0.5 border text-center rounded-2xl text-[13px] bg-[#00975C]'>-33%</p>
                                <p className='h-[25px]  p-0.5 px-3 border text-center rounded-2xl text-[13px] bg-[#EC6E55]'>OUT OF STOCK</p>

                            </div>
                            <div className=' hidden group-hover:block '>
                                <p className='h-10 w-10  rounded-full bg-white  absolute  top-2 right-5 flex justify-center items-center hover:z-22'> <span><FaRegHeart /></span> </p>
                                <p className='h-10 w-10  rounded-full bg-white absolute top-15 right-5 flex justify-center items-center '> <span><MdOutlineRemoveRedEye /></span> </p>

                            </div>

                        </div>
                        <div className='px-7'>



                            <div className=' px-2 '>
                                <p className='py-3 font-bold hover:text-red-400'>Kivi</p>
                                <p className='text-[15px]'>Kiwi is a small, oval-shaped fruit with a brown fuzzy exterior and vibrant green interior.</p>
                                <p className='mt-5 py-3'>Tropical & Exotic
                                </p>
                                <div className='flex gap-3'>
                                    <div className='h-8 w-8  rounded-full bg-[#76BD3B]'>

                                    </div>
                                    <div className='h-8 w-8  rounded-full bg-[#E7C520]'>

                                    </div>
                                </div>
                                <p className='border w-[40%] rounded-2xl bg-[#F73E04] text-white text-center text-[13px] my-4 '>OUT OF STOCK</p>


                                <div className='flex justify-between items-center text-xl pb-5'>
                                    <div className='text-2xl font-bold text-red-500'>
                                        <p className='text-lg text-[#00000054] line-through'>$18.00</p>
                                        <p>$15.00</p>
                                    </div>
                                    <p className='h-10 w-10 rounded-full flex justify-center items-center text-2xl bg-[#00000021]'><CiShoppingCart /></p>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
// bg-[#F3B79C]



