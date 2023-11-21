import React from 'react'
import LinkedIn from "@mui/icons-material/LinkedIn"
import GitHub from "@mui/icons-material/GitHub"
import Email from "@mui/icons-material/Email"
import Instagram from "@mui/icons-material/Instagram"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedIn />
        <GitHub />
        <Email />
      </div>
      <p>© 2023 - All Rights Reserved</p>
    </div>
  );
}

export default Footer