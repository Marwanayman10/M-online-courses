import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./Header.css"

function Header() {
  return (
    <header id='header'>
        <nav className='navbar'>
            <a href="#" className='logo'> <span>M</span> Online Courses</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#joinUs">Contact</a></li>
            </ul>
            <div className="account">
                <a href="#">Login </a>
                <a href="#" className='btn-join'>Join Us <FaArrowRight /></a>
            </div>
        </nav>
    
    </header>
  )
}

export default Header