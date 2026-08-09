import React, { useEffect } from 'react'
import SignUp from '../pages/SignUp'
import { Outlet } from 'react-router-dom'
import { useGetProfile } from '../services/Api';
import { useSelector } from 'react-redux';

function Body() {
const user=useSelector(store=>store?.user)
    const GetProfile=useGetProfile();
    

    useEffect(()=>{
      
      GetProfile()
      
      
    },[])
    
  return (
    <div>
      {/* <SignUp/> */}
      <Outlet/>
    </div>
  )
}

export default Body
