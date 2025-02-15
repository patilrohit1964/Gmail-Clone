import { collection, deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { MdArchive, MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineReport, MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { motion } from "framer-motion"
const Mail = () => {
    const navigate = useNavigate();
    const { selectEmail } = useSelector(state => state.appSlice);
    const { id } = useParams()

    const deleteMailById = async (id) => {
        try {
            await deleteDoc(doc(db, "emails", id))
            navigate("/")
        } catch (error) {

        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex-1 bg-white rounded-xl mx-2 sm:mx-5'
        >
            <div className='flex items-center justify-between px-2 sm:px-4'>
                <div className='flex items-center gap-2 text-gray-700 py-2 overflow-x-auto sm:overflow-hidden'>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/')}>
                        <IoMdArrowBack size={"20px"} />
                    </div>
                    {[
                        MdArchive,
                        MdOutlineReport,
                        MdDeleteOutline,
                        MdOutlineMarkEmailUnread,
                        MdOutlineWatchLater,
                        MdOutlineAddTask,
                        MdOutlineDriveFileMove,
                        IoMdMore
                    ].map((Icon, index) => (
                        <div key={index} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <Icon size={"20px"} />
                        </div>
                    ))}
                </div>
                <div className='flex items-center gap-2'>
                    <button className='p-2 hover:rounded-full hover:bg-gray-100'>
                        <MdKeyboardArrowLeft size={"24px"} />
                    </button>
                    <button className='p-2 hover:rounded-full hover:bg-gray-100'>
                        <MdKeyboardArrowRight size={"24px"} />
                    </button>
                </div>
            </div>

            <div className='h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-y-auto p-4'>
                <div className='flex flex-wrap items-center justify-between bg-white gap-2'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-lg sm:text-xl font-medium'>{selectEmail?.subject}</h1>
                        <span className='text-xs sm:text-sm bg-gray-200 rounded-md px-2'>Inbox</span>
                    </div>
                    <div className='text-gray-400 text-xs sm:text-sm'>
                        <p>{new Date(selectEmail?.createdAt?.seconds * 1000).toUTCString()}</p>
                    </div>
                </div>

                <div className='text-gray-500 text-xs sm:text-sm'>
                    <h1>{selectEmail?.to}</h1>
                    <span>to me</span>
                </div>

                <div className='my-6 sm:my-10 text-sm sm:text-base'>
                    <p>{selectEmail?.message}</p>
                </div>
            </div>
        </motion.div>

    )
}

export default Mail