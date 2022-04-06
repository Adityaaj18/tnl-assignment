import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = ({ menuIconClick }) => {
   // const handleClick = () => {
   //    console.log(menuCollapse)
   // }
   return (
      <div>
         <nav className="navbar navbar-light  justify-content-between">
            <div style={{ display: 'flex' }}>
               <div>
                  <GiHamburgerMenu
                     style={{
                        fontSize: '26px',
                        margin: '10px 17px',
                        cursor: 'pointer'
                     }}
                     onClick={menuIconClick}
                  />
               </div>

               <h4 style={{ marginBottom: '0px', marginTop: '10px' }}>Home</h4>
            </div>
            <div className="subnav" style={{ display: 'flex' }}>
               <div style={{ borderRight: '1px solid #f2f2f2' }}>
                  <img
                     src={require('../img/profile.png')}
                     alt=""
                     style={{
                        width: '48px',
                        height: '48px',
                        marginLeft: '15px',
                        marginRight: '15px'
                     }}
                  />
               </div>
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
                        fontSize: '18px'
                     }}
                  >
                     ₹320.83
                  </h6>
               </div>
               <div style={{ borderRight: '1px solid #f2f2f2' }}>
                  <img
                     src={require('../img/settings.png')}
                     alt=""
                     style={{
                        margin: '10px 15px 0px 15px'
                     }}
                  />
               </div>
               <div>
                  <img
                     src={require('../img/down.png')}
                     alt=""
                     style={{
                        margin: '20px 15px 0px 15px'
                     }}
                  />
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Header
