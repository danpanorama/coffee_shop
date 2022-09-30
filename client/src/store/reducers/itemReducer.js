import * as actionTypes from "../Actions";

const initialState = {
        item:[],
        itemLength:0

    };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_ITEM:
        const newState = {...state}; 
        console.log(action.data)
         newState.item = [...newState.item,action.data];
         newState.itemLength = newState.item.length;
         console.log(newState)
        return newState

        
    case actionTypes.DELET_ITEM:
    const deleteState = {...state}; 
      let arr= deleteState.item.filter((ele)=>{
        return ele._id != action.data
       })
       deleteState.item = arr
       deleteState.itemLength = deleteState.item.length;
      return deleteState

      case actionTypes.LOGOUT_ITEMS:
        const itemsRed = {...state}; 
        itemsRed.item = []
        itemsRed.length = 0
         
          return itemsRed



    case actionTypes.SET:
    const setStete = {...state}; 
    console.log(action.data)
    setStete.item = action.data
    setStete.itemLength = setStete.item.length

    // if(action.data.length > 0){
    //     action.data.map((ele)=>{
    //       setStete.item.push(ele);
    //     })

    // }else{
    //   setStete.item= [] 
    // }
    
    // setStete.itemLength = setStete.item.length

    // console.log(setStete)

    return setStete


    default:
      break;
  }
  return state;
};

export default reducer;
