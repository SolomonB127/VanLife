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
      <header>
        <Link className="site-logo" to="/">VanLife</Link>
        <nav>
        <NavLink to="/host" style={({isActive}) => isActive ? activeStyles : null}> Host</NavLink>
        <NavLink to="/about" style={({isActive}) => isActive ? activeStyles : null}> About</NavLink>
        <NavLink to="/van" style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink>
        </nav>
    </header>
  )
}

export default Header