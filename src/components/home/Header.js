import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useParams } from 'react-router-dom'
import '../../styles/header.css'

const Header = ({ menuIconClick }) => {
   // const handleClick = () => {
   //    console.log(menuCollapse)
   // }

   // const name = useParams()
   // console.log(name)
   const path = window.location.pathname
   const pathName = path.slice(1)

   return (
      <div>
         <nav className="navbar  justify-content-between">
            <div style={{ display: 'flex' }}>
               <div>
                  <GiHamburgerMenu
                     className="hamburger-menu"
                     onClick={menuIconClick}
                  />
               </div>

               <h4 className="pg-title">
                  {path == '/'
                     ? 'Home'
                     : pathName.charAt(0).toUpperCase() + pathName.slice(1)}
               </h4>
            </div>
            <div className="subnav" style={{ display: 'flex' }}>
               <div
                  style={{
                     borderRight: '1px solid #f2f2f2'
                  }}
               >
                  <p>Balance</p>
                  <h6>₹320.83</h6>
               </div>
               <div className="nav-profile-pic">
                  <img src={require('../../img/profile.png')} alt="" />
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Header
