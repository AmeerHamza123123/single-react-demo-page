import React from 'react'
import image from "../images/paint.png"
export default function Experts() {
  return (
    <div className=' m-2 md:grid grid-cols-3 px-3  max-w-[1200px]'>
        <div className="col-span-1 ">
            <img src={`${image}`} alt="" />
        </div>
        <div className="col-span-2 mx-auto my-1 text-left ">
            <h2 className='text-2xl font-bold text-green-400 '>Learn from Experts</h2>
            <p className='font-serif '> 
            Unleash your creativity with our intuitive web app for graphic designing. Create stunning visuals, collaborate seamlessly, and stay inspired with a vast library of resources. Join our community and elevate your design game today. Let your imagination soar!
            -center items-centerflex justify-center items-centerflex justify-center items-centerflex justify-center items-centerflex justify-center items-centerflex justify-center items-center
            </p>
            <button className='px-6 py-1 mt-1 text-white bg-black rounded'>Get started</button>
            </div>

    </div>
  )
}
