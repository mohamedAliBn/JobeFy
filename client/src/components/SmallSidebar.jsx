import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import links from "../utils/links"
import Logo from "./Logo"
import { useDashboardContext } from "../pages/DashboardLayout"
import { NavLink } from "react-router-dom"

function SmallSidebar() {
  const {showSidebar,toggleSidebar}=useDashboardContext();
  return (
    <Wrapper>
      <div 
        className={`${showSidebar?"sidebar-container show-sidebar":"sidebar-container"}`}>
        <div className="content">
          <button 
            className="close-btn" 
            onClick={toggleSidebar}
            type="button">
              <FaTimes/>
          </button>
          <header>
            <Logo/>
          </header>
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
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar