import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCircleQuestion, CiDesktop, CiDesktopMouse1, CiSearch, CiSettings } from "react-icons/ci";
import Avatar from 'react-avatar';
const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-300 cursor-pointer'>
                        <GiHamburgerMenu size={20} />
                    </div>
                    <img className='w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_W1HdjKw1la-HKTLGJNzY7c9WSDHcJ4mGg&s" alt="mail logo" />
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
                </div>
            </div>
            <div className='md:block hidden w-[50%] mr-60'>
                <div className='flex items-center bg-[#Eaf1fb] px-2 py-3 rounded-full'>
                    <CiSearch size={"24px"} className='text-gray-700' />
                    <input type="text" className='rounded-full w-full bg-transparent outline-none px-1' placeholder='Search Mail' />
                </div>
            </div>
            <div className='md:block hidden'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <CiCircleQuestion size={24} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <CiSettings size={24} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <CiDesktop size={24} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <Avatar size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar