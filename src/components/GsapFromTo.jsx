import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function GsapFromTO(){
    useGSAP(()=>{
        gsap.fromTo('#gsapFromTo', {
            x:0,
            rotate:1,
        }, 
        {
            x:720,
            y:180,
            repeat:-1,
            yoyoEase:true,
            duration:2,
            rotate:180,
            ease: 'elastic.inOut'

        })
    }, [])
    return(<>
        <div className='bg-slate-500 h-[100vh] flex items-center pl-2 '>
        <div id='gsapFromTo' className='size-28 bg-blue-500 rounded-xl flex items-center justify-center'>
            GsapFromTo
        </div>
       </div>
    </>)
}