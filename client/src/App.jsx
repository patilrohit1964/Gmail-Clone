
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Dashboard } from './components/Dashboard'
import "./components/style.css"
function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      Component: SignUp
    },
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


/*

colors we use in pr
1.f5f7fb bg-color
2.#ffffff box color
3.#33394c text color
4.4e7cff primary 1
5.#7033ff primary 2
6.#f65164 primary 3
*/
