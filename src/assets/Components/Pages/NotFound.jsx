import React from 'react';
import './stylesheets/NotFound.css'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <section className="not-found-container">
      <h1>Sorry, the page you were looking for was not found</h1>
      <Link to="/" className="link-button">Back to Home  </Link>
    </section>
  )
}

export default NotFound
