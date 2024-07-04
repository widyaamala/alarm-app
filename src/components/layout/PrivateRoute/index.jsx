import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { getUser } from "../../../utils/User"

const PrivateRoute = () => {
  const currentUser = getUser()

  if (!currentUser) {
    return <Navigate to='/' />
  }
  return (
    <Outlet />
  )
}

export default PrivateRoute
