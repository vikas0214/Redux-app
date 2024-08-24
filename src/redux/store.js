// import { createStore } from "redux"
// const reducer=(state=0,action)=>{
//     switch(action.type){
//         case 'INCREMENT': return state+1;
//         case 'DECREMENT': return state-1;
//         default:return state;
//     }
// }
//  export const store=createStore(reducer);


// using redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
const store=configureStore({
    reducer:{
        cart:cartReducer,    }
})

export default store;