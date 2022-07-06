import React, { useState } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'

const Analytics = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div
            style={{
               marginLeft: '60px',
               padding: '35px 25px',
               background: '#f2e9fa',
               marginTop: '68px',
               borderTopLeftRadius: '50px',
               height: '100vh'
            }}
         >
            Analytics
         </div>
      </div>
   )
}

export default Analytics
