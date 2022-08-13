import React, { useState, useEffect, useContext } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import axios from 'axios'
import { TokenContext } from '../context/TokenContext'

const Analytics = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   const [isLoading, setIsLoading] = useState(true)
   var { token } = useContext(TokenContext)
   console.log(token)
   const [user, setUser] = useState()

   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="main-content">
            <h1>no data</h1>
         </div>
      </div>
   )
}

export default Analytics
