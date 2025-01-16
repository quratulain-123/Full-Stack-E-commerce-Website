import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";
import { act } from "react";
 

const initialState = {
    productsData: [],
    userInfo: null,
}

export const martSlice = createSlice ({
    name: "MiniMart",
    initialState,
    reducers: {
        addToCart: (state , action) => {
            const item = state.productsData.find((item)=> item._id === action.payload._id);

            if(item){
                item.quantity += action.payload.quantity;
            }
             else{
                state.productsData.push(action.payload) ;
             }
             
        },
        deleteItem: (state , action) => {
            state.productsData = state.productsData.filter(
             (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productsData = [];
        },
        increamentQuantity: (state , action) => {
            const item = state.productsData.find(
                (item) => item._id === action.payload._id
            );
            if(item){
                item.quantity++;
            }
        },
        decrementQuantity: (state , action) => {
            const item = state.productsData.find(
                (item) => item._id === action.payload._id
            );
            if(item.quantity === 1){
              item.quantity = 1
            }else{
                item.quantity--;
                }
        },
        addUser: (state , action) =>{
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    },
});

export const {
addToCart,
deleteItem,
resetCart,
increamentQuantity,
decrementQuantity,
addUser,
removeUser,
} = martSlice.actions;
export default martSlice.reducer;
