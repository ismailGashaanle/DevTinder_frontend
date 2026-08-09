import React from 'react'
import ProfileView from './ProfileView'
import ProfileCard from './ProfileCard'
import ProfileEdit from './ProfileEdit'

function Profile() {
  return (
    <div>
        <ProfileView/>
       <div className='grid grid-cols-1 md:grid-cols-2 py-4 px-6'>
         <ProfileCard/>
        <ProfileEdit/>
       </div>
    </div>
  )
}

export default Profile
