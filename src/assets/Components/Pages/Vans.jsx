import React from 'react';
import './stylesheets/Vans.css';
import { useState, useEffect } from 'react';
const Vans = () => {
  // Declaration of Hooks
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch("api/vans")
    .then(response => response.json())
      .then(data => setVansData(data.vans));
  }, [])

  // Mapping over data 
  const vanElements = vansData.map(van => (
    <div key={van.id} className='van-title'>
      <img src={van.imageUrl} alt="" />
      <div className='van-info'>
        <h3>{van.name}</h3>
        <p>${van.price} <span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ))
  return (
    <main>
      <section className='vans--main'>
        <div className='van-list'>
        {vanElements}
        </div>
      </section>
    </main>
  )
}

export default Vans