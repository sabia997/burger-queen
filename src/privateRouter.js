import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import{ AuthContext }from './componenents/home/auth';

const PrivateRoute = ({componenent: RouteComponent, ...rest}) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route 
        {...rest}
        render={routeProps =>
            !!currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to={"/home"}/>
            )
        }
        />
    );
};

export default PrivateRoute;