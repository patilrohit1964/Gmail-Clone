import React, { useState, useEffect  } from 'react';
import Avatar from 'react-avatar';
import { CiCircleQuestion, CiDesktop, CiSearch, CiSettings } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../redux/appSlice';
const Navbar = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input])

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
                    <input
                        type="text"
                        className='rounded-full w-full bg-transparent outline-none px-1'
                        value={input}
                        placeholder='Search Mail'
                        onChange={(e) => setInput(e.target.value)}
                    />
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
                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-azLIwrCZPZsjTAX5M-FDcZZ7g3dD1Y2yQ&s' size={40} round={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar