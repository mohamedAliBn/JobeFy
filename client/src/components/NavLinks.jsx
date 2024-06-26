import React from 'react'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import { useDashboardContext } from '../pages/DashboardLayout'
function NavLinks() {
    const {toggleSidebar,user}=useDashboardContext();
  return (
    <div className="nav-links">
            {
              links.map((link)=>{
                const {text,path,icon}=link;

                return (
                  <NavLink 
                    to={path}
                    key={text}
                    onClick={toggleSidebar}
                    className={"nav-link"}
                    end>
                      <span className="icon">{icon}</span>
                      {text}
                  </NavLink>
                )
              })
            }
          </div>
  )
}

export default NavLinks