import React, { useEffect } from 'react'
import { useGetFriends } from '../services/Api'
import FriendCard from './FriendCard';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import ProfileView from './ProfileView';

function Friends() {

  const GetFriends=useGetFriends();
  useEffect(()=>{
   GetFriends()
  },[])

  const friends=useSelector(store=>store?.friends?.friends)

  return (
    <div>
   <div>
        <ProfileView/>    
        <div> <FriendCard friends={friends} /> </div>
      </div>
    </div>
  )
}

export default Friends
