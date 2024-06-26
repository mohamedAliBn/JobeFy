import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import links from "../utils/links"
import Logo from "./Logo"
import { useDashboardContext } from "../pages/DashboardLayout"
import { NavLink } from "react-router-dom"
import NavLinks from "./NavLinks"

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
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar