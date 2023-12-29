import React from 'react';
import './stylesheets/Vans.css';
import { useState, useEffect } from 'react';
import { Link, useSearchParams  } from 'react-router-dom';
import { getVans } from '../../../api';
const Vans = () => {
  // Declaration of Hooks
  // Initialisation of state
  const [vansData, setVansData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //useEffect for api(mirage.js)  fetching
  useEffect(() => {
   async function loadVans(){
    setLoading(true)
    try {
      const data = await getVans()
      setVansData(data)
    } catch (error) {
      setError(error)
    } finally{
      setLoading(false)
    }
   }
   loadVans();
  }, []);

  // Usage of useSearchParams for filtering
  const [searchParams, setSearchParams] = useSearchParams();
  const typefilter = searchParams.get("type");

  const displayedVans = typefilter ? vansData.filter(van => van.type === typefilter) : vansData
  // Declaration of handleFilterChange
  function  handleFilterChange(key, value){
    setSearchParams(prevParams => {
      if(value === null){
        prevParams.delete(key)
      }else{
        prevParams.set(key, value)
      }
      return prevParams
    })
  };

  // Mapping over data 
  const vanElements = displayedVans.map(van => (
    <div key={van.id} className='van-title'>
     <Link style={{textDecoration: "none"}} 
     to={van.id} 
     aria-label={`Value details for ${van.name}, priced at $${van.price} per day`}
     state={{ state: `?${searchParams}`,
     type: typefilter}}>
       <img src={van.imageUrl}  alt={`Image of ${van.name}`} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>${van.price} <span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
     </Link>
    </div>
  ));

    if (loading){
      return <h1 aria-live='polite'>Loading...</h1>
    }

    if (error){
      return <h1  aria-live='assertive'>There was an error: {error.message}</h1>
    }

  return (
    <main>
      <section className='vans--main'>
        <h1 style={ {textAlign:"center"} }>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typefilter === "simple" ? "selected" : ""}`}>Simple</button>
          <button onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typefilter === "rugged" ? "selected" : ""}`}>Rugged</button>
          <button onClick={() => handleFilterChange("type", "luxury")} className={`van-type luxury ${typefilter === "luxury" ? "selected" : ""}`}>Luxury</button>

          {typefilter ? (
            <button 
            onClick={() => handleFilterChange("type", null)}            className='van-typeclear-filters '
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