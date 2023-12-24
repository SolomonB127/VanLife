import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };
  return (
   <nav>
    <Link to="/" className='title'>VanLife</Link>

    <div className='menu' >
        <span onClick={toggleMenu}>&#9776;</span>
    </div>

    <ul className={menuOpen ? "open" : " "}>
        <li>
            <NavLink to="/host"> Host</NavLink>
        </li>
        <li>
            <NavLink to="/about"> About</NavLink>
        </li>
        <li>
            <NavLink to="/van"> Vans</NavLink>
        </li>
    </ul>
   </nav>
  )
}

export default Header