import React from 'react'
import { useSelector } from 'react-redux'
import { useLogout } from '../services/Api'
import { Link } from 'react-router-dom'

const ProfileView = () => {
    const user=useSelector(store=>store.user)

    const HandleLogout=useLogout();


  return (
    <div className='w-full h-20  bg-white shadow-2xl ring-1  sticky top-0 z-50 ring-gray-300'> 
      <div className='grid grid-cols-2 w-11/12 mx-auto p-2'>
        <div className='text-2xl '> <Link to="/feed">DevTinder</Link> </div>

        <div className='flex gap-4 justify-center items-center'>
           <span className='text-md  capitalize font-sans'> 

            <span>{user?.firstName}</span>
            <span className='px-2'>{user?.lastName}</span>
    
            </span>

            <Link to="/profile"> <img src={user?.photo} className='w-14 p-1 cursor-pointer  mx-4 ring-1 ring-gray-950 h-14 rounded-full' /></Link>
             <button className='p-2 rounded-full cursor-pointer bg-red-600  text-white'
              onClick={HandleLogout}

             > logout </button>

        </div>

      </div>
    </div>
  )
}

export default ProfileView
