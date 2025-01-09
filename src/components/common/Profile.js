import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {

  const {user} = useSelector((state)=>state.user)

  return (
    <div className='group'>
      <img src= {`${user.profileImage}`} alt=''/>
      <div className='bg-white hidden relative group-hover:block text-black'>
        <Link to={"/dashboard"}><p>Dashboard</p></Link>
        <Link to={"/logout"}><p>Log Out</p></Link>
      </div>
    </div>
  )
}

export default Profile
