import {createSlice} from "@reduxjs/toolkit";

export const appSlice=createSlice({
    name:"app",
    initialState:{
        cartTotal:0.00,
    },
    reducers:{
        setCartTotal:(state,action)=>{

            console.log("The reducer is getting called");
            console.log(`I am the passed value${action.payload.itemValue}`);
            console.log(`I am the previous value${state.cartTotal}`);
            state.cartTotal+=action.payload.itemValue;
            console.log(`Like is this right? ${state.cartTotal}`);
        },
    },
});

export const {setCartTotal}=appSlice.actions;

export const selectCartValue=(state)=>state.app.cartTotal;

export default appSlice.reducer;