import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
   <h2>Homepage</h2>
    <Link to='/login'>Login</Link>
  
   </>
  )
}

export default Home