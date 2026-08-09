import { createSlice } from "@reduxjs/toolkit";

const ErrorSlice=createSlice({
    name:"Errors",
     initialState:null,
    
     reducers:{
        addError:(state,action)=>{
            return action.payload
        },

        RemoveError:(state,action)=>{
            return null
        }

     }
})


export default ErrorSlice.reducer;
export const {addError,RemoveError}=ErrorSlice.actions