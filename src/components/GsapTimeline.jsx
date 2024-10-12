import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function GsapTimeline(){

    const tl = gsap.timeline({repeatDelay:0.2, repeat:-1, yoyoEase:true})

    useGSAP(()=>{
             
    tl.fromTo('#gsapTimeline', {
        x:0
    },{x:720, duration:1, ease:'back.out'})

    tl.to('#gsapTimeline', {
        y:250, duration:2, ease:'back.in'
    },
    tl.to('#gsapTimeline', {
        x:250, duration:3, scale:2, ease:'back.inOut', borderRadius:'100%'
    })
)
    
    }, [])

    return(<>
        <div className='bg-slate-500  '>
                {/* --------------- BUTTON ----------------- */}
            <div className='bg-slate-500 flex items-center justify-center h-28'>
            <button className='bg-indigo-500 rounded-lg p-3 active:scale-105'
            onClick={()=>tl.paused()?tl.play():tl.pause()} >
                Play/Pause
            </button>

            </div>
                  {/* --------------- BOX ------------ */}
                <div className='h-screen flex flex-col justify-center'>
                    
                    <div id='gsapTimeline'className='w-28 h-28 bg-yellow-500 rounded-xl flex items-center font-semibold pl-1'>
                        gsapTimeline
                    </div>

                </div>
        </div>
    </>)
}