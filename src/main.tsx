import './assets/styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom'; // o “react-router/dom” según la versión
import routes from './routes/index';

const router = createBrowserRouter(routes);

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
