import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MainApp(){
    const navigateTo = useNavigate();

    const animation = [
        {
          title: "GSAP To",
          description:
            "The to() method is used to animate a single element from a starting state to an ending state.",
          path: "/gsapto",
        },
        {
          title: "GSAP From",
          description:
            "The from() method is used to animate a single element from an ending state to a starting state.",
          path: "/gsapfrom",
        },
        {
          title: "GSAP FromTo",
          description:
            "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
          path: "/gsapfromto",
        },
        {
          title: "GSAP Timeline",
          description:
            "The timeline() method is used to create a timeline to manage multiple animations.",
          path: "/gsaptimeline",
        },
        {
          title: "GSAP Stagger",
          description:
            "The stagger() method is used to animate multiple elements with a stagger effect.",
          path: "/gsapstagger",
        },
        {
          title: "GSAP ScrollTrigger",
          description:
            "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
          path: "/gsapscrolltrigger",
        },
        {
          title: "GSAP Text",
          description: "Learn how to animate text with GSAP.",
          path: "/gsaptext",
        },
      ]

    return(<>
        <div>
            {
                animation.map((elem,index)=>
                    <ol key={index}>
                        <li>{index+1}</li>
                        <li>{elem.title}</li>
                        <li>{elem.description}</li>
                        <li onClick={()=>navigateTo(`${elem.path}`)} className='cursor-pointer'>{elem.path}</li>
                    </ol>
                )
            }
        </div>
    </>)


}




// return(<div className='bg-gray-500 h-screen'>
//     <h1 className="text-6xl text-center underline ">Basic GSAP Methods</h1>
//     <div className="flex items-center justify-start text-2xl ">
//          <ul className='p-10'>
//              <li onClick={()=>navigateTo('/gsapto')}>1. gsap.to()</li>
//              <li ><Link to='/gsapfrom' className='cursor-pointer'>2. gsap.from()</Link></li>
//              <li>3. gsap.fromto()</li>
//              <li>4. gsap.timeline()</li>
             
//          </ul>
//     </div>
// </div>)