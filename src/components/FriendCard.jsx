import React, { useState } from 'react'
import Profile from './Profile'
// import Friends from './Friends'

const FriendCard = ({friends}) => {

     
  return (
    <div>
      {/* <div>
        card friends
      </div> */}  
     
      <h1 className='text-center text-3xl py-2'>Friends</h1>

     
     
        {
  friends?.length === 0 && (
    <div>
      <h1 className='text-4xl h-screen flex items-center justify-center capitalize text-center font-bold bg-gray-300 ring-1 ring-gray-300 shadow-2xl p-6 rounded-lg'>
        not found friends
      </h1>
    </div>
            )
            }
        
           
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        {
            friends.map(friend=>(
                <div key={friend._id} className='flex gap-2 flex-col py-1 px-4 w-full gap-2 ring-1 ring-gray-300 shadow-2xl bg-white'>
                     <div>
                        <div>
                        <img className='rounded-full w-26 ' src={friend?.photo} />
                    </div>
                    <div>
                        <p>{friend?.firstName}</p>
                    </div>
                     </div>
                     <div className='w-full p-3 flex gap-2 justify-start'>
                        <button className='bg-(--color-primary) py-2 w-full cursor-pointer text-white px-1 rounded-lg '>view profile</button>
                        <span className='text-3xl font-bold -my-2 rounded-full'>...</span>
                     </div> 

                </div>
            ))
        }
      </div>


    </div>
  )
}

export default FriendCard
