import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
   const [accessToken, setAccessToken] = useState()

   function googleResponse(response) {
      console.log(response)
      console.log(response.accessToken)
      googleLogin(response.accessToken)
   }

   const navigation = () => {
      // if (accessToken == undefined) {
      //    console.log('error in login')
      // } else {
      //    navigate('/home')
      // }
   }

   async function googleLogin(accesstoken) {
      let res = await axios.post('http://127.0.0.1:8000/api/auth/google/', {
         access_token: accesstoken
      })
      console.log(res)
      return res.status
   }
   const navigate = useNavigate()
   return (
      <div className="container">
         <GoogleLogin
            clientId="536967528346-mosfo4emhi91tm0mq8mo4b86hq2jojf4.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={googleResponse}
            onFailure={googleResponse}
         />
      </div>
   )
}

export default Login
