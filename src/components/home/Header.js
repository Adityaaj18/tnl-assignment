import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useParams } from 'react-router-dom'
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
         <nav className="navbar navbar-light  justify-content-between">
            <div style={{ display: 'flex' }}>
               <div>
                  <GiHamburgerMenu
                     style={{
                        fontSize: '26px',
                        margin: '10px 17px',
                        cursor: 'pointer',
                        color: '#962E40'
                     }}
                     onClick={menuIconClick}
                  />
               </div>

               <h4 style={{ marginBottom: '0px', marginTop: '10px' }}>
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
                  <p
                     style={{
                        marginBottom: '0px',
                        marginLeft: '15px',
                        marginRight: '15px',
                        fontSize: '14px',
                        textAlign: 'center'
                     }}
                  >
                     Balance
                  </p>
                  <h6
                     style={{
                        marginLeft: '12px',
                        marginRight: '12px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                     }}
                  >
                     ₹320.83
                  </h6>
               </div>
               <div style={{ borderRight: '1px solid #f2f2f2' }}>
                  <img
                     src={require('../../img/profile.png')}
                     alt=""
                     style={{
                        width: '48px',
                        height: '48px',
                        marginLeft: '15px',
                        marginRight: '15px'
                     }}
                  />
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Header
