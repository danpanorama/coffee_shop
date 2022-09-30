import React,{ useState } from 'react';
import { Switch, NavLink, Route } from "react-router-dom";
import '../../../css/nav.css'
import '../../../css/checkboxEffect.css'
import Cardcart from '../stateless/Cardcart'
import {useDispatch,useSelector} from "react-redux";







export default function PrimarySearchAppBar(props) {
    const userIsLog =  useSelector((state)=>state.user.isLog);
    const user =  useSelector((state)=>state.user.user);
    const itemLength =  useSelector((state)=>state.item.itemLength);


    

return (
                        <div className="links_ul">
                        <ul className="ul">  
                        <li className=" out_btn justify_self_start" onClick={props.check}>X</li>
                        {/* <div className="button_menu pos_rel" >
                        <p className=" transition" onClick={props.clickeds}>order{userIsLog?itemLength:""}</p>
                        <div className={props.is_true? 'pos_absulot_none_activ':'pos_absulot_none'}>
                        <p className="out_btn" onClick={props.clickeds}> X</p>
                        nnn
                        </div>
                        </div> */}
                        <li className="item-menu-btn marg_bot_20" >  <Cardcart deletone={props.deletone}  clickeds={props.clickeds} is_true={props.is_true} /></li>           
                        <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/home">   galery  </NavLink></li>
                        <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/login">to know more  </NavLink></li>
                        
                        <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/firstmenu">menu  </NavLink></li>
                        {userIsLog?
                       
                  <div className="w_100">
                        <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/home">   delivery  </NavLink></li>
                        <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/profilefunc">profile </NavLink></li>

                        {/* <li className="item-menu-btn marg_bot_20" onClick={props.check, props.clickeds}><NavLink className="nav_btn "  to="/home">   orderres  </NavLink></li> */}
                         <button className="logout" onClick={props.logout}> log out</button>
                  </div>
                       
                    :<span className="w_100">
                        <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/login">   login  </NavLink></li>
                        <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/createuser">   create account  </NavLink></li>
                        </span>}

                        {user.isboss == 'yes'?
                       <li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "   to="/adminpagefunc">  admin  </NavLink></li>
                        :<p></p>}
                                                                                    
                        </ul>
                        </div>
                      

);
}
