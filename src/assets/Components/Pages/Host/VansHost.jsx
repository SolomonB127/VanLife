import React from 'react';
import './stylesheets/VansHost.css';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
const VansHost = () => {
  // Initialisation of state
  const [vanHost, setVanHost] = useState([]);

  //useEffect for api(mirage.js)  fetching
  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
        .then(data => setVanHost(data.vans))
  }, []);

  // Mapping over data 
  const listElements = vanHost.map(van => (
    <Link to={`/host/vanshost/${van.id}`} key={van.id}  className="host-van-link-wrapper">

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
      {
        vanHost.length > 0 ? (
          <section>
            {listElements}
          </section>
        ) : (
          <h2>Loading...</h2>
        )
      }
     </div>
    </section>
  )
}

export default VansHost