import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-12'>
      <div className='w-full h-[384px] bg-gray-900/90 absolute'>
        <img className='w-full h-96 object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Fresh Fridays!</h2>
              <h5 className='text-5xl font-bold py-6 text-center'>NEW STOCK ADDED</h5>
              <p className='py-4 text-3xl text-slate-300 text-center'>Get extra 10% off this weekend! </p>
              <div className="flex justify-center">
              <button className='py-3 px-6 sm:w-[40%] my-4 text-xl content-center'>Explore More</button>
              </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              
          </div>
      </div>
  </div>
  );
};

export default Support;
