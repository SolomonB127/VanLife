import { Routes, Route } from 'react-router-dom';
import  Layout from './assets/Components/Layout';
import './App.css';
import Home from './assets/Components/Pages/Home';
import About from './assets/Components/Pages/About';
import Vans from './assets/Components/Pages/Vans';
import VansDetails from './assets/Components/Pages/VansDetails';
import './server.js'
import Dashboard from './assets/Components/Pages/Host/Dashboard';
import Income from './assets/Components/Pages/Host/Income';
import Reviews from './assets/Components/Pages/Host/Reviews';
import HostLayout from './assets/Components/HostLayout';
function App() {
  return (
    <>
    <div className='App'>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path='/'  element={ <Home /> } />
          <Route path='/about'  element={ <About /> } />
          <Route path='/van'  element={ <Vans/> } />
          <Route path='/van/:id'  element={ <VansDetails/> } />
          
          <Route path='/host'  element={ <HostLayout/> } >
            <Route path='/host/income'  element={ <Income/> } />
            <Route path='/host/reviews'  element={ <Reviews/> } />
          </Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}



export default App
