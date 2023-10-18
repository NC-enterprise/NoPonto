import {
  // BrowserRouter,
    createBrowserRouter, Outlet, RouterProvider,
  } from 'react-router-dom';
import login from './login';
import signUp from './signUp';
import home from './home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import point from './point';
import pagePoint from './pagePoint';
import partnerBrand from './PartnerBrand';
import pointRegistration from './pointRegistration';

  
  const routes = [{
    path: '',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      ...home,
      ...point,
      ...pagePoint,
      ...partnerBrand,
      ...pointRegistration
    ],
  }];
  
  export default function RoutesApp() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: (
          <Outlet />
        ),
        children: [
          ...login,
          ...signUp,
          ...routes,
        ],
      },
    ]);
  
    return (
      <RouterProvider router={router} />
      
      // <BrowserRouter>
      // <Routes>
      //   <Route path="/" element={<Login} />
      // </Routes>
      // </BrowserRouter>
    );
  }
  