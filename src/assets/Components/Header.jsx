import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from './Images/icons8-avatar-97.png';
import styled from 'styled-components';
import './Header.css';

const StyledNav = styled.nav`
  @media all and (max-width: 768px) {
    display: ${props => props.open ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #0f172a;
    width: 100%;
    height: 50vh;
    flex-direction: column;
    justify-content: center; /* Aligns items vertically in the middle */
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const logOut = () => {
    localStorage.removeItem("loggedin");
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "burlywood"
  }

  return (
    <div className="header-container">
      <header>
        <div className="site-logo">
          <Link to="/">VanLife</Link>
        </div>
        <div className='openNav' onClick={toggleMenu}>
          {menuOpen ? 'X' : '☰'} {/* Renders 'X' when menu is open, otherwise renders hamburger icon */}
        </div>
        <StyledNav open={menuOpen}>
          <NavLink to="/host" style={({isActive}) => isActive ? activeStyles : null}>Host</NavLink>
          <NavLink to="/about" style={({isActive}) => isActive ? activeStyles : null}>About</NavLink>
          <NavLink to="/van" style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink>
          <NavLink to="/login" className="login-link">
            <img src={Avatar} alt="" width={25} className="login-icon"/>
          </NavLink>
          <button onClick={logOut}>Logout</button>
        </StyledNav>
      </header>
    </div>
  );
}

export default Header;
