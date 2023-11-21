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
      <p>I am a software developer, among others things</p>
      </div>
      <div className='skills'>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span>
              ReactJS, AngularJS, HTML, CSS, JavaScript, MaterialUI
            </span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
          <span>NodeJS, ExpressJS, FastAPI, MySQL, PostgresSQL</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
          <span>Java, Python, C, JavaScript, TypeScript,</span>
          </li>
        </ol>
      </div>
    </div> 
  )
}

export default Home