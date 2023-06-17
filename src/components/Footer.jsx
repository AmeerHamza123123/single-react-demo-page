import React from 'react'
import {CiFacebook} from"react-icons/ci";
import {CiTwitter} from"react-icons/ci";
import {AiOutlineGithub} from"react-icons/ai";

import {AiOutlineInstagram} from"react-icons/ai";

export default function Footer() {
  return (
    <div className='grid-cols-5 gap-3 px-10 py-[70px] bg-blue-500 border border-black md:grid'>
        <div className='col-span-2 text-left md:mt-5 '>
            <span className='font-bold md:text-2xl'><h1 >General company</h1></span>
            <span className='pt-6 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus ullam quod quasi nemo?</span>
           <span className='flex mt-3 text-3xl text-white gap-11 flex-justify'> <CiFacebook/> <CiTwitter/> <AiOutlineInstagram/><AiOutlineGithub/></span>
            </div>
            <div className='flex flex-col items-center justify-center mt-2 '>  
                <ul className='text-left text-white'>
                    <li><h2 className='font-bold text-black sm:text-l '>Solutions</h2></li>
                    <li><h2>Analytics</h2></li>
                    <li><h2>Marketing</h2></li>
                    <li><h2>Commerce</h2></li>
                    <li><h2>Insight</h2></li>
                </ul></div>
                <div className='flex flex-col items-center justify-center mt-2 '>  
                <ul className='text-left text-white'>
                    <li><h2 className='font-bold text-black sm:text-l '>Support</h2></li>
                    <li><h2>Pricing</h2></li>
                    <li><h2>Documentation</h2></li>
                    <li><h2>Guides</h2></li>
                    <li><h2>Api status</h2></li>
                </ul></div>
                <div className='flex flex-col items-center justify-center mt-2 '>  
                <ul className='text-left text-white'>
                    <li><h2 className='font-bold text-black sm:text-l '>Comapny</h2></li>
                    <li><h2>About</h2></li>
                    <li><h2>Blog</h2></li>
                    <li><h2>Jobs</h2></li>
                    <li><h2>Careers</h2></li>
                </ul></div>
    </div>
  )
}
