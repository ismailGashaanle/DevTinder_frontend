import React, { useEffect } from 'react'
import { useRecievedRequests, useRequests } from '../services/Api'
import { useDispatch, useSelector } from 'react-redux';
import ProfileView from './ProfileView';
import { RemoveRequestSlice } from '../redux/RequestSlice';

const Requests = () => {

    const getRequests=useRequests();
    useEffect(()=>{
          getRequests();
    },[])

    const requests=useSelector(store=>store?.requests?.requests)

    // if(requests.length===0){
    //     return <h1 className='text-4xl h-screen justify-center capitalize text-center font-bold bg-gray-300 ring-1 ring-gray-300 shadow-2xl p-6 rounded-lg'>  not found requests  </h1>
    // }
    // if(!requests){
    //     return <h1>  not found requests  </h1>
    // }
    

    const getRequestRecieved=useRecievedRequests();
    const dispatch=useDispatch();

  return (
    <div className='w-full'>
        <ProfileView/>

        {
  requests?.length === 0 && (
    <div>
      <h1 className='text-4xl h-screen flex items-center justify-center capitalize text-center font-bold bg-gray-300 ring-1 ring-gray-300 shadow-2xl p-6 rounded-lg'>
        not found requests
      </h1>
    </div>
            )
            }
        
        <span  className='text-2xl text-center my-4 flex items-center justify-center'>Request Recieved</span>
        <div className='w-8/12 sm:text-sm max-w-full sm-w-full space-x-4 p-4 grid-cols-1 cursor-pointer gap-2 mx-auto px-3 grid grid-cols-2 '>
 
     {
        requests.map((reqs)=>(
                   <div key={reqs._id} className='p-4 cursor-pointer bg-white ring-1 sm:w-full md:w-10/12 ring-gray-300 shadow-2xl '>
        <img src={reqs?.fromUserId?.photo} className='w-6-12 cursor-pointer  max-w-8/12 mx-auto   ring-1 ring-gray-300 p-1 rounded-full' />
        <div className='flex gap-1 text-sm pt-3 text-(--color-primary) capitalize font-bold text-md items-center text-2xl'>
            <span>{reqs?.fromUserId?.firstName}</span>
            <span>{reqs?.fromUserId?.lastName}</span>
        </div>
        <div className='flex text-(--color-primary) font-bold text-md  font-sans capitalize flex-col gap-2 '>
            <span>{reqs?.fromUserId?.phone}</span>
            <span>{reqs?.fromUserId?.email}</span>
            <span>{reqs?.fromUserId?.Gender}</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-3 py-2'>
            <button className='p-2 bg-(--color-primary) cursor-pointer text-white rounded-md'
            
            onClick={async()=>{
                await getRequestRecieved("confirm",reqs?._id);
                await dispatch(RemoveRequestSlice(reqs?._id))
            }}

            >confrim</button>
            <button className='bg-gray-300 cursor-pointer rounded-md p-2'
             onClick={async()=>{
                await getRequestRecieved("delete",reqs?._id);
                await dispatch(RemoveRequestSlice(reqs?._id))
                // await getRequestRecieved("delete",reqs?.fromUserId?._id);
                // await dispatch(RemoveRequestSlice(reqs?.fromUserId?._id))
                
            }}
            >delete</button>
        </div>

     </div>
        )
     
        )
     }
         
      
     </div>
    </div>
  )
}

export default Requests
