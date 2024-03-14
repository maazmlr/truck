import React from 'react'
import logo from "../assets/logo.jpg"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };
  return (
    <>
<footer className="footer p-10  bg-black text-base-content">
  <aside>
    <img src={logo} alt="" className='h-40' />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav >
    <h6 className="footer-title text-2xl mr-8">Quick Links</h6> 
    <NavLink className="link link-hover " to={"/"} onClick={handleClick}> {">"}Home</NavLink>
    <NavLink className="link link-hover" to={'/about'} onClick={handleClick} >   {">"}About us</NavLink>
    <NavLink className="link link-hover" to={'service'} onClick={handleClick}> {">"}Services</NavLink>
    <NavLink className="link link-hover" to={'contact'} onClick={handleClick}> {">"}Contact us</NavLink>
  </nav> 
  <nav >
    <h6 className="footer-title text-2xl">Services</h6> 
    <NavLink className="link link-hover"  to={"/service"} onClick={handleClick}>Dry Van</NavLink>
    <NavLink className="link link-hover" to={"/service"} onClick={handleClick}>Reefer</NavLink>
    <NavLink className="link link-hover"  to={"/service"} onClick={handleClick}>Flat Bed</NavLink>
    <NavLink className="link link-hover"  to={"/service"} onClick={handleClick}>Hot Shot</NavLink>
    <NavLink className="link link-hover"  to={"/service"} onClick={handleClick}>Power Only</NavLink>
    <NavLink className="link link-hover"  to={"/service"} onClick={handleClick}>Straight/Box truck</NavLink>
  </nav> 
  
  <nav>
    <h6 className="footer-title text-2xl">Contact us</h6> 
    <a className="link link-hover">+1 202 988 2180</a>
    <a className="link link-hover">hopetruckingsolutions@gmail.com</a>
  </nav>
</footer>  
  <div className='bg-slate-200 h-12 p-2 text-center'> CopyRight C 2024 </div>
</>
  )
}

export default Footer