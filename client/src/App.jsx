import React from 'react'
import {createBrowserRouter,RouterProvider} from  "react-router-dom"
import {DashboardLayout, HomeLayout, Landing, Login, Register,Error} from "./pages"

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"dashboard",
        element:<DashboardLayout/>
      },
      {
        path:"login",
        element:<Login/>
      }
    ]
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App