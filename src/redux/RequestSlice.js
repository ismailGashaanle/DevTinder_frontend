import { createSlice } from "@reduxjs/toolkit";

const RequestSlice=createSlice({
    name:"requests",
    initialState:{
        requests:[]
    },
    reducers:{
        addRequest:(state,action)=>{
           state.requests=action.payload 
        },

        RemoveRequestSlice:(state,action)=>{
            state.requests=state.requests.filter(
                req=>req._id !== action.payload
            )
        }

    }
})


export default RequestSlice.reducer;
export const {addRequest,RemoveRequestSlice}=RequestSlice.actions