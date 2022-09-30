import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import axiosconfig from '../config/AxiosConfig'
import * as actionTypes from "../store/Actions";
import '../App.css';
import '../../src/css/fonts.css';
import '../../src/css/alerted.css';




function App(props) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token')
  let number = localStorage.getItem('usernumber')


  function getMyCard(){
      console.log(props.items)   
      props.setalerted(false)
            dispatch({type:actionTypes.SET,data:props.items})
  }
  

 async function not(){
try{
   await
   axiosconfig
    .post("/profile/deletalleitem",
    {token:token,userid:number} 
    )
    .then((res) => {
      if(res.data.err){
          console.log(res.data.err)
      }
      console.log('done')
     props.setalerted(false);

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
    <div className="allscreen">
        <div className="alertedscreen">
            <div className="words">
                <h2>do you still want your order to save?</h2>
            </div>
            <div className="buttonsdiv">
                <button onClick={getMyCard}>yes</button>
                <button onClick={not}> no </button>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
