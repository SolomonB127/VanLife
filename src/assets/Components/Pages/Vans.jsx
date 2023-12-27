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
  const [searchParams, setSearchParams] = useSearchParams();
  const typefilter = searchParams.get("type");

  const displayedVans = typefilter ? vansData.filter(van => van.type === typefilter) : vansData

  // Mapping over data 
  const vanElements = displayedVans.map(van => (
    <div key={van.id} className='van-title'>
     <Link style={{textDecoration: "none"}} to={`/van/${van.id}`} aria-label={`Value details for ${van.name}, priced at $${van.price} per day`}>
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
        <h1 style={ {textAlign:"center"} }>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typefilter === "simple" ? "selected" : ""}`}>Simple</button>
          <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typefilter === "rugged" ? "selected" : ""}`}>Rugged</button>
          <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typefilter === "luxury" ? "selected" : ""}`}>Luxury</button>

          {typefilter ? (
            <button 
            onClick={() => setSearchParams({})} 
            className='van-typeclear-filters '
            >
              Clear
              </button>
          ): null  }
        </div>
        <div className='van-list'>
        {vanElements}
        </div>
      </section>
    </main>
  )
}

export default Vans