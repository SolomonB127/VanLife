import React from 'react';
import './stylesheets/Vansinfo.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Vaninfo = () => {
  const { id } = useParams(); //This useParams is the de-structured form of the one used in Vansdetails.

  const [vanDetails, setVanDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
        .then(data => setVanDetails(data.vans))
  }, []);

  if (!vanDetails){
    return <h2>Loading...</h2>
  }
  return (
    <main>
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
    </main>
  )
}

export default Vaninfo