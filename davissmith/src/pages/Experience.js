import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
// TODO import '../styles/Experience.css'

  

function Experience() {
  const[isHovered, setIsHovered] = React.useState(false)
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    //?document.body.classList.add('hovered-link-backgorund');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.body.classList.remove('hovered-link-background');
  };

  return (
    <div>
      <div className='experiences'>
        <h1>Software Devlopment</h1>
        <div className='picture-container'>
      </div>
      </div>
    </div>
    
  );
}

export default Experience