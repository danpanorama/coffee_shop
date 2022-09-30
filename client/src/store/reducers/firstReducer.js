import * as actionTypes from "../Actions";

const initialState = {
token:"",
is_valid:false
    };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    
    case actionTypes.LOG:
        const newState = {...state}; 
         newState.token = action.data.token;
         newState.is_valid = true
        return newState


   


          case actionTypes.DELET:
            const deletState = {...state}; 
            deletState.is_valid = false;
            deletState.token = "";
          
            return deletState
        

    default:
      break;
  }
  return state;
};

export default reducer;
