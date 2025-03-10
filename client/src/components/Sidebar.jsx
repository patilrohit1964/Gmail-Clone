import React, { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { IoMdStar } from 'react-icons/io'
import { MdOutlineWatchLater, MdOutlineDrafts, MdMore, MdOutlineMore, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setOpen } from '../redux/appSlice'


const sidebarItems = [
    {
        icon: <LuPencil size={'24px'} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={'24px'} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={'24px'} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={'24px'} />,
        text: "Drafts"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'24px'} />,
        text: "More"
    },

]
const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <div className='w-[15%] sm:w-[20%] md:w-[25%] lg:w-[15%] xl:w-[12%]'>
            <div className='p-3'>
                <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#c2e7ff]'>
                    <LuPencil size={"24px"} />
                    Compose
                </button>
            </div>
            <div className='text-gray-500'>
                {sidebarItems.map((el, index) => (
                    <div key={index} className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
                        {el.icon}
                        <p>{el.text}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Sidebar