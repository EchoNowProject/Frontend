import React from 'react';
import { LandingPage, Home, Planes } from '@/pages';
// import otros componentes

const routes = [
  {
    path: '/',
    element: <LandingPage />,
    // podrías agregar loader, errorElement, etc.
  },
  {
    path: '/home',
    element: <Home />,
    // podrías agregar loader, errorElement, etc.
  },
  {
    path: '/planes',
    element: <Planes />,
    // podrías agregar loader, errorElement, etc.
  },
];

export default routes;
