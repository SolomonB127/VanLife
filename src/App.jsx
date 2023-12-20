import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './assets/Components/Header'
import './App.css'
import Home from './assets/Components/Pages/Home'
import About from './assets/Components/Pages/About'
import Vans from './assets/Components/Pages/Vans'
function App() {
  return (
    <>
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/'  element={ <Home /> } />
        <Route path='/about'  element={ <About /> } />
        <Route path='/van'  element={ <Vans/> } />
      </Routes>
    </div>
    </>
  )
}



export default App
