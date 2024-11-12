import React from 'react'
import { images } from '../utils/utilities'
export default function ScrollTrigger(){
  return(<>
    <div className='h-screen bg-black flex items-center justify-center '>
      <div className='bg-[#2E231D] flex flex-col items-center justify-center w-[36vw] lg:w-[22vw] py-20 px-5'>
          
          <img src={images[0]} alt={images[0]} className='w-[180px] aspect-square'/>
          <h1 className='text-[#ada29b] text-3xl font-thin text-center'>The 
            <span className='text-white font-bold'><br/>Algorithm</span>
          </h1>
          <p className='text-[#ada29b] text-xs py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi amet quas.</p>
      </div>
    </div>
  </>)
}




// TODO: 1. parent div
// TODO: 2. container div
// TODO: 3. Card div
// TODO: 4. img, header & p tags div
