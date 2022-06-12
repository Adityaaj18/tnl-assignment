import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { useUserAuth } from '../UserAuthContext'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const { logIn, googleSignIn } = useUserAuth()
   const navigate = useNavigate()

   //    const handleSubmit = async (e) => {
   //       e.preventDefault()
   //       setError('')
   //       try {
   //          await logIn(email, password)
   //          navigate('/home')
   //       } catch (err) {
   //          setError(err.message)
   //       }
   //    }

   const handleGoogleSignIn = async (e) => {
      e.preventDefault()
      try {
         await googleSignIn()
         navigate('/home')
      } catch (err) {
         setError(err.message)
      }
   }

   return (
      <>
         <div className="p-4 box">
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="">
               <GoogleButton
                  className="g-btn container"
                  type="dark"
                  onClick={handleGoogleSignIn}
               />
            </div>
         </div>
      </>
   )
}

export default Login
