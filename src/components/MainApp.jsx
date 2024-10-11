import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MainApp(){
    const navigateTo = useNavigate();

    return(<div className='bg-gray-500 h-screen'>
        <h1 className="text-6xl text-center underline ">Basic GSAP Methods</h1>
        <div className="flex items-center justify-start text-2xl ">
             <ul className='p-10'>
                 <li onClick={()=>navigateTo('/gsapto')}>1. gsap.to()</li>
                 <li ><Link to='/gsapfrom' className='cursor-pointer'>2. gsap.from()</Link></li>
                 <li>3. gsap.fromto()</li>
                 <li>4. gsap.timeline()</li>
                 
             </ul>
        </div>
    </div>)
}