import React,{ useState } from 'react';
import { Switch, NavLink, Route } from "react-router-dom";
import PrivateRoute from "../../router/PrivateRout";
import Home from '../Home'
import Page from '../Page'
import UpdateElement from '../UpdateElement'
import Menupagefunc from '../Menupagefunc'
import Profilefunc from '../Profilefunc'
import Navdisain from './Navdisain'
import Logo from './../../logoalma.png'
import Cardcart from './stateless/Cardcart'
import Cartphon from './stateless/Navbarphon'

import '../../css/nav.css'
import '../../css/checkboxEffect.css'
import Firstmenu from '../Firstmenu'
import AdminPageFunc from '../AdminPageFunc'
import {useDispatch,useSelector} from "react-redux";
import Createuser from '../login/Createuser'
import * as actionTypes from '../../store/Actions'
import Login from './../login/Login'






export default function PrimarySearchAppBar(props) {

    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();
    const [navbar,setnavbar ] = useState(false)
    const [total,settotal ] = useState(0)

    const token =  useSelector((state)=>state.first.is_valid);
    const userIsLog =  useSelector((state)=>state.user.isLog);
    const user =  useSelector((state)=>state.user.user);
    const itemLength =  useSelector((state)=>state.item.itemLength);
    const itemsList =  useSelector((state)=>state.item.item);


    const changebacgraound = ()=>{
       if(window.scrollY >= 80){
           setnavbar(true)
       }
       else{
           setnavbar(false)
       }
    }

    function check(e){
        props.setis_true(false)
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }

    window.addEventListener('scroll', changebacgraound)

return (
<div className='zindex'>
  <nav className={navbar? '  activ ' : 'all_nav  '}>
 <div className="pading_left pading_right h_100 ">
 <div className="nav_first">
     <div className="logo">
     <NavLink   to="/home">
                 
                
    <img src={Logo} className="image" alt=""/>
 </NavLink>
     </div>
        <div className="nav flex_row_stay_center">
             <div className="nav_links_ul flex_row_stay_center">
             <NavLink className="nav_btn"  to="/firstmenu">
                    menu
             </NavLink>

                 <NavLink className="nav_btn pos_rel"  to="/home">
                    galery
                 </NavLink>

                 <Cardcart deletone={props.deletone}  clickeds={props.clickeds} is_true={props.is_true} />
                 
                 <NavLink className="nav_btn"  to="/profilefunc">
                    profile
                 </NavLink>
                 {user.isboss == 'yes'?
                   <NavLink className="nav_btn"  to="/adminpagefunc">
                   admin
                </NavLink>
                :<p></p>}
             </div>
                 <div className="menubutton">
                   <div className="menu_effect">
                       <div className="button_menu"  onClick={check}>
                           menu
                           &#9776;
                       </div>
                       </div>
                       </div>

                       <div className={checked? 'links_menu': 'links_menu_activ'}>
                         {userIsLog? 
                                <h2 className="naemuser">welcom  <span className="username">{user.name}</span> </h2>
                                :
                                ""
                         }

                         {/* <Navdisain checked={checked}  itemsList={props.itemsList} clickeds={props.clickeds} check={check} logout={props.logout}/> */}
                        
                              <Cartphon deletone={props.deletone}  check={check} clickeds={props.clickeds} is_true={props.is_true} logout={props.logout} />
                       </div>
         
                    
</div>
</div>
</div>


</nav>


<Switch>
<Route path="/home" component={Home}exact/>
<Route path="/Page" component={Page}exact/>
<Route path="/createuser" component={Createuser}exact/>
<Route path="/login" component={Login}exact/>
<Route path="/firstmenu" component={Firstmenu}exact/>
<Route path="/menupagefunc" component={Menupagefunc}exact/>

<PrivateRoute path="/profilefunc" component={Profilefunc} exact/>
<PrivateRoute path="/adminpagefunc" component={AdminPageFunc} exact/>
<PrivateRoute path="/updateelement" component={UpdateElement} exact/>
</Switch>
</div>

);
}
