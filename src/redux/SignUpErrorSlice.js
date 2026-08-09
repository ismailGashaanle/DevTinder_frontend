import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

 const SignUpErrorSlice=createSlice({
    name:"signUpError",
    initialState:null,
    reducers:{
        addError_SignUp:(state,action)=>{
            return action.payload
        },
         RemoveError_SignUp:(state,action)=>{
        return null
    }
    },

   
 })

export default SignUpErrorSlice.reducer;
export const  {addError_SignUp,RemoveError_SignUp} = SignUpErrorSlice.actions
