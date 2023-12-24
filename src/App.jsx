import { Routes, Route } from 'react-router-dom';
import  Layout from './assets/Components/Layout';
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
      <Routes>
        <Route element={ <Layout /> }>
          <Route path='/'  element={ <Home /> } />
          <Route path='/about'  element={ <About /> } />
          <Route path='/van'  element={ <Vans/> } />
          <Route path='/van/:id'  element={ <VansDetails/> } />
        </Route>
      </Routes>

      <Footer />
    </div>
    </>
  )
}



export default App
