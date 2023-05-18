import React, { useState } from 'react'
import { auth,googleProvider } from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate()

  const handleGoogleLogin = async()=>{
   try{
      const response = await signInWithPopup(auth, googleProvider)
      navigate('/profile')

   }

   catch(err){
    console.log(err)
   }
  }

  return (
    <>
     <button onClick={handleGoogleLogin}>Login with Google</button>
    </>
  )
}

export default Login