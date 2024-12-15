import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../redux/appSlice'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from '../firebase'
const SendMail = () => {
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    })
    const { open } = useSelector(state => state.appSlice)
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "emails"), { ...formData, createdAt: serverTimestamp() })
        dispatch(setOpen(false));
        setFormData({
            to: "",
            subject: "",
            message: ""
        })
    }

    return (
        <div className={`${open ? "block" : "hidden"} bg-white max-w-full shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className='flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md'>
                <h1>New Message</h1>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer' onClick={() => dispatch(setOpen(false))}>
                    <RxCross2 size={"20px"} />
                </div>
            </div>
            <form action="" className='flex flex-col p-3 gap-2' onSubmit={submitHandler}>
                <input type="text" value={formData.to} name='to' onChange={changeHandler} placeholder='To' className='outline-none py-1' />
                <input type="text" value={formData.subject} name='subject' onChange={changeHandler} placeholder='Subject' className='outline-none py-1' />
                <textarea type="text" value={formData.message} name='message' cols={30} rows={10} onChange={changeHandler} placeholder='Message' className='outline-none py-1'></textarea>
                <button className='rounded-full w-fit px-4 text-white font-medium bg-blue-500' type='submit'>Send</button>
            </form>
        </div >
    )
}

export default SendMail