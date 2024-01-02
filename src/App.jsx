import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes, 
  Route 
} from 'react-router-dom';
import  Layout from './assets/Components/Layout';
import './App.css';
import Home from './assets/Components/Pages/Home';
import About from './assets/Components/Pages/About';
import Vans, { loader as vanLoader } from './assets/Components/Pages/Vans';
import VansDetails from './assets/Components/Pages/VansDetails';
import Dashboard from './assets/Components/Pages/Host/Dashboard';
import Income from './assets/Components/Pages/Host/Income';
import Reviews from './assets/Components/Pages/Host/Reviews';
import HostLayout from './assets/Components/HostLayout';
import VansHost from './assets/Components/Pages/Host/VansHost';
import Vaninfo from './assets/Components/Pages/Host/Vaninfo';
import HostVanDetail from './assets/Components/Pages/Host/HostVanDetail';
import HostVanPricing from './assets/Components/Pages/Host/HostVanPricing';
import HostVanPhotos from './assets/Components/Pages/Host/HostVanPhotos';
import NotFound from './assets/Components/Pages/NotFound';
import Error from './assets/Components/Error';
import Login from './assets/Components/Pages/Login';

import './server.js';

// Setting up data router
const allRoutes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Layout /> } errorElement={ <Error /> } >
    <Route  index element={ <Home /> } />
    <Route path='about'  element={ <About /> } />
    <Route path='login'  element={ <Login /> } />
    <Route path='van'  element={ <Vans/> } loader={vanLoader}/>
    <Route path='van/:id'  element={ <VansDetails/> } />
    
    <Route path='host'  element={ <HostLayout/> } >
      <Route index element={ <Dashboard /> } />
      <Route path='income'  element={ <Income/> } />
      <Route path='reviews'  element={ <Reviews/> } />
      <Route path='vanshost'  element={ <VansHost/> } />

      <Route path='vanshost/:id'  element={ <Vaninfo/> } >
        <Route index element={ <HostVanDetail />} />
        <Route path='pricing' element={ <HostVanPricing />} />
        <Route path='photos' element={ <HostVanPhotos />} />
      </Route>

    </Route>
    <Route path='*' element={ <NotFound/> } />
  </Route>
))
function App() {
  return (
    <>
    <div className='App'>
      <RouterProvider router={allRoutes} />
    </div>
    </>
  )
}



export default App
