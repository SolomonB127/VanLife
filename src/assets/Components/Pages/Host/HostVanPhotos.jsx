import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './stylesheets/Vansinfo.css';

export async function loader(){
  return null
}
const HostVanPhotos = () => {
  const [vanDetails] = useOutletContext();
  return (
    <section >
      <img src={vanDetails.imageUrl} alt={`photo of ${vanDetails.name}`} className="host-van-detail-image"/>
    </section>
  )
}

export default HostVanPhotos