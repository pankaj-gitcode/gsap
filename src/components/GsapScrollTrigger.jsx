import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

export default function GsapScrollTrigger(){
    useGSAP(()=>{
        gsap.to('#c', {
            ScrollTrigger:'#c',
            x:400,
            rotation:360,
            duration:3
        })
    }, [])
    return(<>
        <div className='h-[200vh] bg-slate-500 flex flex-col gap-10 items-center justify-center '>
            <div id="a" className='box w-28 h-28 rounded-xl bg-orange-500'>Box-A</div>
            <div id="b" className='box w-28 h-28 rounded-xl bg-indigo-500'>Box-B</div>
            <div id="c" className='box w-28 h-28 rounded-xl bg-green-500'>Box-C</div>
        </div>
    </>)
}