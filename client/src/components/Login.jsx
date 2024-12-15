import React from 'react'
import GoogleButton from "google-button"
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
const Login = () => {

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
    } catch (error) {

    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
      <div className='p-8 bg-white flex flex-col gap-3 rounded-md'>
        <h1 className='text-center text-xl font-medium mb-5'>Login</h1>
        <GoogleButton onClick={signInWithGoogle} />

      </div>

    </div>
  )
}

export default Login