import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase'
import { setEmails } from '../redux/appSlice'
import Message from './Message'

const Messages = () => {

    const { emails, searchText } = useSelector((state) => state.appSlice);
    const [tempEmail, setTempEmails] = useState(emails)
    const dispatch = useDispatch();

    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy("createdAt", "desc"))
        const unSubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            dispatch(setEmails(allEmails))
        })
        // clean up
        return () => unSubscribe();
    }, [])

    useEffect(() => {
        const filterdEmails = emails?.filter(email => {
            return email?.subject?.toLowerCase()?.includes(searchText?.toLowerCase()) || email?.message?.toLowerCase().includes(searchText?.toLowerCase())
        })
        setTempEmails(filterdEmails);
    }, [searchText, emails]);
    return (
        <div>
            {tempEmail && tempEmail.map((email) => (
                <Message key={email.id} email={email} />
            ))}
        </div>
    )
}

export default Messages