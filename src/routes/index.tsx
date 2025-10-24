import React from 'react';
import { Template as LandingPageTemplate, LandingPage, Home, Planes, AuthMain } from '@/pages';
// import otros componentes

const routes = [
  {
    path: '/',
    element: <LandingPageTemplate />,
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
