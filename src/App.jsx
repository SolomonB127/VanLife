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
import VansDetails, {loader as vanDetailsLoader} from './assets/Components/Pages/VansDetails';
import HostLayout, {loader as hostLoader} from './assets/Components/HostLayout';
import Dashboard, {loader as hostVanDashLoader} from './assets/Components/Pages/Host/Dashboard';
import Income, {loader as hostVanIncomeLoader} from './assets/Components/Pages/Host/Income';
import Reviews, {loader as hostVanRevsLoader} from './assets/Components/Pages/Host/Reviews';
import VansHost, {loader as hostVanLoader} from './assets/Components/Pages/Host/VansHost';
import Vaninfo, {loader as hostVanInfoLoader} from './assets/Components/Pages/Host/Vaninfo';
import HostVanDetail, {loader as hostVanDetsLoader} from './assets/Components/Pages/Host/HostVanDetail';
import HostVanPricing, {loader as hostVanPriceLoader} from './assets/Components/Pages/Host/HostVanPricing';
import HostVanPhotos, {loader as hostVanPicsLoader} from './assets/Components/Pages/Host/HostVanPhotos';
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
    <Route path='van/:id'  element={ <VansDetails/> } loader={vanDetailsLoader}/>
    
    <Route path='host'  element={ <HostLayout/> }  loader={hostLoader} >
      <Route index element={ <Dashboard /> }  loader={hostVanDashLoader}/>
      <Route path='income'  element={ <Income/> }  loader={hostVanIncomeLoader}/>
      <Route path='reviews'  element={ <Reviews/> } loader={hostVanRevsLoader}/>
      <Route path='vanshost'  element={ <VansHost/> } loader={hostVanLoader}/>

      <Route path='vanshost/:id'  element={ <Vaninfo/> } loader={hostVanInfoLoader}>
        <Route index element={ <HostVanDetail />} loader={hostVanDetsLoader}/>
        <Route path='pricing' element={ <HostVanPricing />}  loader={hostVanPriceLoader}/>
        <Route path='photos' element={ <HostVanPhotos />} loader={hostVanPicsLoader}/>
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
