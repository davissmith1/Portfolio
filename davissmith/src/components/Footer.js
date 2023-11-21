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
        <a href={'https://www.linkedin.com/in/davis-h-smith/'} target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
        <a href={'https://github.com/davissmith1'} target="_blank" rel="noopener noreferrer">
          <GitHub />
        </a>
        <a href={`mailto:${'davissmi@unc.edu'}`}>
          <Email />
        </a>
      </div>
      <p>© 2023 - All Rights Reserved</p>
    </div>
  );
}

export default Footer