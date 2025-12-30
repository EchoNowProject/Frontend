import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Template as LandingPageTemplate, LandingPage, Home, Planes, AuthMain } from '@/pages';
import { Empty } from '@/pages/Home/Empty';
import { Chat } from '@/pages/Chats/Chats';
import { CreateServerPage } from '@/pages/Servers/CreateServerPage';
import { PublicRoute } from './PublicRoute';
import { AuthenticatedRoute } from './AuthenticatedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <LandingPageTemplate />
      </PublicRoute>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/planes', element: <Planes /> },
      { path: '/login', element: <AuthMain /> },
    ],
  },
  {
    path: '/home',
    element: (
      <AuthenticatedRoute>
        <Home />
      </AuthenticatedRoute>
    ),
    children: [
      { index: true, element: <Empty /> },
      { path: 'chat', element: <Chat /> },
      { path: 'server/new', element: <CreateServerPage /> },
    ],
  },
]);
