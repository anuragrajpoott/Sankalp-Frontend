
import Logo from "../../assets/Logo/Logo-Small-Light.png"
import { IoIosArrowDown } from "react-icons/io";
import Button from './Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import Profile from './Profile';



const Nav = () => {

  const {token} = useSelector((state)=>state.auth)
  const {user} = useSelector((state)=>state.user)
  const {totalItems} = useSelector((state)=>state.cart)


  console.log(user)


  return (
     <div>
        <div  className='flex items-center justify-between m-5'>
      
      <div className='flex items-center w-[10%] justify-evenly'>
        <Link to={"/"}><img src={Logo} alt='logo'/></Link>
        <Link to={"/"}><p>Sankalp</p></Link>
        
      </div>

      <div className='flex w-[30%] justify-evenly'>
       <Link to={"/"}> <div className={`${useLocation().pathname==='/'?"text-yellow-50":"text-white"}`}><p>Home</p></div></Link>
       
        <div className='group'>
          <div className='flex items-center'>
          <p>Catalog</p>
          <IoIosArrowDown />
          </div>
          <div className='hidden group-hover:block'>
          <div className='absolute h-10 w-10 bg-white rotate-45 translate-x-12' ></div>
          <div className='absolute h-40 w-40 bg-white translate-y-5'>python</div>
          </div>
        </div>

        <Link to={"/about"}><div className={`${useLocation().pathname==='/about'?"text-yellow-50":"text-white"}`}><p>About Us</p></div></Link>
       <Link to={"/contact"}><div className={`${useLocation().pathname==='/contact'?"text-yellow-50":"text-white"}`}><p>Contact Us</p></div></Link>
      </div>

      <div className='flex w-[15%] justify-evenly'>
       { token ? (<div className='flex  justify-evenly'>
            { user.accountType !== "Instructor" ? (<div className="flex">
                <Link to={"/cart"} className='relative'>
                <FaCartShopping />
                <p>{totalItems}</p>
                </Link>
                <Profile/>

            </div>) : (<div>
                <Profile/>
            </div>)}
       </div>) : (<div className='flex  justify-evenly'>
        <Button active={false} linkTo="/login" text="Log In"/>
        <Button active={false} linkTo="/signup" text="Sign Up" /> 
       </div>) }
      </div>


    </div>

<div className='h-0.5 bg-white'></div>  
     </div>
  )
}

export default Nav



