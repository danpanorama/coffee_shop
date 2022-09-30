import React, { useState, useEffect } from "react";
import axiosConfig from "../config/AxiosConfig"

import '../css/home.css'
import '../css/media.css'


import Opening from './components/stateless/Opening'
import Imagesec from './components/stateless/Imagesec'
import Homesection from './components/stateless/Homesection'

import {useDispatch,useSelector} from "react-redux";



function Home() {

  const [weatherState, setWeaterState] = useState(false)

  useEffect( async ()=>{
    try{
      await
       axiosConfig
       .get("/weather"
       )
       .then((res) => {
       console.log(res.data.msg,"is rain today")
       if(res.msg == 'yes'){
        setWeaterState(true)
       }else{
        setWeaterState(false)
       }
       })
       .catch((err) => {
         console.log(err)
       });
     }catch{
       console.log('err')
     }
  },[])

  const user =  useSelector((state)=>state.user);
  return (
  <div className="App">
     
  <div className="flex">
  <Opening weather={weatherState}/>
  </div>
  <div className="h_w_pp"></div>
<Homesection/>

<Imagesec/>
   
  </div>
  );
}

export default Home;
