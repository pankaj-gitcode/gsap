import React, { Component } from 'react'
import { images } from '../utils/utilities'

export default class ScrollTrigger extends Component {
  render() {
    return (
      <div id='parent' className=' w-full bg-black'>
        <div id='container' className='flex items-center justify-center w-full'>
            <div id='card' className='bg-[#2E231D] w-[60vw] h-[60vh]'>
                {
                    images.map(elem=>
                    <div key='elem'>
                        <img src={elem} alt={elem} />
                        <h1>The <br/>Algorithm</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, a? Nostrum, explicabo exercitationem animi ipsum sequi impedit, reprehenderit voluptatem eveniet minus beatae neque totam quis.</p>
                    </div>
                    )
                }
            </div>
        </div>
      </div>
    )
  }
}




// TODO: 1. parent div
// TODO: 2. container div
// TODO: 3. Card div
// TODO: 4. img, header & p tags div
