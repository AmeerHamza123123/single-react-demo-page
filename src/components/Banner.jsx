import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className=' bg-[#2699fb] py-[100px] '>
        <div className='font-bold '>
            <h3 className='text-xl md:text-2xl'>Learn with us</h3>
            <h1 className='text-3xl text-white md:text-5xl'>Grow with us</h1>

            <div><h3 className='text-2xl black md:text-4xl'>Learn |
            <Typed
                    strings={[' web development',' digital marketing',
                                ' Artificial intelligence']}
                    typeSpeed={70}
                    backSpeed={0} loop>

                    </Typed>
                    </h3>
                    </div>
                        
        </div>
        <button className='px-6 py-1 mt-4 text-white bg-black rounded '>Get started</button>


    </div>
  )
}
