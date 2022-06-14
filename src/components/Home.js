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

   const [token, setToken] = useState('')

   // const data = {
   //    username: 'test@gmail.com',
   //    password: 12345
   // }

   // const baseURL = process.env.REACT_APP_TOKEN_KEY

   // useEffect(() => {
   //    axios
   //       .post('http://127.0.0.1:8000/auth-token/', data)
   //       .then((response) => {
   //          console.log(response.data.token)
   //          setToken(response.data.token)
   //       })
   //       .catch((err) => {
   //          console.log(err)
   //       })
   // }, [])

   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />

         <Main token={token} />
      </div>
   )
}

export default Home
