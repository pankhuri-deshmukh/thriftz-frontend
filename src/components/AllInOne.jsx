import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Our Features</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        In the age of fast fashion and throwaway mentality, our online thrift store provides an economical and environmentally friendly alternative to buying new things.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Unique Try-On Feature</h3>
              <p className='text-lg pt-2 pb-4'>
                We offer a unique try-on feature that allows you to try on the clothes you like before you buy them.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Amazing Return Policy</h3>
              <p className='text-lg pt-2 pb-4'>
                Buyers get 24 hours to return any damaged articles, with submission of valid proof.
              </p>
            </div>
          </div>
          
          
          
             <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Secure Payment Gateway</h3>
              <p className='text-lg pt-2 pb-4'>
                We offer a secure payment gateway with the help of Polygon.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Minimal Selling Fee</h3>
              <p className='text-lg pt-2 pb-4'>
                Sellers get the chance to sell their products to a wide audience with just a minimal selling fee that is automatically adjusted. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;
