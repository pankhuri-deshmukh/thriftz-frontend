import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
               
                <h4 className='py-3 text-2xl md:text-7xl font-bold'>Super Value Deals</h4>
                <h5 className='py-3 text-1xl md:text-7xl '>60% Off Site-wide</h5>
                <p className='text-2xl'>The online store we all need; the environment too.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Explore More</button>
            </div>
            <div>
                <img className='container px-40 py-8' src={bgImg} alt="/" />
            </div>
             
            
        </div>
    </div>
  )
}

export default Hero