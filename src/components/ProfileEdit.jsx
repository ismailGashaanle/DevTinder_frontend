import React, { useEffect, useState } from 'react'
import { useGetProfile, useProfileEdit } from '../services/Api'
import { useSelector } from 'react-redux'

const ProfileEdit = () => {
    const user=useSelector(store=>store?.user)
    const [firstName,setfirstName]=useState(user?.firstName)
    const [lastName,setlastName]=useState(user?.lastName)
    const [phone,setphone]=useState(user?.phone)
   // const [email,setemail]=useState("")
    const [Gender,setGender]=useState(user?.Gender)
    const [photo,setphoto]=useState(user?.photo)


    const  HandleProfileEdit= useProfileEdit(
            firstName,
             lastName,
             phone,
             Gender,
             photo
    )

    const GetProfile=useGetProfile();

    
 
  return (
    <div>

       <div >
        <form onSubmit={(e)=>e.preventDefault()} className='grid grid-cols-1 md:grid-cols-2 w-full mt-3 bg-white ring-1 ring-gray-300 shadow-2xl'>
               <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="text" 
            placeholder='firstName'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            value={firstName}
            onChange={(e)=>setfirstName(e.target.value)}
            />
          </div>
          <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="text" 
            placeholder='lastName'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            value={lastName}
            onChange={(e)=>setlastName(e.target.value)}
            />
          </div>
          <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="text" 
            placeholder='phone'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            />
          </div>
          <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="text" 
            placeholder='Gender'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            value={Gender}
            onChange={(e)=>setGender(e.target.value)}
            />
          </div>
          <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="text" 
            placeholder='photo'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            value={photo}
            onChange={(e)=>setphoto(e.target.value)}
            />
          </div>
        

       <div></div>
       <div>
        <button onClick={HandleProfileEdit} className='bg-(--color-success) p-3 rounded-md text-white font-bold'>save profile</button>
       </div>

        </form>
       </div>

      
    </div>
  )
}

export default ProfileEdit
