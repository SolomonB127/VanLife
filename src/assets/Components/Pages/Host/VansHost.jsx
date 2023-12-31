import React from 'react';
import './stylesheets/VansHost.css';
import { useEffect, useState } from 'react';
import { Link, redirect, useLoaderData} from 'react-router-dom';
import { getHostVans } from '../../../../api'; //Imported gethostVans() function

export async function loader(){
  // Adding a "fake" authentification
  const isLoggedIn = false;
  if(!isLoggedIn){
    const response = redirect("/login")
    response.body = true;
    return response
  }
  const hostVans = await  getHostVans()
  return hostVans
}


const VansHost = () => {
  // Initialisation of state
  const vanHost = useLoaderData()

  // Mapping over data 
  const listElements = vanHost.map(van => (
    <Link to={van.id} key={van.id}  className="host-van-link-wrapper">

      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
            <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))
  return (
    <section>
     <h1 className='host-vans-title'>Your listed vans here</h1>
     <div className='host-vans-list'>
        <section>
          {listElements}
        </section>
     </div>
    </section>
  )
}

export default VansHost