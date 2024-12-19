import React from 'react'

function Advantages({ icon, alt, title, p }){
  return (
    <div className='advantage'>
        <img src={icon} alt={alt}></img>
        <h1>{title}</h1>
        <p>{p}</p>
    </div>
  )
}

export default Advantages