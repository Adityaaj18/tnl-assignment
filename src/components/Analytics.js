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
         <div className="container" style={{ marginTop: '100px' }}>
            Analytics
         </div>
      </div>
   )
}

export default Analytics
