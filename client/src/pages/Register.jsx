import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <h1>register page</h1>
        <Link to={"/login"}>go to login page</Link>
    </div>
  )
}

export default Register