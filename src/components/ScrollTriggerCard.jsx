import React, { useEffect, useRef } from 'react'
import { images } from '../utils/utilities'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react';

export default function ScrollTriggerCard(){
  gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef();
  useGSAP(()=>{
    gsap.utils.toArray(scrollRef.current.children).map(elem=>
      gsap.to(elem, {
        scale: 0.8,
        opacity:0,
        scrollTrigger:{
          trigger: elem,
          start: 'top 15%',
          end: 'bottom 15%',
          markers: true,
          scrub: true
        }
      })
  
    )
  }, [])
  return(<>
    <div ref={scrollRef} className='text-[#fff] flex items-center justify-center flex-col gap-3 pb-[25vh] lg:py-[18vh]'>
      {
        images.map((imgs,index)=>
          <div key={index} className='card bg-[#2E231D] w-[35vw] lg:w-[27vw] sticky top-[10vh] py-[10vh] px-[38px] flex flex-col items-center justify-center rounded-2xl'>

            <img src={imgs} alt="images" className='aspect-square w-[20vw]'/>
            <h1 className='text-[#ada29b] text-3xl font-thin text-center pt-2'>The 
              <span className='font-bold text-[#fff]'><br/>Algorithm</span>
            </h1>
            <p className='text-center text-xs pt-3 font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatum neque iure.</p>
          </div>
        )
      }
    </div>
  </>)
}