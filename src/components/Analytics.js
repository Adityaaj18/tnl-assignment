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

   useEffect(() => {
      setIsLoading(true)

      const fetchData = async () => {
         try {
            const { data } = await axios.get(
               'http://127.0.0.1:8000/api/users/current/',
               {
                  headers: {
                     Authorization: `Token ${token}`
                  }
               }
            )
            console.log(data)
            setUser(data)
            console.log('after', token)
         } catch (err) {
            console.log(err)
            console.log('after', token)
         } finally {
            setIsLoading(false)
            console.log('after', token)

            // console.log(user)
         }
      }
      fetchData()
   }, [])
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
            {isLoading ? (
               <h1>Loading...</h1>
            ) : (
               <div>
                  {' '}
                  Analytics
                  {token}
                  {user.id}
                  {user.name}
               </div>
            )}
         </div>
      </div>
   )
}

export default Analytics
