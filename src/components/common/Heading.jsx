import React from 'react'

const Heading = ({headingText,headingClass}) => {
  return (
   <h1 className={headingClass}>{headingText}</h1>
  )
}

export default Heading
