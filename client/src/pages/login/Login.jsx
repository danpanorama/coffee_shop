import React, { useState } from "react";
import {useFormik} from "formik"
import { Redirect } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Loginstatless from './stateless/Loginstatless'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axiosConfig from "../../config/AxiosConfig";
import GoogleLogin from 'react-google-login'
import * as actionTypes from "../../store/Actions";
import '../../css/body.css'
import '../../css/login.css'





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function CreateUser() {
  const [errState, setErrState] = useState("");
  const [isLoggd, setisLoggd] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [age, setAge] = React.useState('');
  const handleChangeremember = (event) => {
    setChecked(event.target.checked);
  };


  async function responsGoogle(response){
        try{
          setErrState("")
          axiosConfig.post("/google/login",response.profileObj)
          .then((res) => {
            if(res.data.err){
              localStorage.setItem('usernumber',null)
              return setErrState(res.data.err);
            } 
            localStorage.setItem('rem',res.data.remember)
            if(res.data.remember){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("user",JSON.stringify(res.data.userInfo))
            }
           localStorage.setItem('usernumber',res.data.userInfo.number)
            getMyCard(res.data.number)
            dispatch({type:actionTypes.LOGIN,data:res.data})
            setisLoggd(true);
            setErrState("")
            console.log("done !")
          })
          .catch((err) => {
            setErrState(err);
            console.log("error3")
          });
        }catch(e){
          console.log(e)
          setErrState("error while sending requast"+e);
        }
        
  }



  
  const LogInFrormik = useFormik({
    initialValues:{
    name:"",
    password:"",
    remember:false
  },onSubmit:async values  => {
    try{
      setErrState("")
      axiosConfig.post("/register/login", values)
      .then((res) => {

        if(res.data.err){
          localStorage.setItem('usernumber',null)

          return setErrState(res.data.err);
        }
        localStorage.setItem('rem',res.data.remember)
        console.log(res.data.remember)
        if(res.data.remember){
                  localStorage.setItem("token",res.data.token)
                  localStorage.setItem("user",JSON.stringify(res.data.userInfo))

        }
       localStorage.setItem('usernumber',res.data.userInfo.number)
        getMyCard(res.data.number)
        dispatch({type:actionTypes.LOGIN,data:res.data})
        setisLoggd(true);
        setErrState("")
      })
      .catch((err) => {
        setErrState(err);
        console.log("error3")
      });
    }catch(e){
      console.log(e)
      setErrState("error while sending requast"+e);
    }
  }});



    
async function getMyCard(user){
  try{
    await
    axiosConfig
     .get("/profile/get", {
      params:{userid:user}
    }
      )
      .then((res) => {
        if(res.data.err){
          console.log("err geting by card items")

        }
       dispatch({type:actionTypes.SET,data:res.data.items})
      })
      .catch((err) => {
        console.log(err)
      });

    }catch(e){
      console.log(e)
    }

}






        if(isLoggd){
        return <Redirect to={{pathname:"/home"}}/>
        }


  return (
        <div className="">
          <Loginstatless errState={errState} LogInFrormik={LogInFrormik} responsGoogle={responsGoogle} />
    </div>
 
  );
}