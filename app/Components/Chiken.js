import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiAnticlockwiseRotation } from "react-icons/gi";


export default function Chiken() {
    return (
        <div>
            <div className='py-10'>
                <div className='flex justify-center items-center h-auto w-full '>
                    <p>home</p>
                    <MdOutlineKeyboardArrowRight />
                    <p> Meat</p>
                </div>
                <div className='text-5xl font-semibold flex justify-center'>Red Meat & Steaks</div>

                <div className='flex justify-center gap-8 text-lg font-semibold text-center   '>
              <div className='flex flex-col gap-3 text-black hover:text-[#00AA70] group'>
                        <div className='h-28 w-28 rounded-2xl flex justify-center items-center text-2xl bg-[#EFF5EE]  transition duration-150 ease-in-out  group-hover:scale-110 '>
                            <GiAnticlockwiseRotation />
                        </div>

                        <p className=''>Shop</p>

                    </div>
                    <div className='flex flex-col gap-3 hover:text-[#00AA70] group '>
                        <div className='h-28 w-28 rounded-2xl  flex justify-center items-center text-2xl transition duration-150 ease-in-out group-hover:scale-110 '>
                            <img src="/image/chiken/tastydaily-2658471696.jpg" alt="" />
                        </div>
                        <p>chicken & Poultry</p>
                    </div>

                    <div className='flex flex-col gap-3 hover:text-[#00AA70]'>
                        <div className='h-28 w-28 rounded-2xl  flex justify-center items-center text-2xl '>

                        </div>
                        <p>Meat Gift Baskets</p>
                    </div>
                    <div className='flex flex-col gap-3 hover:text-[#00AA70] group'>
                        <div className='h-28 w-28 rounded-2xl   flex justify-center items-center text-2xl transition duration-150 ease-in-out group-hover:scale-110 '>
                            <img src="/image/chiken/tastydaily-2658401953.jpg" alt="" />
                        </div>
                        <p className=''>Meat Gift Baskets</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
