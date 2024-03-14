import React from 'react'
import logo from "../assets/logo.jpg"
import { NavLink } from 'react-router-dom'
import { Phone } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'

const Header = () => {
  return (
<>
<div className=' bg-[#e9b23f] text-center p-2'>
    <span className='text-black text-xl'> <Phone style={{color:"black",height:"2rem"}}/>
     <a> +1 202 988 2180</a> | </span>
    <span> <Email  style={{color:"black",height:"2rem"}}/> <a className="text-black text-xl" href="mailto:hopetruckingsolutions@gmail.com">hopetruckingsolutions@gmail.com </a> </span>
</div>

<div className="navbar bg-black   ">
  <div className="navbar-start w-[100%] lg:w-[50%] justify-between flex-row-reverse  ">
    <div className="dropdown mr-40 lg:0 lg:ml-auto ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mr-64 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
        <li><NavLink to={"/"} className='link-home text-2xl p-2 '>Home</NavLink></li>
      <li><NavLink to={"/about"} className='link-home text-2xl p-2' > About us</NavLink></li>
      <li><NavLink to={"/service"} className='link-home text-2xl p-2'>Services</NavLink></li>
      <li><NavLink to={"/contact"} className='link-home text-2xl p-2'>Contact us</NavLink></li>
      <li>
      <a className="btn bg-[#e9b23f] text-black" href='https://www.facebook.com/profile.php?id=61556383692617' target='blank'>{<Facebook/>}</a>
      </li>
      </ul>
    </div>
    <img src={logo} alt="" className='h-28  ' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/"} className='link-home '>Home</NavLink></li>
      <li><NavLink to={"/about"} className='link-home'> About us</NavLink></li>
      <li><NavLink to={"/service"} className='link-home'>Services</NavLink></li>
      <li><NavLink to={"/contact"} className='link-home'>Contact us</NavLink></li>
      
     
    </ul>
    
  </div>
  <div className="navbar-end hidden lg:flex ">
    <a className="btn bg-[#e9b23f] text-black" href='https://www.facebook.com/profile.php?id=61556383692617' target='blank'>{<Facebook/>}</a>
  </div>
  
</div> 
</>

 )
}

export default Header