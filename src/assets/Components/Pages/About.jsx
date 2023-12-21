import React from 'react'
import './stylesheets/About.css'
const About = () => {
  return (
    <main>
      <section className='about--coverimg'> </section>

      <section className='about--maintext'>
        <div>
          <h1>Don't squeeze in a sedan when you can relax in a van.</h1>

          <h4>Our mission is to enliven your road-trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😊) </h4> <br />

          <h4>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </h4>
        </div>

        <section className='about--end--section'>
          <div>
            <h1>
              Your destination is waiting. 
              <br />
              <span>Your van is ready.</span>
            </h1>
            <button>Explore our vans</button>
          </div>
        </section>
      </section>
    </main>
  )
}

export default About