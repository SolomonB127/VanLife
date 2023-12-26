import React from 'react';
import './stylesheets/Vansinfo.css';
import { useState, useEffect } from 'react';
import { useParams , Link, Outlet, NavLink} from 'react-router-dom';
const Vaninfo = () => {
  const { id } = useParams(); //This useParams is the de-structured form of the one used in Vansdetails.

  const [vanDetails, setVanDetails] = useState(null);

  // Imported a variable styling variable
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
    backgroundColor: "#fff"
  };

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

      <Link to="../vanshost"   className='back-button'>
        &larr; <span>Back to all vans</span>
      </Link>

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

      {/* Sub-info Links */}
      <section className='host-nav'>
        <>
          <NavLink
            to="."
            style={({isActive}) => isActive ? activeStyle : null}
            end
          >
            Details
          </NavLink>

          <NavLink
            to={"pricing"}
            style={({isActive}) => isActive ? activeStyle : null}
          >
            Pricing
          </NavLink>

          <NavLink
            to={"photos"}
            style={({isActive}) => isActive ? activeStyle : null}
          >
            Photos
          </NavLink>
        </>
      </section>
      <Outlet  context={ [ vanDetails ]}/>
    </main>
  )
}

export default Vaninfo