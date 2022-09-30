import React, { useState } from "react";
import {useFormik} from "formik"
import { Redirect } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axiosConfig from "../../../config/AxiosConfig";
import GoogleLogin from 'react-google-login'
import * as actionTypes from "../../../store/Actions";
import '../../../css/body.css'
import '../../../css/login.css'





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function CreateUser(props) {


  return (
        <div className="baclolorred">
            <div className="loginForm">
            <h1 className="">loggin</h1>
            <p>{props.errState}</p>
        <form className="flex_col"  onSubmit={props.LogInFrormik.handleSubmit}  noValidate autoComplete="off">
        <TextField id="standard-basic" label="name"     name="name" 
            values={props.LogInFrormik.values.name}
            onChange={props.LogInFrormik.handleChange}  />
        <TextField id="standard-basic" type="password" name="password" 
            values={props.LogInFrormik.values.password}
            onChange={props.LogInFrormik.handleChange} label="Password" />
            <div className="flexRow">
            <p className='colBlack'> remember me</p>
        <Checkbox
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            onChange={props.handleChangeremember}
            name="remember" 
            values={props.LogInFrormik.values.remember?"true":"false"}  
            onChange={props.LogInFrormik.handleChange}
        />
        </div>
        <div>  
        <Button type="submit" variant="contained" color="primary">
            Loggin
        </Button>
        </div>
        </form>
        <div className="loginwith marg_top_20">
          <div className="btonlogin">
           <GoogleLogin  
           className="w_100"
           clientId="673859846842-f1gqv0e3dnhr3uk5p8jf6qpjv8qh1tmk.apps.googleusercontent.com"
           buttonText='Login'
           onSuccess={props.responsGoogle}
           onFailure={props.responsGoogle}
           cookiePolicy={'single_host_origin'}
           />
          </div>
          <div className="btonlogin">
            <p>log in with facebook</p>
          </div>
        </div>

    
    <div>

    <Link  to="/forgotpassword">forgot your password</Link>
    &nbsp;&nbsp;
   <p>dont have a user ?  <Link  to="/createuser">create User</Link></p>
    </div>
    {props.errState}
    </div>
    </div>
 
  );
}