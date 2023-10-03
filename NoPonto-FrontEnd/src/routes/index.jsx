import {
    createBrowserRouter, Outlet, RouterProvider,
  } from 'react-router-dom';
  // import login from './login';
import home from './home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import point from './point';
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
          // ...login,
          ...routes,
        ],
      },
    ]);
  
    return (
      <RouterProvider router={router} />
    );
  }
  