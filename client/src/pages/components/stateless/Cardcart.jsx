import React,{ useState } from 'react';
import '../../../css/nav.css'
import '../../../css/checkboxEffect.css'
import {useDispatch,useSelector} from "react-redux";

export default function PrimarySearchAppBar(props) {
    const userIsLog =  useSelector((state)=>state.user.isLog);
    const itemLength =  useSelector((state)=>state.item.itemLength);
    const itemsList =  useSelector((state)=>state.item.item);

            return (
                            <div className="nav_btn pos_rel"  >
                            <p onClick={props.clickeds}>orders{userIsLog?itemLength:""}</p>
                            <div className={props.is_true? 'pos_absulot_none_activ':'pos_absulot_none'}>
                            <p className="out_btn" onClick={props.clickeds}> X</p>
                            <div className="orferList">
                                <h3>your cart</h3>
                                        {userIsLog &&itemsList.length>0  ? 
                                            itemsList.map((ele)=>{
                                                        return(
                                                            <div key={ele._id} className="d_flex_row jus_contact">
                                                                <div >{ele.foodarray[0].foodName}</div>          
                                                                <div >{ele.foodarray[0].price}</div>                                          
                                                                <div id={ele._id} onClick={props.deletone}>delete </div>
                                                            </div>
                                                        )
                                                })

                                 :"go fill this cart"}
                            </div>
                            </div>
                            </div>
            );
}
