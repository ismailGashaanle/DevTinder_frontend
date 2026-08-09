import { createSlice } from "@reduxjs/toolkit";


const UserSlice=createSlice({
    name:"user",
    initialState: null,
    
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },

        RemoveUser:(state,action)=>{
            return null
        }
    }
})




export default UserSlice.reducer;
 export const {addUser,RemoveUser} = UserSlice.actions