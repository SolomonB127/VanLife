import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './stylesheets/Vansinfo.css';

export async function loader(){
  return null
}
const HostVanDetail = () => {
  const [vanDetails] = useOutletContext();
  return (
    <section className='host-van-detail-info'>
      <h4>Name: <span>{ vanDetails.name }</span></h4>
      <h4>Type <span>{ vanDetails.type }</span></h4>
      <h4>Description: <span>{ vanDetails.description }</span></h4>
      <h4>Visibility <span>public</span></h4>
    </section>
  )
}

export default HostVanDetail