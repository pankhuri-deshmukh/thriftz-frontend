import React from 'react'
import card1 from '../assets/n4.jpg'
import card2 from '../assets/n5.jpg'
import card3 from '../assets/n6.jpg'
import card4 from '../assets/n7.jpg'
import card5 from '../assets/n8.jpg'



const Allproducts = () => {
  return (
    <div>
    <h4 className='text-5xl font-bold mx-4 my-4 text-center'>All Products</h4>
    
    <div className='w-full flex'>
        <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card1} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Bazinga </h6>
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
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Blue Denim Shirt </h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">Allen Solly</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 699</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">willow_says</p>
        
    </div>
</div>
<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card3} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Striped Cotton Shirt</h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">U.S. Polo</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 400</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">ashwin_d</p>
        
    </div>
</div>
<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card4} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Chocolate Brown Shirt</h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">Blackberry</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 900</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">maybe_maybe</p>
        
    </div>
</div>
<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4">
    <a href="#">
        <img class="rounded-t-lg" src={card5} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Grey Cotton Shirt</h6>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-center">Cotton On</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">₹ 800</p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 text-center">maya-k</p>
        
    </div>
</div>
</div>
</div>
  )
}

export default Allproducts