import React, { useState,useEffect } from "react";
import { Redirect ,NavLink} from "react-router-dom";
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import'../css/body.css'
import'../css/media.css'
import Menu from './Menu'
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";


function Menupagefunc(props) {
    // const token =  useSelector((state)=>state.first.token);
    const dispatch = useDispatch();

    const token = localStorage.getItem('token')
    const user =  useSelector((state)=>state.user.user);
    // const itemsReducer =  useSelector((state)=>state.item.item);
  
    const [ errstate,setErrState] = useState("")
    const [ items,setItems] = useState([])
    const [ goLog,setRedirect] = useState(false)


   


async function getItems(){
    try{
        let pathe = props.location.state.option||"all"
        await
         axiosConfig
         .get("/menu/getoption/"+pathe)
         .then((res) => { 
         if(res.data.msg){
             setErrState(res.data.msg);
         }
                // for(let i = 0; i< itemsReducer.length ; i++){
                //   for(let k = 0 ; k < res.data.data.length; k++){
                //     if(itemsReducer[i].foodarray[0]._id == res.data.data[k]._id){
                //       res.data.data[k].is_my = 'yes'
                //       console.log("here")
                //     }
                //   }
                // }


          setItems(res.data)
         
         
         })
         .catch((err) => {
           console.log(err)
         });
       }catch(e){
         console.log(e)
       }
      
}

async function addItem(e){
  try{
    const arr = JSON.parse(e.target.title)
    
    console.log(arr)
    await
     axiosConfig
     .post("/profile/additem",{token:token,data:arr,user:user})
     .then((res) => { 
     if(res.data.err){
      setRedirect(true)
     }
     setRedirect(false)
     console.log(res.data)
     dispatch({type:actionTypes.ADD_ITEM,data:res.data.result,itemid:res.data.result._id})
     })
     .catch((err) => {
       console.log(err)
     });
   }catch(e){
     console.log(e)
   }
}


useEffect(  ()=>{
    getItems()
  },[])


  if(goLog){
    return <Redirect to={{pathname:"/login"}}/>
    }

  return (
    <div className="menu_sec">
       <Menu items={items} addItem={addItem}/>
     
    </div>
  );
}

export default Menupagefunc;
