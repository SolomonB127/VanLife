import React from 'react';
import './stylesheets/VanDetails.css';
import { useParams } from 'react-router-dom';  // Imported useParams
import { useState, useEffect } from 'react';      // Imported useState & Effect
const VansDetails = () => {
    const params = useParams();

    const [van, setVans] = useState(null);

   useEffect(() => {
    fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
            .then(data => setVans(data.vans))
   }, [params.id])
   
  return (
    <main>
        <section className='van-detail-main'>
            {
                van ?  (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={`photo of ${van.name}`}/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p className='van-description'>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
        ) : <h2>Loading...</h2>
            }
        </section>
    </main>
  )
}

export default VansDetails