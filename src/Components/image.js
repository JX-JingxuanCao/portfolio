import React from 'react'

export default function Image(props) {
  return (
    <div>
      <img 
       src={props.imgSrc}
       width={props.imgWidth}
       alt={props.imgAlt} />
    </div>
  )
}
