import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <div>
        <div className='navigation'>
           <button><Link to="/home">Home</Link></button> 
           <button><Link to="/contact">Contact me</Link></button>
           <button><Link to="/aboutUs">About Me</Link></button>
        </div>
    </div>
  )
}
