import React from 'react'

const Timeline = ({logo,title,description}) => {
  return (
    <div>
      <div>{logo}</div>
      <div></div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Timeline
