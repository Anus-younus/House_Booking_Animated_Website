"use client"
import React from 'react'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type MobileNavbarProps = {
  closeNav: () => void,
  showNav:boolean
}


const MobileNavbar = ({ closeNav, showNav }: MobileNavbarProps) => {

  const navOpen = showNav? 'translate-x-0': 'translate-x-[-100%]'

  return (
    <div>
      {/* OverLay */}
      <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] opacity-70 w-full h-screen bg-black`}></div>
      {/* NavLinks */}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#e1286f] space-y-6 z-[10000]`}>
        {
          navLinks.map((navlink) => (
            <Link href={navlink.url} key={navlink.id}>
              <p className='text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-yellow-300'>{navlink.label}</p>
            </Link>
          ))
        }
        {/* Close Button */}
        <CgClose  onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white'/>
        {/* <p>Close</p> */}
      </div>
    </div>
  )
}

export default MobileNavbar