import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import '../css/body.css'
import '../css/profile.css'


import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";


function Profile() {
    const token =  useSelector((state)=>state.first.token);
    const [ errstate,setErrState] = useState("")
    const dispatch = useDispatch();

    const user =  useSelector((state)=>state.user.user);
    const items =  useSelector((state)=>state.item);
    console.log(items)



  return (
    <div className="App">
       <div className="all_prof ">
           <div className="bg_prof">

           </div>
           <div className="center_profile d_flex_col">

              <div className="center_prof_c">

              <div className="sec_info ">
                   <div className="side_info d_flex_col">
                        <p> name: {user.name}</p>
                        <p> email: {user.email}</p>

                   </div>
                   <div className="side_info d_flex_col">
                   <p> phon: {user.phon}</p>
                    <p> id: {user.id}</p>
                  </div>

                 

               </div>
               <div className="items_you_have">
                      {items.item.length >0?
                    <div>
                        <h2>{items.item.foodName}</h2>
                    </div>  
                    :
                    <p>no items</p>
                    }
                  </div>

              </div>


           </div>
       </div>
    </div>
  );
}

export default Profile;
