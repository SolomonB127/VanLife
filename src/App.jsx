import { Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header'
import './App.css';
import Home from './assets/Components/Pages/Home';
import About from './assets/Components/Pages/About';
import Vans from './assets/Components/Pages/Vans';
import VansDetails from './assets/Components/Pages/VansDetails';
import Footer from './assets/Components/Footer';
import './server.js'
function App() {
  return (
    <>
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/'  element={ <Home /> } />
        <Route path='/about'  element={ <About /> } />
        <Route path='/van'  element={ <Vans/> } />
        <Route path='/van/:id'  element={ <VansDetails/> } />
      </Routes>

      <Footer />
    </div>
    </>
  )
}



export default App
