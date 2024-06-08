import React from 'react'
import { IMG } from './Ulits'
const Nav = () => {
  return (
    <nav>
      <div className='Logo'>
        <img src={IMG} alt='logo'/>
      </div>
      <ul>
        <li>Home</li>
        <li>Your Task</li>
      </ul>
    </nav>
  )
}

export default Nav
