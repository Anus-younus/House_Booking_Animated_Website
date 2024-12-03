import React from 'react'
import { FaFacebookF, FaHome, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-20 pb-12 bg-black '>
            <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
                {/* first foorter part */}
                <div className=''>
                    <div className='flex items-center space-x-2'>
                        <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
                            <FaHome />
                        </div>
                        <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
                    </div>
                    <p className='text-gray-300 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate facere eius.</p>
                    <p className='text-gray-300 mt-4 font-semibold'>example@gmail.com</p>
                    <p className='text-gray-300 mt-2 font-semibold'>+123 456 789</p>
                    <div className='flex items-center space-x-4 mt-6'>
                        <FaFacebookF className='w-6 h-6 text-blue-600' />
                        <FaTwitter className='w-6 h-6 text-sky-500' />
                        <FaYoutube className='w-6 h-6 text-red-700' />
                        <FaInstagram className='w-6 h-6 text-pink-600' />
                    </div>
                </div>
                {/* 2nd part */}
                <div className='md:mx-auto'>
                    <h1 className='footer_heading'>Popular Search</h1>
                    <p className='footer_link'>Appartment For Rent</p>
                    <p className='footer_link'>Appartment Low to High</p>
                    <p className='footer_link'>Offices For Buy</p>
                    <p className='footer_link'>Offices For Rent</p>
                </div>
                {/* 3rd part */}
                <div className='md:mx-auto'>
                    <h1 className='footer_heading'>Quick Link</h1>
                    <p className='footer_link'>Terms of use</p>
                    <p className='footer_link'>Privacy Policy</p>
                    <p className='footer_link'>Pricing Plan</p>
                    <p className='footer_link'>Our Services</p>
                    <p className='footer_link'>Contact Support</p>
                    <p className='footer_link'>Carres</p>
                    <p className='footer_link'>FAQ`s</p>
                </div>
                {/* 4th part */}
                <div className='md:mx-auto'>
                    <h1 className='footer_heading'>Discover</h1>
                    <p className='footer_link'>Miami</p>
                    <p className='footer_link'>Los Angelses</p>
                    <p className='footer_link'>Chicago</p>
                    <p className='footer_link'>Newyork</p>
                    <p className='footer_link'>London</p>
                </div>
            </div>
            <p className='text-center text-base mt-4 text-white opacity-70'>@Copyright 2024 by Anas Younus</p>
        </div>
    )
}

export default Footer