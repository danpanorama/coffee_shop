import * as actionTypes from "../Actions";



const initialState = {
isLog:false,
user:{},


    };


const reducer = (state = initialState, action) => {



  switch (action.type) {

    
    case actionTypes.LOGIN:
        const newState = {...state}; 
        console.log(action.data)
         newState.user = action.data.userInfo;
         newState.isLog = true
        return newState


    case actionTypes.LOGOUT:
        const loguot = {...state}; 
        loguot.isLog = false;
        localStorage.setItem('token', undefined)
        localStorage.setItem('usernumber',null)
        localStorage.setItem('user',undefined)
        loguot.user ={};
    return loguot


    case actionTypes.STILL:  
      const stateStill = {...state}; 
      let user = localStorage.getItem('user');
      if(user != 'undefined'){
        let par =JSON.parse(user)
      if(par == undefined || par == 'undefined' ){
        return stateStill
      }else{
        stateStill.user = par
        stateStill.isLog = true
      }}else{
        console.log('user is undefined')
      }
    


      

      return stateStill
        

    default:
      break;
  }
  return state;
};

export default reducer;
