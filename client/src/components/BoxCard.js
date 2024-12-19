import React from 'react'

function BoxCard({ img, alt, title }){
  return (
    <div className='boxCard'>
        <img src={img} alt={alt}></img>
        <h1>{title}</h1>
    </div>
  )
}

export default BoxCard