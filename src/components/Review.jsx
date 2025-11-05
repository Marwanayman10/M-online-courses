import React from 'react'
import "./Reviews.css"

function Reveiw({  stars , description , name , job , img }) {
  return (
    <div className='rating'>
      <span className='stars'>{stars}</span>
      <p className='description'>{description}</p>
      <div className='person'>
        <img src={img} alt={name} />
        <div>
          <h3 className='text-primary'>{name}</h3>
          <p>{job}</p>
        </div>

      </div>
      
    </div>
  )
}

export default Reveiw
