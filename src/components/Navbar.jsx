import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
export default function Navbar  ()  {
  const [state, setState] = useState(false);
  
  return (
    <nav className=' bg-[#2699fb] px-5'>
      <div className='py-8 justify-between items-center mx-auto max-w-[1100px] flex  '>
        <div className='text-4xl font-bold text-black'>
          General comapny
        </div>
         {
          state?
          <AiOutlineMenu onClick={()=> setState(!state)} className='block text-white md:hidden '/>
          :
          <AiOutlineClose onClick={()=> setState(!state)} className='block text-white md:hidden '/>
         }


      <ul className='flex-row-reverse hidden gap-5 md:flex '>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      
      <ul className={` h-[300px] duration-1000 fixed  mt-[360px] w-[30%] bg-black text-white md:hidden text-left 
                      ${state ? "left-[-100%]":"left-[0]"}`}>
        <li className='p-5'><a href="#">Home</a></li>
        <li className='p-5 '><a href="#">About</a></li>
        <li className='p-5 '><a href="#">Services</a></li>
        <li className='p-5 '><a href="#">Contact</a></li>
      </ul>
      </div>
    </nav>
  );
};

