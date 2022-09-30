import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"

import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";


function Page() {
    const token =  useSelector((state)=>state.first.token);
    const [ errstate,setErrState] = useState("")
    const dispatch = useDispatch();

    
    const login = useFormik({
    initialValues:{
        name:'',
        password:''
      
  },onSubmit:async values  => {
    try{
     await
      axiosConfig
      .post("/getToken/login", 
      values
      )
      .then((res) => {
       
      if(res.data.msg){
          console.log(res.data.msg);
          setErrState(res.data.msg);
      }else{
        console.log(res.data.token)
        setErrState("");
        localStorage.setItem('token',res.data.token)
        dispatch({type:actionTypes.LOG,data:res.data.token})
        return <Redirect to={{pathname:"/AdminPage"}}/>
       
      

      }

      
      })
      .catch((err) => {
        console.log(err)
      });
    }catch(e){
      console.log(e)
    }
  }});



  return (
    <div className="App">
        <form  noValidate autoComplete="off" onSubmit={login.handleSubmit}>
        <label htmlFor="name">name?</label>

            <input type="text" name="name"  values={login.values.name}
                       onChange={login.handleChange}/>
                       
                       <label htmlFor="name">password?</label>

                       <input type="password" name="password"  values={login.values.password}
                       onChange={login.handleChange}/>
           

         
          
        

            <button type="submit"> send </button>


{errstate}
        </form>
 
    </div>
  );
}

export default Page;
