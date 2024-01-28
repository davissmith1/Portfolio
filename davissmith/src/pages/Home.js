import Email from '@mui/icons-material/Email'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import React from 'react'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Davis</h2>
        <h3>I am a software developer, among others things</h3>
      </div>
      <div className='skills'>
        <div className='frontend'>
          <h2>Frontend</h2>
          <p>
            ReactJS
            AngularJS
            HTML
            CSS
            JavaScript
          </p>
        </div>
        <div className='backend'>
          <h2>Backend</h2>
          <p>
            NodeJS
            ExpressJS
            MySQL
            PostgreSQL
          </p>
        </div>
        <div className='languages'>
          <h2>Languages</h2>
          <p>
            JavaScript
            TypeScript
            Python
            Java
            C
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home