import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarFill } from 'react-icons/ri'

const Message = () => {
    return (
        <div className='flex items-start justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md'>
            <div className='flex items-center gap-3'>
                <div className='flex-none text-gray-300'>
                    <MdCropSquare className='w-5 h-5' />
                </div>
                <div className='flex-none text-gray-300'>
                    <RiStarFill className='w-5 h-5' />
                </div>
            </div>

        </div>
    )
}

export default Message