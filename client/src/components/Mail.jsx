import React from 'react';
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { MdArchive, MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineReport, MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Mail = () => {
    const navigate = useNavigate();
    const { selectEmail } = useSelector(state => state.appSlice)
    return (
        <div className='flex-1 bg-white rounded-xl mx-5'>
            <div className='flex items-center justify-between px-4'>
                <div className='flex items-center gap-2 text-gray-700 py-2'>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/')}>
                        <IoMdArrowBack size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdArchive size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineReport size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdDeleteOutline size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineMarkEmailUnread size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineWatchLater size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineAddTask size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineDriveFileMove size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdMore size={"20px"} />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowLeft size={"24px"} /></button>
                    <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowRight size={"24px"} /></button>
                </div>
            </div>
            <div className='h-[90vh] overflow-y-auto p-4'>
                <div className='flex items-center justify-between bg-white gap-1'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-medium'>{selectEmail?.subject}</h1>
                        <span className='text-sm bg-gray-200 rounded-md px-2'>Inbox</span>
                    </div>
                    <div className='flex-none text-gray-400 my-5 text-sm'>
                        <p>{new Date(selectEmail?.createdAt?.seconds * 1000).toUTCString()}</p>
                    </div>
                </div>
                <div className='text-gray-500 text-sm'>
                    <h1 className=''>{selectEmail?.to}</h1>
                    <span>to me</span>
                </div>
                <div className='my-10'>
                    <p>{selectEmail?.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail