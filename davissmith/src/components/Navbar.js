import { Button } from '@mui/material'
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <h1>Davis Smith</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar