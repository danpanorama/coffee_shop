import {  combineReducers } from "redux";
import firstReducer from "../reducers/firstReducer";
import userReducer from "../reducers/users";
import itemReducer from "../reducers/itemReducer";







const rootReducer = combineReducers({
    first: firstReducer,
    user:userReducer,
    item:itemReducer
   
  });


  export default rootReducer;