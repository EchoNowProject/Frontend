// ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect, ReactElement } from 'react';

export const AuthenticatedRoute = ({ children }: { children: ReactElement }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsAuthenticated(!!auth);
    setAuthChecked(true);
  }, []);

  if (!authChecked) return <div>Cargando...</div>; // evita redirecciones múltiples

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return children;
};
