import React, { useState,useEffect } from "react";
import { Redirect ,NavLink} from "react-router-dom";
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import'../css/body.css'
import'../css/media.css'
import'../css/menu.css'

import images from '../tablealma.jpg'
import salad from '../imgsalad.jpg'
import img1 from '../IMG_0275.jpg'
import img2 from '../IMG_6639.JPG'
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";


function Menu(props) {
  const [ clicked, setclicked] = useState(false)
  const itemsReducer =  useSelector((state)=>state.item.item);

  const [ id, setid] = useState("")
  const [ sum, setSum] = useState(1)



  function getvalue(e){
    setSum(e.target.value)
  }
  

 


  function phonclick(e){
    setid(e.target.id)
    setclicked(true)
    if(clicked && id == e.target.id){
      setclicked(false)

    }else{
      setclicked(true)

    }
  }

  return (
    <div className="menu_sec">
        <div className="bg_menu">

            </div>
            {/* <h1>Menu</h1> */}
            <div className="menu_store">
                <div className="items_in_store">
                  <div className="grid">
                    {props.items.data &&props.items.data.length>0?props.items.data.map((ele,i)=>{  
                    return(
                        <div className="holdall_card" key={ele._id}>
                        <div className="hold_all_card" key={ele._id}>
                          <div className="card">

                            <div className="image_in_card">
                              <img className="image ob_fit bc_size_cover" src={ele.image ? ele.image : '...'} alt=""/>
                            </div>

                            <div className="card_body">
                                  <div className="item_disc">
                                    <h2 className="foodName">{ele.foodName}</h2>
                                    <p className="matirials no_margin">{ele.matirials}</p>
                                    <p className="price">
                                      {ele.price}
                                    </p>
                                  </div>
                            </div>

                            <div className="buttons_to_by">
                                <div className="button_get d_flex_row_fix">
                                    <div className="quary">
                                   
                                        <input type="number" min='0'  className='input' onChange={getvalue}  name="quarety"/>
                                      
                                      </div>
                                     
                                      <div  className=" get_btn add"> 
                                     <p className="btn" onClick={props.addItem} title={JSON.stringify(ele)} >add to card</p>
                                      </div>
                                  </div>
                                {/* <div className="button_get d_flex_row_fix">
                                  <div className="quary">
                                  <input type="number" className="input" name="quarety"/>

                                  </div>
                                  <div className="get_btn bay">
                                      <p>bay now</p>
                                  </div>
                                </div> */}
                              </div>
                            
                          </div>

                      
                        </div>
                        <div className="phon">
                          <div className="flexrow">
                            <div className="image_phon">
                            <div className="">
                              <img className="image ob_fit " src={ele.image ? ele.image : '...'} alt=""/>
                            </div>
                            </div>
                            <div  className="click" > 
                            <div className="body" id={ele._id} onClick={phonclick}>
                              <p className="marg_zero namefoodPhon">{ele.foodName}</p>
                            </div>
                        
                            </div>
                          </div>
                         
                          <div  className={ id==ele._id && clicked ?"menuItemAbut_clicked":"menuItemAbut"}>
                           <div className="d_flex_row">
                              <p>{ele.foodName}</p>
                              <p>{ele.price}</p>
                           </div>
                           
                           
                            <p>{ele.matirials}</p>
                            <div className="button_get d_flex_row_fix">
                                    <div className="quary">
                                        <input type="number" className="input"  name="quarety"/>
                                      </div>
                                      <div className=" get_btn add">
                                     <p className="btn" onClick={props.addItem} title={JSON.stringify(ele)}>add to card</p>
                                      </div>
                                  </div>

                            </div>
                        </div>
                        </div>
                      )
                    }):<p>"no items found"</p>}





                  </div>



                </div>
            </div>
     
    </div>
  );
}

export default Menu;
