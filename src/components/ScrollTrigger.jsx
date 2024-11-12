import React, { Component } from 'react'
import { images } from '../utils/utilities'

export default class ScrollTrigger extends Component {
  render() {
    return (
      <div id='parent' className='h-[460vh] w-full bg-black'>
        <div id='container' className='flex items-center justify-center  w-full'>
            <div id='card' className='w-[60vw] flex items-center justify-center flex-col p-20 '>
                {
                    images.map(elem=>
                    <div key='elem' className='w-[40vw] lg:w-[27vw] bg-[#2E231D] mt-2 flex flex-col items-center justify-center py-20 rounded-xl'>
                        <img src={elem} alt={elem} className='h-28 aspect-square'/>

                        <h1 className='text-[#ada29b] text-3xl text-center pt-2 font-thin'>The <span className='text-white font-bold '><br/>Algorithm</span></h1>
                        
                        <p className='text-xs p-5 text-white text-center leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorem Lorem ipsum dolor sit amet consectetur..</p>

                    </div>
                    )
                }
            </div>
        </div>
        {/* <img src='/images/rgh.png' alt="" /> */}
      </div>
    )
  }
}




// TODO: 1. parent div
// TODO: 2. container div
// TODO: 3. Card div
// TODO: 4. img, header & p tags div
