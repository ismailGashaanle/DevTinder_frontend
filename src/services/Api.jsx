import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, RemoveUser } from '../redux/UserSlice';
import { BASE_URL } from '../utils/Constant';
import { useNavigate } from 'react-router-dom';
import { addError, RemoveError } from '../redux/ErrorSlice';
import ValidateSignUp from '../utils/CheckValidate';
import { addError_SignUp, RemoveError_SignUp } from '../redux/SignUpErrorSlice';
import { addFeed } from '../redux/FeedSlice';
import { addFriends } from '../redux/FriendsSlice';
import { addRequest } from '../redux/RequestSlice';
import { addsendReq } from '../redux/SendRequestSlice';

export function useLoginApi(email,password) {
  const dispatch=useDispatch();
    const user=useSelector(store=>store?.user)
  
  

  const navigate=useNavigate();
 
 
   
     const HandleLogin=async(Error,setError)=>{


        
        
        try{
          
      
          const res = await axios.post(BASE_URL + "/login", {
            email,
            password
            }, {
            withCredentials: true
            });
         //   console.log(res.data?.data)
            dispatch(addUser(res?.data?.data))
          //  console.log(res?.data?.data)
             dispatch(RemoveError())
            return navigate("/feed")
           

        }catch(err){
    // console.log(err)
 ///console.log(err.response?.data);
  // console.log(err.response?.status);
     if(err.status===400){
     // console.log("please login")
      //  console.log(err.response?.data);
  //console.log(err.response?.status);
      dispatch(addError(err.response?.data))
     }
      setTimeout(()=>{
              //  dispatch(addError_SignUp(message))
               dispatch(RemoveError())
        },2000)
        }
    }

  return  HandleLogin
}

 



export const useSignUpApi=(firstName,lastName,phone,email,password,confirmPassword)=>{
 const dispatch=useDispatch();
 
   const navigate=useNavigate();

 
 
     const HandleSingUp=async()=>{
      
       
    try{
      const message  = ValidateSignUp(firstName,lastName,phone,email,password,confirmPassword)
      if(message){
      ///  console.log(message)
        dispatch(addError_SignUp(message))

        setTimeout(()=>{
              //  dispatch(addError_SignUp(message))
               dispatch(RemoveError_SignUp())
        },2000)
        return;
      }
      

      


       const res= await axios.post(BASE_URL + "/signUp",{
        firstName,lastName,phone,email,password
       },{withCredentials:true})
        ///console.log(res.data?.data)
        dispatch(addUser(res.data?.data))
        
        return navigate("/profile")
        
    }catch(err){
      if (err.response?.status === 400) {
       dispatch(addError_SignUp(err.response?.data?.message));
      }
    }
     }
    return HandleSingUp
    }
  
 



 


export const useGetProfile=()=>{
 const dispatch=useDispatch();
 const navigate=useNavigate();
 const user= useSelector(store=>store?.user)
  const GetProfile=async()=>{
    try{
      
    if(!user){
         const res= await axios.get(BASE_URL + "/profile",{withCredentials:true});
         dispatch(addUser(res.data?.loginUser))
      //   console.log(res?.data)
         return navigate("/feed")
    }
     

    }catch(err){

      if(err.status===401){
        return  navigate("/")
      }
     
      console.log(err.message)
    }

  }

  return GetProfile
}


export const useLogout=()=>{
  const dispatch=useDispatch()
   const navigate=useNavigate();
  const HandleLogout=async()=>{

    try{
        const res= await axios.post(BASE_URL + "/logout",{},{withCredentials:true});
        dispatch(RemoveUser());
       return   navigate("/")

            
    }catch(err){
      console.log(err)
    }
 
  }
  return HandleLogout
}



export const useProfileEdit=(  firstName,lastName,phone,Gender,photo)=>{
  const dispatch=useDispatch();
 const GetProfile=useGetProfile();
  const HandleProfileEdit= async()=>{
    try{
      const res= await axios.patch(BASE_URL + "/profile/edit",{
            firstName,
             lastName,
             phone,
             Gender,
             photo
      },{withCredentials:true})

      dispatch(addUser(res.data?.user))


     /// console.log(res.data?.user)
      GetProfile()


    }catch(err){
      console.log(err.message)
    }

  }
  return HandleProfileEdit

}


export const useGetFeeds=()=>{
const dispatch=useDispatch();
  const GetFeeds=async()=>{
    try{
      const res= await axios.get(BASE_URL + "/feed",{withCredentials:true})
      ///console.log(res.data.data[0])
       dispatch(addFeed(res.data.data))

    }catch(err){
      console.log(err.message)
    }

  }
  return GetFeeds

}


export const useGetFriends=()=>{
  const dispatch=useDispatch();

  const GetFriends=async()=>{

    try{
      const res= await axios.get(BASE_URL + "/user/connection",{withCredentials:true});
    ///  console.log(res.data.data)
      dispatch(addFriends(res?.data?.data))


    }catch(err){
      console.log(err.message)
    }

  }


  return GetFriends

}


export const useRequests=()=>{
 const dispatch=useDispatch();
  const getRequests  = async()=>{
   try{

       const res= await axios.get(BASE_URL + "/user/request/received",{withCredentials:true});
       ///console.log(res?.data?.connectionRequest)
    dispatch(addRequest(res?.data?.connectionRequest))

    

   }catch(err){
    console.log(err.message)
   }

  }

  return getRequests

}

export const useRecievedRequests=()=>{
  const GetFeeds=useGetFeeds();
  const getRequestRecieved=async(status,requestId)=>{

    try{
      const res= await axios.post( `${BASE_URL}/request/review/${status}/${requestId}`,{},{withCredentials:true})
     /// console.log(res.data)
     

    }catch(err){
      console.log(err.message)
    }

  }
    const Subscribed = getRequestRecieved
  
     GetFeeds();
    

      return Subscribed;
}

export const useSendReq=()=>{
  const dispatch=useDispatch();
  const GetFeeds=useGetFeeds();

  const RequestSend=async(status,requestSendId)=>{
    try{
      const res= await axios.post(`${BASE_URL}/request/send/${status}/${requestSendId}`,{},{
        withCredentials:true
      })

      ////console.log(res.data?.data)
      dispatch(addsendReq(res.data?.data))

    }catch(err){
      console.log(err)
    }
  }

  
    // const Subscribed= RequestSend
  //     useEffect(()=>{
  //       GetFeeds();
  //     })
  //    setTimeout(()=>{
  //  return  Subscribed
  // },3000)

  useEffect(() => {
  const interval = setInterval(() => {
    GetFeeds();
  }, 3000);

  return () => clearInterval(interval);
}, []);

return RequestSend
}