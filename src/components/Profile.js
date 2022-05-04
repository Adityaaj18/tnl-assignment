import React, { useState } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'

const Profile = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="profile-section">
            <div className="container">
               <p
                  style={{
                     fontSize: '24px',
                     fontWeight: '700',
                     marginTop: '40px',
                     marginBottom: '10px'
                  }}
               >
                  My Profile
               </p>
               <div
                  style={{
                     borderBottom: '3px solid #962E40',
                     borderRadius: '10px',
                     width: '150px'
                  }}
               ></div>
            </div>
            <div>
               <div className="profile-card-wrapper container ">
                  <div
                     className=" "
                     style={{
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                     }}
                  >
                     <div className="profile-header">
                        <h1 style={{ fontSize: '36px', fontWeight: '700' }}>
                           John Doe
                        </h1>
                        <button id="edit-profile">Edit Profile</button>
                     </div>
                     <div className="profile-body">
                        <p
                           style={{
                              fontSize: '18px',
                              fontWeight: '700',
                              marginBottom: '10px'
                           }}
                        >
                           Personal Information
                        </p>
                        <div
                           style={{
                              borderBottom: '3px solid #962E40',
                              borderRadius: '10px',
                              width: '150px'
                           }}
                        ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile
