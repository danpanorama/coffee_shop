import React, { useState } from "react";
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import '../../css/createuser.css'
import '../../css/body.css'
import axiosConfig from "../../config/AxiosConfig"
import {useFormik} from "formik"
import { Redirect } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../../store/Actions";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function CreateUser() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [errState, setErrState] = useState("");
  const [age, setAge] = React.useState('');
  const [isLoggd, setisLoggd] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeremember = (event) => {
    setChecked(event.target.checked);
  };

  const createUser = useFormik({
    initialValues:{
      password: "",
      passwordreapet:'',
      name: "",
      lastname:'',
      email: "",
      city:'',
      building:'',
      addres:'',
      phon:0,
      remember: false,
  },onSubmit:async values  => {
    try{
      let requast = await
      axiosConfig
      .post("/register/createuser", 
      values
      )
      .then((res) => {
        if(res.data.err){
          localStorage.setItem('usernumber',null)

        return setErrState(res.data.err);

        }else{
          localStorage.setItem('rem',res.data.remember)
          if(res.data.remember){
             localStorage.setItem("token",res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.userInfo))      
          }

          localStorage.setItem('usernumber',res.data.number)

            res.data.password = "123"
            setisLoggd(true);
            
            dispatch({type:actionTypes.LOGIN,data:res.data})

        }
      })
      .catch((err) => {
        setErrState(err.err);
      });
    }catch(e){
      console.log(e)
      setErrState("error while sending requast"+e);
    }
  }});


  if(isLoggd){
    return <Redirect to={{pathname:"/home"}}/>
  }

  return (
  <div className="min_h ">
    <div className="formdiv bacolor">
      <h1 className="headerForems">Create New User</h1>
      <form className="flex_col_center backColor" noValidate autoComplete="off" onSubmit={createUser.handleSubmit}>
     
      <TextField id="standard-basic" name="name" label="user name*" values={createUser.values.name}
        onChange={createUser.handleChange} />
      <TextField id="standard-basic" name="lastname" label="last name*" values={createUser.values.lastname}
        onChange={createUser.handleChange} />
     
      <TextField id="standard-basic" type="password" label="password*" name="password"  values={createUser.values.password}
              onChange={createUser.handleChange}/>
      <TextField id="standard-basic" type="password" label="reapet password*" name="passwordreapet"  values={createUser.values.passwordreapet}
        onChange={createUser.handleChange}/>
  

      <TextField id="standard-basic" type="email" label="email*"  name="email" values={createUser.values.email}
        onChange={createUser.handleChange}/>
      <TextField id="standard-basic" type="number" label="phon*" name="phon"  values={createUser.values.phon}
        onChange={createUser.handleChange}/>
      <TextField id="standard-basic" type="number" label="idcard*" name="idcard"  values={createUser.values.idcard}
              onChange={createUser.handleChange}/>         
      <TextField id="standard-basic" name="city" label="city" values={createUser.values.city}
              onChange={createUser.handleChange} />
      <TextField id="standard-basic" name="address" label="address" values={createUser.values.address}
                    onChange={createUser.handleChange} />
      <TextField id="standard-basic" name="building" label="building" values={createUser.values.building}
      onChange={createUser.handleChange} />

      <div className="flexRow">
            remember me
      <Checkbox
        name="remember"
        values={createUser.values.remember?"true":"false"}
        onChange={createUser.handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

    </div>
    <div>  
      <Button type="submit" variant="contained" color="primary">
        Loggin
      </Button>
      </div>
    </form>
    <Link to="/forgotpassword">forgot your password</Link>
    <div>
     <p>alredy have a user ?<Link to="/login">loggin</Link></p>
    </div>
 

    <h2>{errState}</h2>
    </div>
    </div>

  );
}