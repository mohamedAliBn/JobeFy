import React from 'react'
import {createBrowserRouter,RouterProvider} from  "react-router-dom"
import {DashboardLayout, HomeLayout, Landing, Login, Register,Error, AddJob, Stats, AllJobs, Profile, Admin} from "./pages"

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
        element:<DashboardLayout/>,
        children:[
          {
            index:true,
            element:<AddJob/>
          },
          {
            path:'stats',
            element:<Stats/>
          },
          {
            path:'all-jobs',
            element:<AllJobs/>
          },
          {
            path:"profile",
            element:<Profile/>
          },
          {
            path:"admin",
            element:<Admin/>
          }
        ]
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