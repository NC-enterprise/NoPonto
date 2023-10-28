import {
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
import dashboardRoutes from './dashboard';
import pagePartnerBrand from './pagePartnerBrand';

  
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
      ...pointRegistration,
      ...pagePartnerBrand
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
          ...dashboardRoutes,
        ],
      },
    ]);
  
    return (
      <RouterProvider router={router} />
    );
  }
  