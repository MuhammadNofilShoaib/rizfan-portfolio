import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-[rgb(235,254,255)] px-[20px] md:px-[46.5px] lg:px-[50.5px] pt-[53px] pb-[42px] largest:px-[350px]'>
            <div className="flex justify-center items-center flex-col  md:items-start">
                <p className="capitalize text-[#457B9D] font-[600] text-[28px] leading-[35.28px] text-justify">contacts</p>
                <p className='capitalize text-black font-[700] text-[40px] md:text-[49px] leading-[60.48px] text-justify'>get in touch</p>
                <Link href="mailto:" className='font-[400] text-[20px] leading-[25.2px] text-justify'>rizfanher@gmail.com</Link>
                <div className="flex gap-[25px] items-center">
                    <FaLinkedin className='text-[#457B9D] w-10 h-16' />
                    <FaGithub className='text-[#457B9D] w-10 h-16' />
                    <FaInstagram className='text-[#457B9D] w-10 h-16' />
                </div>
                <p className='font-[400] text-[20px] leading-[25.2px] mt-3 text-center md:text-left md:mt-[50px] lg:mt-[78px]'>Copyright © 2023. Develop & Designed by Rizfan Herlaya</p> 
            </div>
        </div>
    )
}

export default Footer
