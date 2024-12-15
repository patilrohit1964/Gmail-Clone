import React, { useEffect } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

const Messages = () => {

    useEffect(() => {

        const q = query(collection(db, "emails"), orderBy("createdAt", "desc"))

        const unSubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            console.log(allEmails)
        })
        // clean up
        return () => unSubscribe();
    }, [])

    return (
        <div>
            <Message />
        </div>
    )
}

export default Messages