import React from 'react';
import './stylesheets/Vans.css';
import { useState, useEffect } from 'react';
import { Link, useSearchParams  } from 'react-router-dom';
const Vans = () => {
  // Declaration of Hooks
  // Initialisation of state
  const [vansData, setVansData] = useState([]);

  //useEffect for api(mirage.js)  fetching
  useEffect(() => {
    fetch("api/vans")
    .then(response => response.json())
      .then(data => setVansData(data.vans));
  }, []);

  // Usage of useSearchParams for filtering
  const [searchParams, setSearhParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter ? vansData.filter(van => van.type === typeFilter) : vansData

  // Mapping over data 
  const vanElements = displayedVans.map(van => (
    <div key={van.id} className='van-title'>
     <Link to={`/van/${van.id}`} aria-label={`Value details for ${van.name}, priced at $${van.price} per day`}>
       <img src={van.imageUrl}  alt={`Image of ${van.name}`} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>${van.price} <span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
     </Link>
    </div>
  ))
  return (
    <main>
      <section className='vans--main'>
        <h1>Explore our van options</h1>
        <div className='van-list'>
        {vanElements}
        </div>
      </section>
    </main>
  )
}

export default Vans