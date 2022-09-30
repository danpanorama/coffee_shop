import React, { useState } from "react";
import { Redirect ,NavLink} from "react-router-dom";

import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import'../css/menu.css'
import'../css/body.css'
import'../css/media.css'

import images from '../tablealma.jpg'
import salad from '../imgsalad.jpg'
import img1 from '../IMG_0275.jpg'

import img2 from '../IMG_6639.JPG'


import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";


function Firstmenu() {
    // const token =  useSelector((state)=>state.first.token);
    // const [ errstate,setErrState] = useState("")
    // const dispatch = useDispatch();
    const [ go,setgo] = useState(false)
    const [ locationState,setLocation] = useState("")

  async function gohere(e){
    try{

        const promise1 = new Promise( async (ok, notok) => {
            console.log(e.target.id)
            await setLocation(e.target.id)
            ok(locationState) 

            notok('err: cenot put the location')
          });
          
          promise1.then((value) => {
      
        start()
     
          });



       
        
     

    }catch(e){
        console.log(e)
    }

   }
   function start(){
    setgo(true)
    console.log(locationState,"locationnnn")

   }

  if(go){
    return <Redirect to={{pathname:"/menupagefunc" ,state:{option: locationState}}}/>
  }



  return (
    <div className="menu_sec">
        <div className="bg_menu">

        </div>

        <div className="threeOptions flex_item_center">
            <div className="centerIt flex_row_to_col">
              
                <div className="squar_option flex_item_center">
                
                    <div  className="circul_icon">


                        <img src={salad} className="image ob_fit" alt=""/>
                    </div>
                    <div className="menu_sec_word flex_item_center">
                    <h2  className="h1_anim" onClick={gohere} id="main" >ערב</h2>
                    <h2 onClick={gohere} className="op0_effect" id="main"  >go</h2>

                    </div>

                </div>

                <div  className="squar_option flex_item_center">
                        <div className="circul_icon" >
                        <img src={images} className="image ob_fit" alt=""/>
                        </div>
                        <div className="menu_sec_word flex_item_center">
                      <h2  onClick={gohere} className="h1_anim"  id="main">צהוריים</h2>
                      <h2 onClick={gohere} className="op0_effect" id="main"  >go</h2>

                        </div>
                </div>

                    <div  className="squar_option flex_item_center">


                    <div className="circul_icon">
                    <img src={img1} className="image ob_fit" alt=""/>
                    </div>
                    <div className="menu_sec_word flex_item_center">
                    <h2 onClick={gohere} className="h1_anim" id="sweet">מתוקים</h2>
                    <h2 onClick={gohere} className="op0_effect" id="sweet"  >go</h2>

                    </div>

                    </div>
               

            </div>
        </div>


        <div className="threeOptions flex_item_center">
            <div className="centerIt flex_row_to_col">

        <div  className="squar_option flex_item_center">
                        <div className="circul_icon">
                        <img src={img2} className="image ob_fit" alt=""/>
                        </div>
                        <div className="menu_sec_word flex_item_center">
                       <h2 onClick={gohere} className="h1_anim" id="drink">משקאות</h2>
                       <h2 onClick={gohere} className="op0_effect"  id="drink"  >go</h2>

                        </div>
                </div>

                <div  className="squar_option flex_item_center">

              
                    <div className="circul_icon">
                    <img src={img1} className="image ob_fit" alt=""/>
                    </div>
                    <div className="menu_sec_word flex_item_center">
                    <h2 onClick={gohere} id="morning" className="h1_anim">בוקר</h2>
                    <h2 onClick={gohere} className="op0_effect"  id="morning"   >go</h2>

                    </div>

                </div>

                
            
                </div>
                </div>
     
    </div>
  );
}

export default Firstmenu;
