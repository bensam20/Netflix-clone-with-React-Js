import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <button className='button'>Play</button>
            <button className="button">My list</button>
            <h1 className="description">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>   
        </div>  
        <div className="fade_bottom"></div> 
    </div>
  )
}

export default Banner
