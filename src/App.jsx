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
import HostLayout from './assets/Components/HostLayout';
import Dashboard, {loader as dashBoardLoader} from './assets/Components/Pages/Host/Dashboard';
import Income from './assets/Components/Pages/Host/Income';
import Reviews from './assets/Components/Pages/Host/Reviews';
import VansHost, {loader as hostVanLoader} from './assets/Components/Pages/Host/VansHost';
import Vaninfo, {loader as hostVanInfoLoader} from './assets/Components/Pages/Host/Vaninfo';
import HostVanDetail from './assets/Components/Pages/Host/HostVanDetail';
import HostVanPricing from './assets/Components/Pages/Host/HostVanPricing';
import HostVanPhotos from './assets/Components/Pages/Host/HostVanPhotos';
import NotFound from './assets/Components/Pages/NotFound';
import Error from './assets/Components/Error';
import Login, { loginLoader, action as loginAction } from './assets/Components/Pages/Login';

import './server.js';

import { requiredAuth } from './util';

// Setting up data router
const allRoutes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Layout /> } errorElement={ <Error /> } >
    <Route  index element={ <Home /> } />
    <Route path='about'  element={ <About /> } />
    <Route path='login'  element={ <Login /> } loader={loginLoader} action={loginAction}/>
    <Route path='van'  element={ <Vans/> } loader={vanLoader}/>
    <Route path='van/:id'  element={ <VansDetails/> } loader={vanDetailsLoader}/>
    
    {/* Passed the request object */}
    <Route path='host'  element={ <HostLayout/> }  loader={async({request}) => await requiredAuth(request)} >
      <Route index element={ <Dashboard /> }  loader= {dashBoardLoader}/>
      <Route path='income'  element={ <Income/> }   loader={async({request}) => await requiredAuth(request)}/>
      <Route path='reviews'  element={ <Reviews/> }  loader={async({request}) => await requiredAuth(request)}/>
      <Route path='vanshost'  element={ <VansHost/> } loader={hostVanLoader}/>

      <Route path='vanshost/:id'  element={ <Vaninfo/> } loader={hostVanInfoLoader}>
        <Route index element={ <HostVanDetail />}  loader={async({request}) => await requiredAuth(request)}/>
        <Route path='pricing' element={ <HostVanPricing />}   loader={async({request}) => await requiredAuth(request)}/>
        <Route path='photos' element={ <HostVanPhotos />}  loader={async({request}) => await requiredAuth(request)}/>
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
