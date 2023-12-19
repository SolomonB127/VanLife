import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './assets/Pages/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path='/'  element={ <App /> }/>
        <Route path='/about'  element={ <About /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
