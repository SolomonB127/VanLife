import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './stylesheets/Vansinfo.css';
const HostVanPhotos = () => {
  const [vanDetails] = useOutletContext();
  return (
    <section >
      <img src={vanDetails.imageUrl} alt=""  className="host-van-detail-image"/>
    </section>
  )
}

export default HostVanPhotos