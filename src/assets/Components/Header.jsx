import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "burlywood"
    }
  return (
   <nav>
      <header>
        <Link className="site-logo" to="/">VanLife</Link>
        <nav>
        <NavLink to="/host" style={({isActive}) => isActive ? activeStyles : null}> Host</NavLink>
        <NavLink to="/about" style={({isActive}) => isActive ? activeStyles : null}> About</NavLink>
        <NavLink to="/van" style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink>
        </nav>
    </header>
    
    {/* <Link to="/" className='title'>VanLife</Link>

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
    </ul> */}
   </nav>
  )
}

export default Header