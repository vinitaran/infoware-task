import {createSlice} from "@reduxjs/toolkit";

export const appSlice=createSlice({
    name:"app",
    initialState:{
        cartTotal:0.00,
    },
    reducers:{
        setCartTotal:(state,action)=>{
            state.cartTotal+=action.payload.itemValue;
        },
        decCartTotal:(state,action)=>{
            state.cartTotal-=action.payload.itemValue;
        }
    },
});

export const {setCartTotal, decCartTotal}=appSlice.actions;

export const selectCartValue=(state)=>state.app.cartTotal;

export default appSlice.reducer;