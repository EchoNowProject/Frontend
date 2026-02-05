import { useEffect, useState } from 'react';
import { logout as logoutApi } from '@/api/authApi';
import { useNavigate } from 'react-router';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = localStorage.getItem('auth');
    setIsAuthenticated(!!authtoken);
  });

  const logout = async () => {
    try {
      await logoutApi();
      localStorage.removeItem('auth');
      navigate('/login');
    } catch (error) {
      return error;
    }
  };

  return { isAuthenticated, logout };
};
