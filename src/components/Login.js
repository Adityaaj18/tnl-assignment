import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
   const [accessToken, setAccessToken] = useState()

   function googleResponse(response) {
      // console.log(response)
      // console.log(response.accessToken)
      googleLogin(response.accessToken)
   }

   const onSuccess = (response) => {
      navigate('/home')
      googleResponse(response)
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
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="LOGIN WITH GOOGLE"
            scope="openid profile email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.upload"
            onSuccess={onSuccess}
            onFailure={googleResponse}
            cookiePolicy={'single_host_origin'}
         />
      </div>
   )
}

export default Login
