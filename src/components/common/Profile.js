import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../services/operations/authApis'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=>state.user)


  const clickHandler = (e) => {
    e.preventDefault()
    dispatch(logOut(navigate))
  }

  return (
    <div className='group'>
      <img className='h-5 w-5 rounded-full' src= {user?.profileImage} alt={`profile-${user?.firstName}` }/>
      <div className='bg-white hidden relative group-hover:block text-black'>
        <Link to={"/dashboard"}><p>Dashboard</p></Link>
        <button onClick={clickHandler}>Log Out</button>
      </div>
    </div>
  )
}

export default Profile
