import './assets/styles/App.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom'; // o “react-router/dom” según la versión
import { router } from '@/routes';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
