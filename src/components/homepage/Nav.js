import React from 'react'
import Logo from "../../assets/Logo/Logo-Small-Light.png"
import { IoIosArrowDown } from "react-icons/io";
import Button from '../common/Button';


const Nav = () => {
  return (
    <div  className='flex items-center justify-between m-5'>
      
      <div className='flex items-center w-[10%] justify-evenly'>
        <img src={Logo} alt='logo' />
        <p>Sankalp</p>
      </div>

      <div className='flex w-[30%] justify-evenly'>
        <p>Home</p>
        <div className='flex items-center'>
          <p>Catalog</p>
          <IoIosArrowDown />
        </div>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>

      <div className='flex w-[15%] justify-evenly'>
        <Button active={false} linkTo="/login" text="Log In"/>
        <Button active={false} linkTo="/signup" text="Sign Up" />
      </div>


    </div>
  )
}

export default Nav
