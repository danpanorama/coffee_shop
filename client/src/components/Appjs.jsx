import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import axiosconfig from '../config/AxiosConfig'
import * as actionTypes from "../store/Actions";
import NavBar from '../pages/components/NavFunc'
import '../App.css';
import '../../src/css/fonts.css';
// import Navphon from '../components/navphon/Navphon'
import AlertMassage from '../components/AlertMassage'


function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token')
  const is_remember = localStorage.getItem('rem')
  const user =  useSelector((state)=>state.user);
  const [alerted,setalerted] = useState(true)
  const [items,setItems] = useState([]);







  async function get(){     
      await axiosconfig.post("/gettoken/tokenverifay",{
        token:token
      })
      .then((res) => {
        if(res.data.err){
          dispatch({type:actionTypes.LOGOUT})
          return
        }  
        dispatch({type:actionTypes.STILL})  
      return
      })
      .catch((err) => {
        console.log("you refresh and you got problem becuse your token is expierd",err)
      });
   
}


async function getMyCard(){
let number = localStorage.getItem('usernumber')
    try{
     await
     axiosconfig
      .get("/profile/get", {
        params:{userid:number}
      }
       )
       .then((res) => {
         if(res.data.err){
           // dispatch({type:actionTypes.DELET})
         }
         setItems(res.data.items);
        // dispatch({type:actionTypes.SET,data:res.data.items})
       })
       .catch((err) => {
         console.log(err)
       });
 
     }catch(e){
       console.log(e)
     }
 }
  

  

  useEffect(()=>{

    if(is_remember == 'true'){
       get()
       getMyCard()
    }else{
      console.log('not true')
    }

  },[])



  return (
    <div className="App">
      {alerted && items.length >0 && user.isLog && is_remember == 'true'?

    <AlertMassage setalerted={setalerted} items={items}/>  

    :""}
        
      {/* <div className="top">
      <p className="font_4">בואו לשתות קפה מדהים באווירה טובה</p>
      </div> */}
      <div className="navbar">
          <NavBar />
      </div>
    
      
      <Redirect to={{pathname:"/home"}}/>

      {/* <div className="display_none posAbsulot">
          <Navphon/>
      </div> */}
    </div>
  );
}

export default App;
