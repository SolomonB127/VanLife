import React from 'react';
import './stylesheets/Vans.css';
import { useState} from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await  } from 'react-router-dom';
import { getVans } from '../../../api';

export function loader(){
  //Used the defer utility inorder to properly fetch data
  return defer({vans:getVans()})
}

const Vans = () => {
  // Declaration of Hooks
  // Initialisation of state
  const [error, setError] = useState(null);
  // Used useLoaderData for data fetching instead of useState & Effect
  const vansData = useLoaderData();

  // Usage of useSearchParams for filtering
  const [searchParams, setSearchParams] = useSearchParams();
  const typefilter = searchParams.get("type");

  
  
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

    if (error){
      return <h1  aria-live='assertive'>There was an error: {error.message}</h1>
    }

    // Created a renderVanElement function inorder to render vans when using theAwait component
    function renderVanElement(vansData){
      const displayedVans = typefilter ? vansData.filter(van => van.type === typefilter) : vansData

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
        return(
          <>
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
          </>
        )
    }
  return (
    <main>
      <section className='vans--main'>
        <h1 style={ {textAlign:"center"} }>Explore our van options</h1>
        {/* Imported the Await component inorder to display data when using the defer utility */}
        <Await resolve={vansData.vans}>
           {/* Called the renderVanElements function */}
          {renderVanElement}
        </Await>
      </section>
    </main>
  )
}

export default Vans