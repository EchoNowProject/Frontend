import './assets/styles/App.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { UserProvider } from './context/User/UserProvider';
import { ToastProvider } from './context/Toast/ToastProvider';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.Activity>
    <ToastProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ToastProvider>
  </React.Activity>
);
