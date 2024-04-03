import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import { useState,useContext,createContext } from "react"


const DashboardContext=createContext()

function DashboardLayout() {
  const user={name:"ali"}
  const [showSidebar,setShowSidebar]=useState(false)
  const [isDarkTheme,setIsDarkTheme]=useState(false)

  const toggleSidebar=()=>{
    setShowSidebar(!showSidebar)
  }
  const toggleDarkTheme=()=>{
    console.log("toggle Dark theme")
  }
  const logoutUser=async()=>{
    console.log("logout user")
  }
  return (
    <DashboardContext.Provider 
      value={{
        logoutUser,
        toggleDarkTheme,
        toggleSidebar,
        user,
        isDarkTheme,
        showSidebar
      }}>
        <Wrapper>
          <main className="dashboard">
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <Navbar/>
              <div className="dashboard-page">
                <Outlet/>
              </div>
            </div>
          
          </main>
        </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext=()=>useContext(DashboardContext)
export default DashboardLayout