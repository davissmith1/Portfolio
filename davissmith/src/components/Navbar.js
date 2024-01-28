import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from "react-router-dom";
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    
    const location = useLocation();
    
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className='navbar' id={expandNavbar ? "open" :"close"}>
            <div className="toggleButton">
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}
                >
                    <ReorderIcon />
                </button>
            </div>
                <div className='links'>
                <NavLink exact to="/" activeClassName="active-link"> Home </NavLink>
                {/* <NavLink to="/experience" activeClassName="active-link"> Experience </NavLink> */}
                <NavLink to="/projects" activeClassName="active-link"> Projects </NavLink>
                <NavLink to="/about" activeClassName="active-link"> About </NavLink>
            </div>
        </div>
    )
}

export default Navbar