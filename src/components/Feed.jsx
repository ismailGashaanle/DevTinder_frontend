import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useGetFeeds, useGetProfile } from '../services/Api';
import ProfileView from './ProfileView';
import FeedCard from './FeedCard';

const Feed = () => {
    const loginUser=useSelector(store=>store?.user);
 

    const GetFeeds=useGetFeeds();
    
  
  useEffect(()=>{
  GetFeeds()
  },[])
    const feed=useSelector(store=>store?.feed?.feed)
  return  (
    <div className='h-screen max-h-screen'>
    
 

      <div className='h-screen'>
         <ProfileView/>
        
        <FeedCard feed={feed} />
         <div className='flex flex-col gap-2 top-24 fixed  bg-white ring-1 ring-red-200 p-2 h-screen w-40'>
            <Link to="/profile">profile</Link>
            <Link to="/friends">Friend</Link>
            <Link to="/requests/recieved"> request</Link>
            <Link to="/send/requests">send requests</Link>
           
         </div>
         
         <div>

         </div>
      </div>
      {/* <Link to="/">back</Link> <br/> */}
      {/* <Link to="/profile">profiles</Link> */}
    </div>
  )
}

export default Feed