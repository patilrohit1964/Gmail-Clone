import React, { useState } from 'react'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { GoTag } from 'react-icons/go'
import Messages from './Messages'

const mailType = [
    {
        icon: <MdInbox size={"20px"} />,
        text: "Primary",
        isActive: "Primary"
    },
    {
        icon: <GoTag size={"20px"} />,
        text: "Promotions",
        isActive: "Promotions"
    },
    {
        icon: <FaUserFriends size={"20px"} />,
        text: "Social",
        isActive: "Social"
    },

]
const Inbox = () => {

    const [mailTypedSelected, setMailTypeSelected] = useState(0);


    return (
        <div className='flex-1 bg-white rounded-xl mx-2 sm:mx-5'>
            <div className='flex items-center justify-between p-2 sm:p-4'>
                <div className='flex items-center gap-2 text-gray-700 py-2'>
                    <div className='flex items-center gap-1'>
                        <MdCropSquare size={"20px"} />
                        <FaCaretDown size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdRefresh size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdMore size={"20px"} />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-sm text-gray-500 hidden sm:block'>1-50 of 2000</p>
                    <button className='hover:rounded-full hover:bg-gray-100 p-1'><MdKeyboardArrowLeft size={"24px"} /></button>
                    <button className='hover:rounded-full hover:bg-gray-100 p-1'><MdKeyboardArrowRight size={"24px"} /></button>
                </div>
            </div>
            <div className='h-[75vh] sm:h-[85vh] lg:h-[90vh] overflow-y-auto'>
                <div className='flex items-center gap-1 overflow-x-auto sm:overflow-hidden'>
                    {mailType.map((el, index) => (
                        <button
                            key={index}
                            onClick={() => setMailTypeSelected(index)}
                            className={`w-40 sm:w-52 hover:bg-gray-100 flex items-center gap-5 p-4 whitespace-nowrap ${mailTypedSelected === index ? 'text-sky-600 border-b-sky-600 border-b-4' : 'border-b-4 border-b-transparent'}`}>
                            {el.icon}
                            <span className='hidden sm:inline'>{el.text}</span>
                        </button>
                    ))}
                </div>
                <Messages />
            </div>
        </div>

    )
}

export default Inbox