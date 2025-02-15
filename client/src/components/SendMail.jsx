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
        <div
            className={`${open ? "block" : "hidden"} bg-white shadow-xl shadow-slate-600 rounded-t-md w-full sm:max-w-lg fixed bottom-0 right-4 sm:right-10`}
        >
            {/* Header */}
            <div className="flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md">
                <h1 className="text-sm font-semibold">New Message</h1>
                <div
                    className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
                    onClick={() => dispatch(setOpen(false))}
                >
                    <RxCross2 size={"20px"} />
                </div>
            </div>

            {/* Form */}
            <form className="flex flex-col p-3 gap-2" onSubmit={submitHandler}>
                <input
                    type="text"
                    value={formData.to}
                    name="to"
                    onChange={changeHandler}
                    placeholder="To"
                    className="outline-none py-2 px-3 rounded-md border border-gray-300 text-sm"
                />
                <input
                    type="text"
                    value={formData.subject}
                    name="subject"
                    onChange={changeHandler}
                    placeholder="Subject"
                    className="outline-none py-2 px-3 rounded-md border border-gray-300 text-sm"
                />
                <textarea
                    type="text"
                    value={formData.message}
                    name="message"
                    cols={30}
                    rows={5}
                    onChange={changeHandler}
                    placeholder="Message"
                    className="outline-none py-2 px-3 rounded-md border border-gray-300 text-sm resize-none"
                ></textarea>
                <button
                    className="rounded-full px-6 py-2 text-white font-medium bg-blue-500 hover:bg-blue-600 transition duration-200 self-start"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>

    )
}

export default SendMail