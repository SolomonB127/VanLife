import React from 'react'
import './stylesheets/Home.css'
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <main>
      <section>
        <div className="home-container">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="/van">Find your van</Link>
        </div>
      </section>
    </main>
  )
}

export default Home