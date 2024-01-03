import React from 'react';
import './stylesheets/Vansinfo.css';
import { useState, useEffect } from 'react';
import { Link, useParams , Outlet,NavLink, useLoaderData} from 'react-router-dom';
 import { getHostVans } from '../../../../api'; //Imported gethostVans() function

export  function loader({ params }){
  return getHostVans(params.id)
}

const Vansinfo = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
    backgroundColor: "#fff"
  };

  const vanDetails = useLoaderData()

  return (
    <main>
      <Link to="../vanshost" className='back-button'>
        &larr; <span>Back to all vans</span>
      </Link>
      <section className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={vanDetails.imageUrl} />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${vanDetails.type}`}
            >
              {vanDetails.type}
            </i>
            <h3>{vanDetails.name}</h3>
            <h4>${vanDetails.price}/day</h4>
          </div>
        </div>
      </section>

      {/* Sub-info Links */}
      <div className='host-nav'>
        <NavLink 
            style={({isActive}) => isActive ? activeStyle : null} 
            to= "."
            end
            >
              Details
        </NavLink>

        <NavLink 
            style={({isActive}) => isActive ? activeStyle : null} 
            to= {"pricing"}
            >
              Pricing
        </NavLink>

        <NavLink 
            style={({isActive}) => isActive ? activeStyle : null} 
            to=  {"photos"}
            >
              Photos
        </NavLink>
      </div>
      <Outlet context={ [ vanDetails] } />
    </main>
  )
}

export default Vansinfo