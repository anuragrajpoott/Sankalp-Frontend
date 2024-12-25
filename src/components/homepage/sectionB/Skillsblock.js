import React from 'react'

const Skillsblock = ({title,description,level,lessons}) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>{level}</p>
        <p>{lessons}</p>
      </div>
    </div>
  )
}

export default Skillsblock
