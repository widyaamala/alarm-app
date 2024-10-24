import React, { Children } from "react"
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getUser } from "../../../utils/User"

const PrivateRoute = () => {
  const authenticate = getUser();
  const location = useLocation();

  return authenticate ? (
    <Outlet/>
  ) : (
    <Navigate
      to={'/login'}
    />
  );
}

export default PrivateRoute
