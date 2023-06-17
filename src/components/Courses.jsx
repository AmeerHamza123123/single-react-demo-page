import React from 'react'
import {DiCode} from "react-icons/di"
import {SiTaichigraphics} from "react-icons/si"
import {BiAtom} from "react-icons/bi"



export default function Courses() {
  return (
    <div>
        <div className='grid-cols-3 py-6 mt-5 px-7 gap-7 md:grid'>
            <div className=' shadow-xl bg-gray-400 rounded h-[290px] sm:mt-3 sm:w-[100%] my-6 hover:scale-105 duration-[400ms] flex justify-center items-center flex-col  '>
                <h1 className='text-5xl text-green-700'><DiCode/></h1>
                <h2 className='font-bold text-orange-800'>Web development</h2>
                <h2 className='font-bold text-orange-800'>$39</h2>
                <h3 className='md:w-[60%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam pariatur et voluptatum .</h3>
                <button className='px-6 py-1 mt-4 text-black bg-green-500 rounded '>Start Trial</button>

            </div>
            <div className=' shadow-xl bg-gray-400 rounded h-[290px] sm:mt-3 sm:w-[100%] my-6 hover:scale-105  duration-[400ms] flex justify-center items-center flex-col'>
            <h1 className='text-5xl text-green-700'><BiAtom/></h1>
                <h2 className='font-bold text-orange-800'>Artificial intelligence</h2>
                <h2 className='font-bold text-orange-800'>$39</h2>
                <h3 className='md:w-[60%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam pariatur et voluptatum .</h3>
                <button className='px-6 py-1 mt-4 text-black bg-green-500 rounded '>Start Trial</button>

            </div>
            <div className=' shadow-xl bg-gray-400 rounded h-[290px] sm:mt-3 sm:w-[100%] my-6 hover:scale-105  duration-[400ms] flex justify-center items-center flex-col'>
            <h1 className='text-5xl text-green-700'><SiTaichigraphics/></h1>
                <h2 className='font-bold text-orange-800'>Graphic design</h2>
                <h2 className='font-bold text-orange-800'>$39</h2>
                <h3 className='md:w-[60%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam pariatur et voluptatum .</h3>
                <button className='px-6 py-1 mt-4 text-black bg-green-500 rounded '>Start Trial</button>

            </div>
        </div>
    </div>
  )
}
