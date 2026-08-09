// import { configureStore } from "@reduxjs/toolkit";

// const UserReducer from  "./UserSlice.jsx";
 

// const  AppStore = configureStore({
  
//     reducer:{
//         user=UserReducer
//     }
    
// })

// export default AppStore

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice.jsx";
import ErrorSlice from './ErrorSlice.js'
import SignUpErrorSlice  from './SignUpErrorSlice.js'
import FeedSlice from './FeedSlice.js'
import FriendsSlice from './FriendsSlice.js'
import  RequestSlice from './RequestSlice.js'
import SendRequestSlice from './SendRequestSlice.js'

const AppStore = configureStore({
  reducer: {
    user: UserReducer,
    Errors:ErrorSlice,
    signUpError:SignUpErrorSlice,
    feed:FeedSlice,
    friends:FriendsSlice,
    requests:RequestSlice,
    sendReq:SendRequestSlice
  },
});

export default AppStore;