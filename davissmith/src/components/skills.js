import React from 'react'

function skills(name, skills) {
  return (
    <div className='skills'>
        <h2>{name}</h2>
        <p>
          {skills}
        </p>
    </div>
  )
}

export default skills