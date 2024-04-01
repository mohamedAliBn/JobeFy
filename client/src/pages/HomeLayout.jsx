import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
        <nav>this is nav bar</nav>
        <Outlet/>
    </div>
  )
}

export default HomeLayout