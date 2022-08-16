import {Route,Navigate} from 'react-router-dom';
import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({component: Component, ...restProps}) => {

   const {user} =  useContext(AuthContext);

  return (
    <Route {...restProps} render={(...props)=>{

        return user ? <Component {... props}/> : <Navigate to='/login' />
    }}/>
  )
}

export default ProtectedRoute;