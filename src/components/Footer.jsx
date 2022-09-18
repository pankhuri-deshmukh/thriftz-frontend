import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name="footer" className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
                <h6 className='font-bold uppercase pt-2'>Thriftz</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Contact</li>
                    <li className='py-1'>Info</li>
                    
                </ul>
            </div>
            
            <div>
                <h6 className='font-bold uppercase pt-2'>Customer Service</h6>
                <ul>
                    <li className='py-1'>How it Works</li>
                    <li className='py-1'>Privacy Policy</li>
                    <li className='py-1'>Terms and Conditions</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Your Account</h6>
                <ul>
                    <li className='py-1'>Your Orders</li>
                    <li className='py-1'>Info</li>
                    <li className='py-1'>Contact</li>
                    
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Thriftz. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer