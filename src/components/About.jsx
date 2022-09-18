import React from 'react'
import card1 from '../assets/f1.jpg'
import card2 from '../assets/f6.jpg'
import card3 from '../assets/f7.jpg'
import card4 from '../assets/f8.jpg'


const About = () => {
  return (
    <div>
    <h4 className='text-5xl font-bold mx-4 my-4 text-center'>Featured Products</h4>
    <p className='text-2xl text-center my-8'>Check out our newly launched Summer Collection.</p>
    <div className='w-full flex'>
        <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card1} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Armenian Beach Shirt</h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">Dressberry</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 800</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">willow_says</p>
        
    </div>
</div>
<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card2} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Colour Blocked Casual Jacket</h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">H & M</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 1200</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">Samuel</p>
        
    </div>
</div>
<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card3} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Floral Beige Pants</h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">Khadi India</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 700</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">vansh_wadhwa</p>
        
    </div>
</div>
<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card4} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Flare Kitty Top</h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">AppleQ</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 449</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">anamika</p>
        
    </div>
</div>
</div>
</div>
  )
}

export default About