import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <p className='site-logo'>#Vanlife</p>
      <nav>
        <Link to="host">Host</Link>
        <Link to="about">About</Link>
        <Link to="about">Vans</Link>
      </nav>
    </header>
  )
}

export default Header