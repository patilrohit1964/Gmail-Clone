import React, { useEffect } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'

const Messages = () => {

    const { emails } = useSelector((state) => state.appSlice)

    const dispatch = useDispatch()
    useEffect(() => {

        const q = query(collection(db, "emails"), orderBy("createdAt", "desc"))

        const unSubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            dispatch(setEmails(allEmails))
        })
        // clean up
        return () => unSubscribe();
    }, [])

    return (
        <div>
            {emails && emails.map((email) => (
                <Message key={email.id} email={email} />
            ))}
        </div>
    )
}

export default Messages