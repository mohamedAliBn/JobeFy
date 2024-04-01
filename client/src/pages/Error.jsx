import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error() {
    const error=useRouteError();
    console.log(error)
  return (
    <div>
        <p>Error Page </p>
        <Link to={"/"}>go to home</Link>
    </div>
  )
}

export default Error