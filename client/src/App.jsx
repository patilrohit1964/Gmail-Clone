
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Dashboard } from './components/Dashboard'

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "login",
      Component: Login
    },
    {
      path: "signup",
      Component: SignUp
    },
    {
      path: "dashboard",
      Component: Dashboard
    },
  ])
  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  )
}

export default App
