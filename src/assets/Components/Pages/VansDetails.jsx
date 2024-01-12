import React from 'react';
import './stylesheets/VanDetails.css';
import { useParams, Link, useLocation, useLoaderData, defer,Await } from 'react-router-dom';  // Imported useParams & LoaderData
import {Suspense } from 'react';      // Imported useState & Effect
import { getVans } from '../../../api'; //Imported getVans() function
export function loader({ params }){
    return ({vanDetails: getVans(params.id)})
  }
const VansDetails = () => {
    const location = useLocation();
    const van = useLoaderData()

    
    function renderVanDetails(van){
     const search = location.state?.search || ""
     const type = location.state?.type || "all"
     return(
      <section className='van-detail-main'>
      <Link 
          to={`..${search}`}
          relative='path'  
          className='back-button'>
              &larr; <span>Back to {type} vans</span>
      </Link>
              <div className="van-detail">
                  <img src={van.imageUrl} alt={`photo of ${van.name}`}/>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                  <h2>{van.name}</h2>
                  <p className="van-price"><span>${van.price}</span>/day</p>
                  <p className='van-description'>{van.description}</p>
                  <button className="link-button">Rent this van</button>
              </div>
      </section>
     )

   }
  return (
    <main>
      <section>
        <Suspense fallback={
           <div class="loader-container"> 
           <span></span> 
           <span></span> 
           <span></span>
           <span></span>
         </div>
        }>
          <Await resolve={van.vanDetails}>
            {renderVanDetails}
          </Await>
        </Suspense>
      </section>
    </main>
  )
}

export default VansDetails