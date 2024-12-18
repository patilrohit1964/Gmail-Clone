import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { CiCircleQuestion, CiDesktop, CiSearch, CiSettings } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../redux/appSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
const Navbar = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const { user } = useSelector(state => state.appSlice)


    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null))
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input])

    console.log(user.photoUrl)

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
                    <div className='relative p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <Avatar onClick={() => setToggle(!toggle)} src={user?.photoUrl} size={40} round={true} />
                        <AnimatePresence>
                            {toggle &&
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.1 }}
                                    className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                                >
                                    <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>

                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar