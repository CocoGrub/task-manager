import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) =>{
    const isLogin=useSelector(state=>state.isLogin)
    return (
        <Route {...rest} render={(props) => (
            isLogin === true ?
                <Component {...props} /> : <Redirect to={{ pathname: '/login'}} />
        )} />
    );
}

export default ProtectedRoute;