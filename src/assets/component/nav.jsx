import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <div>
        <div className='navigation'>
           <button><Link to="/dashboard/">Home</Link></button> 
           <button><Link to="/dashboard/contact">Contact me</Link></button>
           <button><Link to="/dashboard/aboutUs">About Me</Link></button>
        </div>
    </div>
  )
}
