import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import Profile from './Profile'
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";


function Profilefunc() {
    const token =  localStorage.getItem("token");
    const [ errstate,setErrState] = useState("")
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.user);
    const items =  useSelector((state)=>state.items);




  

  return (
    <div className="App">
    
        <Profile   />
    </div>
  );
}

export default Profilefunc;
