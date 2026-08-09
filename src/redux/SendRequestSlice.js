import { createSlice } from "@reduxjs/toolkit";

const SendRequestSlice=createSlice({
    name:"sendReq",
    initialState:{
        sendReq:[]
    },

    reducers:{
        addsendReq:(state,action)=>{
            state.sendReq=action.payload
        },

        RemoveSendReq:(state,action)=>{
            state.sendReq=state.sendReq.filter(
                sendReq=>sendReq._id!==action.payload
            )
        }
    }
})

export default SendRequestSlice.reducer;
export const {addsendReq,RemoveSendReq}=SendRequestSlice.actions