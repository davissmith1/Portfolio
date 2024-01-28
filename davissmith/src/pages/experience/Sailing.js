import React from 'react'
//todo import '../../styles/sailing.css'
import TiledPicture from '../../helpers/TiledPics'
import { sailingPics } from '../../helpers/sailingPics'


function Sailing() {  
  
  return (
    <div className='sailing'>
      <h1>Sailing</h1>
      <p></p>
      <div className='picture-container'>
        <TiledPicture images={sailingPics} />
      </div>
    </div>
  )
}

export default Sailing