import React from 'react';
import { Template, LandingPage, Home, Planes } from '@/pages';
// import otros componentes

const routes = [
  {
    path: '/',
    element: <Template />,
    children: [
      { index: true, element: <LandingPage /> }, // Página principal
      { path: '/planes', element: <Planes /> }, // Otra página
    ],
    // podrías agregar loader, errorElement, etc.
  },
  {
    path: '/home',
    element: <Home />,
    // podrías agregar loader, errorElement, etc.
  },
];

export default routes;
