import React from 'react';
import './stylesheets/VansHost.css';
import { useEffect, useState } from 'react';
import { Await, Link, defer, redirect, useLoaderData} from 'react-router-dom';
import { getHostVans } from '../../../../api'; //Imported gethostVans() function
import { requiredAuth } from '../../../../util';
import { Suspense } from 'react';
export async function loader({ request }){
  // Adding a "fake" authentification
  //Passed the request object
  await requiredAuth(request)
  const hostVans = defer({ hostVan: getHostVans()})
  return hostVans
}


const VansHost = () => {
  // Initialisation of state
  const vanHost = useLoaderData()

  function renderHostVans(vanHost){
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
    ));
    return(
     <div className='host-vans-list'>
        <section>
          {listElements}
        </section>
     </div>
    )
  }
  return (
    <section>
     <h1 className='host-vans-title'>Your listed vans here</h1>
     <Suspense fallback={
       <div class="loader-container"> 
       <span></span> 
       <span></span> 
       <span></span>
       <span></span>
     </div>
     }>
      <Await resolve={vanHost.hostVan}>
        {renderHostVans}
      </Await>
     </Suspense>
    </section>
  )
}

export default VansHost