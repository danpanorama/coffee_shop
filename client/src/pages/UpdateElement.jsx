import React, { useState ,useEffect} from "react";
import { NavLink, Redirect } from "react-router-dom";
import axiosConfig from "../config/AxiosConfig";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";
import {useFormik} from "formik"
import '../css/adminpage.css'
import '../css/body.css'



function UpdateElement(props) {
    const dispatch = useDispatch();
    const [errState,setErrState] = useState("")
    const [secssec,setsecssec] = useState("")
    const token = localStorage.getItem('token')


    const createUser = useFormik({
    initialValues:{
        id:props.location.state.data._id,
        foodName:props.location.state.data.foodName,
        foodCategory:props.location.state.data.foodCategory,
        price:props.location.state.data.price,
        matirials:props.location.state.data.matirials,
        isVigen:props.location.state.data.isVigen,
        isSpaciy:props.location.state.data.isSpaciy, 
        image:props.location.state.data.image
  },onSubmit:async values  => {
    try{
     await
      axiosConfig
      .post("/menu/update", 
      values
      )
      .then((res) => {
       if(res.data.err){
        console.log(res.data.err)
        setsecssec("")
        setErrState("error :"+ res.data.err)
       }
       setErrState("")
       massage()
      })
      .catch((err) => {
        console.log(err)
      });
    }catch(e){
      console.log(e)
    }
  }});


  function massage(){
    setsecssec("you activete a menu food")
      setTimeout(() => {
        setsecssec("")
      }, 3000);
  }

  return (
    <div className="App">
      <div className="fullsize">
          <h1>update</h1>
      <div>
                <p>{createUser.values.foodName}</p>
                <p>{createUser.values.price}</p>
                <p>{createUser.values.matirials}</p>
                <p>{createUser.values.image}</p>
            </div>

        <div className="center">

          
       <p className="err">{errState}</p>
       <p className="seccess">{secssec}</p>

        <form  className="d_flex_col aline_center" noValidate autoComplete="off" onSubmit={createUser.handleSubmit}>
       
        <label htmlFor="foodName">name?</label>

            <input type="text" name="foodName" value={createUser.values.foodName}  values={createUser.values.foodName}
                       onChange={createUser.handleChange}/>


                      <label htmlFor="image">image name</label>
                       <input type="text" name="image" placeholder="imagename"
                       values={createUser.values.image}
                       value={createUser.values.image}
                       onChange={createUser.handleChange}/>
                       
                       <label htmlFor="price">price?</label>

            <input type="number" value={createUser.values.price}  name="price" values={createUser.values.price}
                     onChange={createUser.handleChange}/>

        <label htmlFor="matirials">matirials?</label>

           <input type="text" value={createUser.values.matirials}    name="matirials" values={createUser.values.matirials}
                     onChange={createUser.handleChange}/>

<select name="foodCategory" 
           values={createUser.values.foodCategory}
             onBlur={createUser.handleBlur}
            onChange={createUser.handleChange}>
                <option value="mazet">mazet</option>
                <option value="sendwich">sendwich</option>
                <option value="main">main</option>
                <option value="drink">drink</option>
                <option value="sweet">sweet</option>
            </select>
           

           <label htmlFor="isVigen">vigane?</label>
            <select name="isVigen" values={createUser.values.isVigen}
             onBlur={createUser.handleBlur}
            onChange={createUser.handleChange}>
                <option value="no">your option</option>

                <option value="yes" >yes</option>
                <option value="no">no</option>
            </select>

            <label htmlFor="isSpaciy">Spicy?</label>

            <select name="isSpaciy" values={createUser.values.isSpaciy}
              
               onBlur={createUser.handleBlur}
            onChange={createUser.handleChange}>
                <option value="no">your option</option>
                <option value="yes">yes</option>
                <option value="no" >no</option>
            </select>


            <button type="submit"> update </button>

        </form>
        <div className="navLink">
            <NavLink to={{pathname:'/adminpagefunc'}}> back to menu</NavLink>
        </div>
        </div>
      </div>
  

     
 
    </div>
  );
}

export default UpdateElement;
