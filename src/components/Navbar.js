import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='togglebutton'>
            <button></button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/about"> About </Link>
        </div>
    </div>
  )
}

export default Navbar