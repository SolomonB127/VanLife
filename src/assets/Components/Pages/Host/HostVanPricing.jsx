import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './stylesheets/Vansinfo.css';

export async function loader(){
  return null
}
const HostVanPricing = () => {
  const [vanDetails] = useOutletContext();
  return (
   <section className='host-van-detail-info'>
    <h4>Price: <span>${vanDetails.price}.00/day</span></h4>
   </section>
  )
}

export default HostVanPricing