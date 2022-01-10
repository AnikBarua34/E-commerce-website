import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useContextBase from './../../hooks/useContextbase';


const AdminRoute = ({children,...rest}) => {
    const {user,isLoading,admin}=useContextBase();
if(!admin){
    return <Spinner animation="border" variant="primary" />
}    

return (
        <Route
        {...rest} render={({location})=> user.email && admin ? children 
        :
        <Redirect
              to={{
                pathname: '/home',
                state: { from: location }
              }}
            />
        }
        >
            
        </Route>
    );
};

export default AdminRoute;