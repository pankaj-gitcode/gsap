import React from 'react'
import { images } from '../utils/utilities'
export default function ScrollTrigger(){
  return(<>
    <div className='h-[400vh] bg-black flex flex-col items-center justify-center gap-2 '>

        {/* ---------------- CARD-1 ------------------- */}
      <div className='sticky top-20 bg-[#2E231D] flex flex-col items-center justify-center w-[36vw] lg:w-[22vw] py-10 px-5 rounded-xl'>
          
          <img src={images[0]} alt={images[0]} className='w-[180px] aspect-square'/>
          <h1 className='text-[#ada29b] text-3xl font-thin text-center'>The 
            <span className='text-white font-bold'><br/>Algorithm</span>
          </h1>
          <p className='text-[#ada29b] text-xs py-6 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi amet quas.</p>
      </div>
          {/* ---------------- CARD-2 ------------------- */}
            <div className='sticky top-20 z-1 bg-[#2E231D] flex flex-col items-center justify-center w-[36vw] lg:w-[22vw] py-10 px-5 rounded-xl'>
          
          <img src={images[0]} alt={images[1]} className='w-[180px] aspect-square'/>
          <h1 className='text-[#ada29b] text-3xl font-thin text-center'>The 
            <span className='text-white font-bold'><br/>Algorithm</span>
          </h1>
          <p className='text-[#ada29b] text-xs py-6 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi amet quas.</p>
      </div>

          {/* ---------------- CARD-3 ------------------- */}
            <div className='sticky top-20 z-2 bg-[#2E231D] flex flex-col items-center justify-center w-[36vw] lg:w-[22vw] py-10 px-5 rounded-xl'>
          
          <img src={images[0]} alt={images[2]} className='w-[180px] aspect-square'/>
          <h1 className='text-[#ada29b] text-3xl font-thin text-center'>The 
            <span className='text-white font-bold'><br/>Algorithm</span>
          </h1>
          <p className='text-[#ada29b] text-xs py-6 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi amet quas.</p>
      </div>

          {/* ---------------- CARD-4 ------------------- */}
            <div className='sticky top-20 z-3 bg-[#2E231D] flex flex-col items-center justify-center w-[36vw] lg:w-[22vw] py-10 px-5 rounded-xl'>
          
          <img src={images[0]} alt={images[3]} className='w-[180px] aspect-square'/>
          <h1 className='text-[#ada29b] text-3xl font-thin text-center'>The 
            <span className='text-white font-bold'><br/>Algorithm</span>
          </h1>
          <p className='text-[#ada29b] text-xs py-6 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi amet quas.</p>
      </div>

          {/* ---------------- CARD-5 ------------------- */}
            <div className='sticky top-20 z-4 bg-[#2E231D] flex flex-col items-center justify-center w-[36vw] lg:w-[22vw] py-10 px-5 rounded-xl'>
          
          <img src={images[0]} alt={images[4]} className='w-[180px] aspect-square'/>
          <h1 className='text-[#ada29b] text-3xl font-thin text-center'>The 
            <span className='text-white font-bold'><br/>Algorithm</span>
          </h1>
          <p className='text-[#ada29b] text-xs py-6 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi amet quas.</p>
      </div>

          {/* ---------------- CARD-6 ------------------- */}
            <div className='sticky top 1 z-5 bg-[#2E231D] flex flex-col items-center justify-center w-[36vw] lg:w-[22vw] py-10 px-5 rounded-xl'>
          
          <img src={images[0]} alt={images[5]} className='w-[180px] aspect-square'/>
          <h1 className='text-[#ada29b] text-3xl font-thin text-center'>The 
            <span className='text-white font-bold'><br/>Algorithm</span>
          </h1>
          <p className='text-[#ada29b] text-xs py-6 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi amet quas.</p>
      </div>




    </div>
  </>)
}




// TODO: 1. parent div
// TODO: 2. container div
// TODO: 3. Card div
// TODO: 4. img, header & p tags div
