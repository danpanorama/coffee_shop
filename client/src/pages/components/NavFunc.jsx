import React,{useState} from 'react';
import NavBar from './NavBar'
import '../../css/nav.css'
import {useDispatch,useSelector} from "react-redux";
import axiosConfig from "../../config/AxiosConfig";
import * as actionTypes from "../../store/Actions";
import '../../App.css';
import '../../css/fonts.css';
import Navphon from '../../components/navphon/Navphon'





export default function NavFunc() {

    const itemLength =  useSelector((state)=>state.item.itemLength);
    const itemsList =  useSelector((state)=>state.item.item);
    const user =  useSelector((state)=>state.user);
    const [is_true, setis_true] = useState(false)
    let token = localStorage.getItem('token')

const dispatch = useDispatch();

function logout(){
    dispatch({type:actionTypes.LOGOUT})
    dispatch({type:actionTypes.LOGOUT_ITEMS})

}



function doit(){
   console.log('don it now')
}

function clickeds(){

    if(is_true){
        setis_true(false)
    }else{
        setis_true(true)
    }
}

async function deletone(e){
if(user.isLog){
  try{
    let requast = await
    axiosConfig
    .post("/profile/deleteitem",
    {id:e.target.id,token:token,userid:user.user.number} 
    )
    .then((res) => {
      if(res.data.err){
      }
      console.log(res.data)
      dispatch({type:actionTypes.DELET_ITEM,data:e.target.id})

    })
    .catch((err) => {
      console.log(err)
    });
  }catch(e){
    console.log(e)
  }
}else{
  console.log('go log')
}

}
  

return (
 
<div>
<NavBar  deletone={deletone} setis_true={setis_true}  logout={logout}clickeds={clickeds} is_true={is_true} itemsList={itemsList} itemLength={itemLength} doit={doit}/>

<div className="display_none posAbsulot">
          <Navphon  deletone={deletone}  logout={logout}clickeds={clickeds} is_true={is_true} itemsList={itemsList} itemLength={itemLength} doit={doit}/>
      </div>
</div>

);
}
