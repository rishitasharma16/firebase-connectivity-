import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  onAuthStateChanged(auth,(user)=>{
    setUser(user)
    console.log(user)
  })

  const logout =()=>{
    signOut(auth)
navigate('/login')
  }

  return (
    <>
    <h2>profile</h2>
    <img src={user?.photoURL} />
    <p>email : {user?.email}</p>
    <p>name : {user?.displayName}</p>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Profile