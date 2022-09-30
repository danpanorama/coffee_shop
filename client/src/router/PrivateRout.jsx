import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";


const PrivateRoute =  ({component: Component, ...rest}) => {
    const token =  useSelector((state)=>state.first.is_valid);
    const isLog =  useSelector((state)=>state.user.isLog);
    console.log(isLog)
    console.log('isLog')


    return (
        <Route {...rest} render={props => (
            isLog==true ?
             <Component  {...props} />
            :<Redirect to="/login" />

        )} />
      );
};

export default PrivateRoute;


