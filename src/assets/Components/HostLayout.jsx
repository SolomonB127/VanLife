import React from 'react';
import './Hostlayout.css';
import { NavLink, Outlet } from 'react-router-dom'

export function loader(){
  return null
}
const HostLayout = () => {
  const activeStyles =  {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
    backgroundColor: "#fff"
  }

  return (
    <>
        <main className='host-nav'>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null}
            end
            to="/host"
            >
              Dashboard
            </NavLink>

            <NavLink 
             style={({isActive}) => isActive ? activeStyles : null}
            to="/host/income"
            >
              Income
            </NavLink>

            <NavLink 
             style={({isActive}) => isActive ? activeStyles : null}
            to="/host/vanshost"
            >
              Vans
            </NavLink>

            <NavLink 
             style={({isActive}) => isActive ? activeStyles : null}
            to="/host/reviews"
            >
              Reviews
            </NavLink>
        </main>
        <Outlet />
    </>
  )
}

export default HostLayout