import { logo } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky
    top-0 x-50 bg-bodyColor px-4 '>
        <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
            <div>
                <Image className='w-10' src={logo} alt="logo"/>
            </div>
            <div>
                <ul>
                    <Link 
                    href='#home'
                    className='flex items-center gap-1 font-medium text-textDark 
                    hover:text-textGreen cursor-pointer duration-300 nav-link '
                    >
                    <li>Home</li>
                    </Link>
                    <Link 
                    href='#home'
                    className='flex items-center gap-1 font-medium text-textDark 
                    hover:text-textGreen cursor-pointer duration-300 nav-link '
                    >
                    <span>01.</span>About
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar