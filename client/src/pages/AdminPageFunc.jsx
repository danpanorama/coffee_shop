import React, { useState ,useEffect} from "react";
import { Redirect } from "react-router-dom";
import axiosConfig from "../config/AxiosConfig";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";
import {useFormik} from "formik"
import AdminPage from './AdminPage'
import '../css/adminpage.css'
import '../css/body.css'



function AdminPageFunc() {
    const token = localStorage.getItem('token')

    const [MenuItems, setMenuItems] = useState([]);

    const [ok, setok] = useState("");
    const [updateState, setUpdateState] = useState(false);



    



    async function getMenu(){
    await
    axiosConfig
   .get("/menu/getMenue")
    .then((res) => {
      if(res.data.err){
        console.log('err')
      }
      console.log(res.data)
       setMenuItems(res.data.menu)
    })
    .catch((err) => {
      console.log(err)
    });

    }


    
 async function getToken(){
    try{
        await
          axiosConfig
         .post("/getToken/tokenverifay", 
        {token:token}
          )
          .then((res) => {
            if(res.data.err){
              // dispatch({type:actionTypes.DELET})
            }
             console.log(res.data,"this the token")
          })
          .catch((err) => {
            console.log(err)
          });

        }catch(e){
          console.log(e)
        }

  }

 async function deleteFood(e){
    try{
      await
        axiosConfig
       .post("/menu/delete/"+e.target.id, 
      {token:token}
        )
        .then((res) => {
          if(res.data.err){
            // dispatch({type:actionTypes.DELET})
          }

          console.log(MenuItems)
         let arr = MenuItems.filter((ele,i)=>{
           return ele._id != e.target.id
          })
          console.log(arr)
          setMenuItems(arr)

        })
        .catch((err) => {
          console.log(err)
        });

      }catch(e){
        console.log(e)
      }

  }






    
    
  return (
    <div className="App">


        <AdminPage getMenu={getMenu}  deleteFood={deleteFood} setMenuItems={setMenuItems} getToken={getToken} MenuItems={MenuItems} ok={ok}/>
 
    </div>
  );
}

export default AdminPageFunc;
