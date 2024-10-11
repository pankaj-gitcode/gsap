import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

export default function GsapFrom(){

    useGSAP(()=>{
        gsap.from('#gsapFrom', {
            x:350,
            repeat:-1,
            yoyoEase:true,
            repeatDelay:0.2,
            rotate:360,
            ease:'circ.inout'
        })
    }, [])

    return(<>
        <div className='bg-slate-500 h-[100vh] flex items-center pl-2 '>
        <div id='gsapFrom' className='size-28 bg-green-500 rounded-xl flex items-center justify-center'>
            GsapFrom
        </div>
       </div>
    </>)
}