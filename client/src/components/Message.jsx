import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedEmail } from '../redux/appSlice'
import { motion } from 'framer-motion'
const Message = ({ email }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(setSelectedEmail(email));
        navigate(`/mail/${email.id}`);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={openMail}
            className='flex items-start justify-between border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3 text-sm hover:cursor-pointer hover:shadow-md'
        >
            <div className='flex items-center gap-2 sm:gap-3 w-full'>
                <div className='flex-none text-gray-300'>
                    <MdCropSquare className='w-5 h-5' />
                </div>
                <div className='flex-none text-gray-300'>
                    <RiStarLine className='w-5 h-5' />
                </div>
                <div className='truncate w-1/4 sm:w-auto'>
                    <h1 className='font-semibold text-xs sm:text-sm'>{email?.to}</h1>
                </div>
                <div className='flex-1 ml-2 sm:ml-4'>
                    <p className='text-gray-600 truncate max-w-[120px] sm:max-w-full inline-block'>{email?.message}</p>
                </div>
                <div className='flex-none text-gray-400 text-xs sm:text-sm whitespace-nowrap'>
                    {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
                </div>
            </div>
        </motion.div>

    )
}

export default Message