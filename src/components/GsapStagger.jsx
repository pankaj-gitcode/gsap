import React from 'react'
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'

export default function GsapStagger(){

    useGSAP(()=>{
        gsap.to('.stagger-box', {
            y:270,
            repeat:-1,
            yoyoEase:true,
            repeatDelay:1,
            duration:2,
            ease: 'circ.inOut',
            // borderRadius:'100%',
            // stagger:0.2,
            stagger:{
                // amount:1.2,
                each:1.2,
                grid:[2,2],
                from:'start',
                axis:'y'
            }
        })
    }, [])

    return(<>
        <div className='bg-slate-500 h-screen flex items-center justify-center'>

            <div className='flex gap-3'>
                <div className='flex justify-center items-center rounded-lg w-28 h-28 bg-indigo-200 font-semibold stagger-box'>
                    BOX-1
                </div>

                <div className='flex justify-center items-center rounded-lg w-28 h-28 bg-indigo-300 font-semibold stagger-box'>
                    BOX-2
                </div>

                <div className='flex justify-center items-center rounded-lg w-28 h-28 bg-indigo-300 font-semibold stagger-box'>
                    BOX-3
                </div>

                <div className='flex justify-center items-center rounded-lg w-28 h-28 bg-indigo-500 font-semibold stagger-box'>
                    BOX-4
                </div>

                <div className='flex justify-center items-center rounded-lg w-28 h-28 bg-indigo-600 font-semibold stagger-box'>
                    BOX-5
                </div>

                <div className='flex justify-center items-center rounded-lg w-28 h-28 bg-indigo-700 font-semibold stagger-box'>
                    BOX-6
                </div>

                <div className='flex justify-center items-center rounded-lg w-28 h-28 bg-indigo-800 font-semibold stagger-box'>
                    BOX-7
                </div>

            </div>


        </div>
    </>
    )
}
