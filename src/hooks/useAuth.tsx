import { useEffect, useState } from 'react';
import { logout as logoutApi } from '@/api/authApi';
import { redirect } from 'react-router';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authtoken = localStorage.getItem('auth');
    setIsAuthenticated(!!authtoken);
  });

  const logout = async () => {
    try {
      await logoutApi();
      localStorage.removeItem('auth');
      redirect('/login');
    } catch (error) {
      return error;
    }
  };

  return { isAuthenticated, logout };
};
