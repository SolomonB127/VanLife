import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
   <nav>
    <Link to="/" className='title'>VanLife</Link>
    <ul>
        <li>
            <Link to="/about"> About</Link>
        </li>
        <li>
            <Link to="/van"> Vans</Link>
        </li>
        <li>
            <Link to="/contact"> Contact</Link>
        </li>
    </ul>
   </nav>
  )
}

export default Header