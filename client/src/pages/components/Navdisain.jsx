import React,{ useState } from 'react';
import { Switch, NavLink, Route } from "react-router-dom";
import PrivateRoute from "../../router/PrivateRout";
import Home from '../Home'
import Page from '../Page'
import UpdateElement from '../UpdateElement'
import Menupagefunc from '../Menupagefunc'
import Profilefunc from '../Profilefunc'
import Login from './../login/Login'
import Firstmenu from '../Firstmenu'
import AdminPageFunc from '../AdminPageFunc'
import {useDispatch,useSelector} from "react-redux";
import Createuser from '../login/Createuser'
import * as actionTypes from '../../store/Actions'
import '../../css/nav.css'
import '../../css/checkboxEffect.css'
import '../../css/body.css'






export default function Navdisain(props) {

    const userIsLog =  useSelector((state)=>state.user.isLog);
    const user =  useSelector((state)=>state.user.user);

return (
    <div className={props.checked? 'links_menu': 'links_menu_activ'}>
    {/* {userIsLog? 
     <h2 className="naemuser">welcom  <span className="username">{user.name}</span> </h2>
     :
     ""
 }
<div className='heit_100 d_flex_col_r'>


<div className="links_ul">

<ul className="ul">  
<li className=" out_btn justify_self_start" onClick={props.check}>X</li>




{userIsLog ? 

<div className="button_menu pos_rel" >
<p className=" transition" onClick={props.clickeds}>order{userIsLog?props.itemLength:""}</p>
<div className={props.is_true? 'pos_absulot_none_activ':'pos_absulot_none'}>
<p className="out_btn" onClick={props.clickeds}> X</p>
<div className="orferList">
{userIsLog &&props.itemsList   &&props.itemsList.length>0 ?
props.itemsList.map((ele)=>{
return(
<div key={ele._id} className="d_flex_row jus_contact">
<div >{ele.foodarray}</div>
<div id={ele._id} onClick={props.deletone}>delete </div>
</div>
)
})
:"no card yet"}
</div>
</div>
</div>


:""}


<li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/home">   galery  </NavLink></li>
<li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/login">to know more  </NavLink></li>
<li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/firstmenu">menu  </NavLink></li>

{userIsLog?

<div className="w_100">
<li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/home">   delivery  </NavLink></li>
<li className="item-menu-btn marg_bot_20" onClick={props.check}><NavLink className="nav_btn "  to="/home">   order  </NavLink></li>
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


</div> */}
</div>

);
}
