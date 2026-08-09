import { createSlice } from "@reduxjs/toolkit";

const FriendsSlice=createSlice({
    name:"friends",
    initialState:{
        friends:[]
    },
 
    reducers:{
           addFriends:(state,action)=>{
            state.friends=action.payload

           },
           RemoveFriends:(state,action)=>{
                  return null
           }
    }
})


export default FriendsSlice.reducer;

export const {addFriends,RemoveFriends}=FriendsSlice.actions