import React from 'react'

export default function NewsLatter() {
  return (
    <div className=' bg-[#2699fb] px-3  py-[100px] '>
        <div className='grid-cols-2 mx-auto ml-9 md:grid'>
        <div className="m-6 text-left ">
            <h1 className='md:text-[25px] font-bold text-white  ' >Wants to learn latest I.T skills?</h1>
            <span className=' mt-0 md:text-[16px]  text-[11px]'>Sign up to our newsletter and stay upto date.</span>
            </div>
        <div className="items-center justify-center ml-3 text-left mt-7">
        <input type="text" placeholder='Email' className='h-[30px] mr-2 rounded px-1 ' /> 
        <button className='h-[30px] text-white px-2 bg-black rounded '>Get started</button>
       <br/>
       <span >
        <p className='mt-2 text-white'>we care about the protection of your data. Read our privacy policy.</p>
       </span>
        </div>

    </div>
    </div>
  )
}
