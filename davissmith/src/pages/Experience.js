import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Experience() {
  return (
    <div>Experience
      <div className='links'>
                <Link to="/experience/software">Software Devlopment</Link>
                <Link to="/experience/photography">Photography</Link>
                <Link to="/experience/sailing">Sailing</Link>
            </div>
    </div>
    
  )
}

export default Experience