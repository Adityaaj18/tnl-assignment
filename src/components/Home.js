import React, { useState, useEffect } from 'react'
import Header from './home/Header'
import Main from './home/Main'
import Sidebar from './home/sidebar/Sidebar'
import axios from 'axios'

const Home = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />

         <Main />
      </div>
   )
}

export default Home
