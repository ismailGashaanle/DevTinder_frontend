import { createSlice } from "@reduxjs/toolkit";

const FeedSlice=createSlice({

    name:"feed",
    initialState:{
        feed:[]
    },

    reducers:{
        addFeed:(state,action)=>{
             state.feed = action.payload;
            //   state.feed.push(actions.payload)
             
        },
        removeFeed:(state,actions)=>{
            // return state?state!=actions.payload
            return null
        }

    }
})

export default FeedSlice.reducer
export const {addFeed,removeFeed}=FeedSlice.actions
