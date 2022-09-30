import React, { useState ,useEffect} from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import axiosConfig from "../config/AxiosConfig";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";
import {useFormik} from "formik"
import '../css/adminpage.css'
import '../css/body.css'



function AdminPage(props) {
    const [isLoggd, setisLoggd] = useState(false);
    const [errstate, seterrstate] = useState(false);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')

    

    useEffect( async ()=>{
      props.getMenu()
      props.getToken()
    },[])

    
    
    const createUser = useFormik({
    initialValues:{
      foodName:'',
        price:'',
        matirials:'',
        foodCategory:"",
        isVigen:"yes",
        isSpaciy:"yes", 
        image:""
  },onSubmit:async values  => {
    try{
      console.log(values)
     await
      axiosConfig
      .post("/menu/set", 
      values
      )
      .then((res) => {
       if(res.data.err){
        console.log(res.data.err)
        seterrstate("משהו לא בסדר")
       }
       seterrstate(res.data.ok)
       values._id = res.data.id
       props.setMenuItems([...props.MenuItems,values])
      
      })
      .catch((err) => {
        console.log(err)
      });
    }catch(e){
      console.log(e)
    }
  }});




  if(isLoggd){
    return <Redirect to={{pathname:"/"}}/>
  }


  return (
    <div className="App">
      <div className="fullsize">
        <h1>add Food Menu</h1>

<div className="max_table">


      <table >  
      <tr>
        <td >update</td>
        <td>
          id
        </td>
              <td>name</td>
              <td>category</td>
              <td>price</td>
              <td>is vigen</td>
              <td>is spaciy</td>
              <td>matirials</td>
              <td>delete</td>
            </tr>
            
      {props.MenuItems.map((e,i)=>{
        return (
         <tbody key={e._id}> 
          

            <tr>
              <td> 
                <Link  to={{pathname:'updateelement',state:{data:e}}}>

                update
                </Link>
                </td>

           
              <td>{e._id}</td>
              <td>{e.foodName}</td>
              <td>{e.foodCategory}</td>
              <td>{e.price}</td>
              <td>{e.isVigen}</td>
              <td>{e.isSpaciy}</td>
              <td>{e.matirials}</td>
              <td><button id={e._id} onClick={props.deleteFood}>delete</button></td>
            </tr>
            </tbody>
          )
          
        
      })}</table>
      </div>
 {props.ok}



        <div className="center">
       
        <form  className="d_flex_col aline_center" noValidate autoComplete="off" onSubmit={createUser.handleSubmit}>
        <label htmlFor="foodName">name?</label>

            <input type="text" name="foodName"  values={createUser.values.foodName}
                       onChange={createUser.handleChange}/>


                      <label htmlFor="image">image name</label>
                       <input type="text" name="image" placeholder="imagename"
                       values={createUser.values.image}
                       onChange={createUser.handleChange}/>
                       
                       <label htmlFor="price">price?</label>

            <input type="number"  name="price" values={createUser.values.price}
                     onChange={createUser.handleChange}/>

        <label htmlFor="matirials">matirials?</label>

           <input type="text"   name="matirials" values={createUser.values.matirials}
                     onChange={createUser.handleChange}/>

<label htmlFor="foodCategory">category?</label>



           <select name="foodCategory" 
           values={createUser.values.foodCategory}
             onBlur={createUser.handleBlur}
            onChange={createUser.handleChange}>
                <option value="mazet">mazet</option>
                <option value="sendwich">sendwich</option>
                <option value="main">main</option>
                <option value="drink">drink</option>
                <option value="sweet">sweet</option>
                <option value="morning">morning</option>
                <option value="salad">salad</option>

            </select>

           <label htmlFor="isVigen">vigane?</label>
            <select name="isVigen" values={createUser.values.isVigen}
             onBlur={createUser.handleBlur}
            onChange={createUser.handleChange}>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>

            <label htmlFor="isSpaciy">Spicy?</label>

            <select name="isSpaciy" values={createUser.values.isSpaciy}
              
               onBlur={createUser.handleBlur}
            onChange={createUser.handleChange}>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
           
        

            <button type="submit"> send </button>


        </form>
        </div>
      </div>
     
     <div className="popap">

     </div>

     
 
    </div>
  );
}

export default AdminPage;
