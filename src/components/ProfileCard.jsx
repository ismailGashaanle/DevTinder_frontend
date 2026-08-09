import React from 'react'
import { useSelector } from 'react-redux'

const ProfileCard = () => {

    const user=useSelector(store=>store?.user)
  return (
    <div className='w-10/12 p-4'>
 
     <div className='p-4 bg-white ring-1 w-full ring-gray-300 shadow-2xl '>
        <img src={user?.photo} className='w-6-12 max-w-8/12 mx-auto rounded-2xl ring-1 ring-gray-300 p-1 rounded-full' />
        <div className='flex gap-1 text-(--color-primary) capitalize font-bold text-md items-center text-2xl'>
            <span>{user?.firstName}</span>
            <span>{user?.lastName}</span>
        </div>
        <div className='flex text-(--color-primary) font-bold text-md  font-sans capitalize flex-col gap-2 '>
            <span>{user?.phone}</span>
            <span>{user?.email}</span>
            <span>{user?.Gender}</span>
        </div>

     </div>
         
      
     </div>
  )
}

export default ProfileCard
