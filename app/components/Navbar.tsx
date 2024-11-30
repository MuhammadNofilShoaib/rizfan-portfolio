"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";


function Navbar() {
    const [click, setClick] = useState(false)
    const toggleMenu = () => {
        setClick(!click);
    }
    return (
        <div className="z-50 relative">
        <div className="flex justify-between items-center bg-[#EBFEFF] h-[100px] px-[20px] md:px-[46.5px] lg:px-[50.5px]  py-[37.1px] border-b border-[#000000] largest:px-[350px]">
            <div className='font-[700] text-[30px] leading-[37.8px] mr-auto flex justify-center items-center capitalize'>rizfan</div>
            <div className="hidden md:flex justify-center items-center gap-[50px] ml-auto capitalize ">
                <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">home</Link>
                <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">about</Link>
                <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">skill</Link>
                <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">contact</Link>
            </div>
        <button onClick={toggleMenu} className='md:hidden text-black'><FiAlignRight className={`size-[40px] `} />
             </button>
        </div>
        <div className={`${
          click ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        } duration-200 ease-in-out  flex flex-col justify-center items-center gap-[20px] bg-blue-200/20 absolute z-50 w-full capitalize backdrop-blur-md py-5 px-5 rounded-xl border-b-2 border-black/50 `}>
            <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">home</Link>
                <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">about</Link>
                <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">skill</Link>
                 <Link className='font-[400] text-[28px] leading-[35.28px] text-black/70 hover:text-black/100 duration-200 ease-in-out' href="/">contact</Link>
             </div>
        </div>
    )
}

export default Navbar
