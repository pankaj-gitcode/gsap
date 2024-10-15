import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

export default function GsapScrollTrigger(){
    // register the scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.to('#c', {
            x:400,
            rotation:360,
            duration:3,
            scrollTrigger:{
                trigger:'#c',
                toggleActions: "restart pause restart pause",
                markers:true,
                start: 'top 500', // trigger top level (box) reaches 500px of viewport
                end:'+=100'     // end after scrolling 100px beyond the start 
            }
        })
    }, [])
    return(<>
        <div className='h-[200vh] bg-slate-500 flex flex-col gap-10 '>
            <div id="a" className='box w-28 h-28 rounded-xl bg-orange-500'>Box-A</div>
            <div id="b" className='box w-28 h-28 rounded-xl bg-indigo-500'>Box-B</div>
            <div id="c" className='box w-28 h-28 rounded-xl bg-green-500 m-[500px]'>Box-C</div>
        </div>
        
    </>)
}