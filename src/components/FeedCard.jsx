import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSendReq } from '../services/Api'
import { RemoveRequestSlice } from '../redux/RequestSlice'

const FeedCard = ({feed}) => {
    //   const feed=useSelector(store=>store?.feed?.feed)

    
    const  RequestSend= useSendReq()
    const dispatch=useDispatch()
  return (
    <div>
        <div className='w-8/12 space-x-4 p-4 grid-cols-1 cursor-pointer gap-2 mx-auto px-3 grid grid-cols-2 '>
 
     {
        feed.map((fed)=>(
                   <div key={fed._id} className='p-4 cursor-pointer bg-white ring-1 sm:w-full md:w-10/12 ring-gray-300 shadow-2xl '>
        <img src={fed?.photo} className='w-6-12 cursor-pointer  max-w-8/12 mx-auto   ring-1 ring-gray-300 p-1 rounded-full' />
        <div className='flex gap-1 text-(--color-primary) capitalize font-bold text-md items-center text-2xl'>
            <span>{fed?.firstName}</span>
            <span>{fed?.lastName}</span>
        </div>
        <div className='flex text-(--color-primary) font-bold text-md  font-sans capitalize flex-col gap-2 '>
            <span>{fed?.phone}</span>
            <span>{fed?.email}</span>
            <span>{fed?.Gender}</span>
        </div>

        <div className='flex gap-2 px-3 py-2'>
            <button className='p-2 bg-(--color-primary) cursor-pointer text-white rounded-md'
              onClick={async()=>{
                await RequestSend("addfriend",fed?._id);
                await  dispatch(RemoveRequestSlice(fed?._id))
              }}
            >addfriend</button>
            <button className='bg-gray-300 cursor-pointer rounded-md p-2'
              onClick={async()=>{
                await RequestSend("remove",fed?._id);
                await  dispatch(RemoveRequestSlice(fed?._id))
              }}
            >remove</button>
        </div>

     </div>
        )
     
        )
     }
         
      
     </div>
    </div>
  )
}

export default FeedCard
