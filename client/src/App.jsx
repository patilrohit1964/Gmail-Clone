import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"
import Body from './components/Body'
import Inbox from './components/Inbox'
import Mail from './components/Mail'
import Navbar from './components/shared/Navbar'
import SendMail from './components/SendMail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },

    ]
  }
])
const App = () => {
  return (
    <div className='bg-[#f6f8fc] h-screen w-screen overflow-hidden'>
      <Navbar />
      <RouterProvider router={router} />
      <div className='w-[30%] absolute bottom-0 right-20 z-10'>
        <SendMail />
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}

export default App