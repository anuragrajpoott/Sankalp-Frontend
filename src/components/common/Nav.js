import React from 'react'
import Logo from "../../assets/Logo/Logo-Small-Light.png"
import { IoIosArrowDown } from "react-icons/io";
import Button from './Button';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
     <div>
        <div  className='flex items-center justify-between m-5'>
      
      <div className='flex items-center w-[10%] justify-evenly'>
        <Link to={"/"}><img src={Logo} alt='logo'/></Link>
        <p>Sankalp</p>
      </div>

      <div className='flex w-[30%] justify-evenly'>
        <p>Home</p>
        <div className='flex items-center'>
          <p>Catalog</p>
          <IoIosArrowDown />
        </div>
        <Link to={"/about"}><p>About Us</p></Link>
        <p>Contact Us</p>
      </div>

      <div className='flex w-[15%] justify-evenly'>
        <Button active={false} linkTo="/login" text="Log In"/>
        <Button active={false} linkTo="/signup" text="Sign Up" />
      </div>


    </div>

<div className='h-0.5 bg-white'></div>
     </div>
  )
}

export default Nav
