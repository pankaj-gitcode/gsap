import gsap from 'gsap'
import React from 'react'
import {useGSAP} from '@gsap/react'



export default function GsapTo(){

    useGSAP(()=>{
        gsap.to('#gsapTo',{
            x:250,
            repeat:-1,
            yoyoEase:true,
            duration: 1,
            repeatDelay:0.2,
            rotate:360
        })
    }, [])


    return(<>
       <div className='bg-slate-500 h-[100vh] flex items-center pl-2 '>
        <div id='gsapTo' className='size-28 bg-orange-500 rounded-xl flex items-center justify-center'>
            GsapTO
        </div>
       </div>
    </>)
}