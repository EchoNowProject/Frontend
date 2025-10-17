import React from 'react';
import { Template, LandingPage, Home, Planes, AuthMain } from '@/pages';
// import otros componentes

const routes = [
  {
    path: '/',
    element: <Template />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/planes', element: <Planes /> },
      { path: '/login', element: <AuthMain /> },
    ],
  },
  {
    path: '/home',
    element: <Home />,
    // podrías agregar loader, errorElement, etc.
  },
];

export default routes;
