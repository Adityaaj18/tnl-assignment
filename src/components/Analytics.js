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
         <div
            style={{
               marginLeft: '60px',
               padding: '35px 25px',
               background: '#FDF6FF',
               marginTop: '68px',
               borderTopLeftRadius: '50px',
               height: '100vh'
            }}
         >
            <h1>no data</h1>
         </div>
      </div>
   )
}

export default Analytics
