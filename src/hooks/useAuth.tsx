import { useEffect, useState } from 'react';
import { loginUser, logout as logoutApi, registerUser } from '@/api/authApi';
import { useNavigate } from 'react-router';
import { useUser } from '@/hooks/user/useUser';
import { useToast } from './useToast';
import { User } from '@/types';

type handleSubmitType = 'register' | 'login';

export const useAuth = () => {
  const { user, setUser } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { initiateToast } = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = localStorage.getItem('auth');
    setIsAuthenticated(!!authtoken);
  });

  const logout = async () => {
    try {
      await logoutApi();
      localStorage.removeItem('auth');
      setUser({} as User);
      navigate('/login');
    } catch (error) {
      return error;
    }
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...(user || {}),
      [e.target.id]: e.target.value,
    } as any);
  };

  const handleSubmit = async (typeSubmit: handleSubmitType, e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      console.error('No hay datos de usuario para enviar');
      return;
    }

    let response;

    try {
      if (typeSubmit === 'register') {
        response = await registerUser(user);
        initiateToast(response, true);
      } else if (typeSubmit === 'login') {
        response = await loginUser(user);

        // Verificamos que la respuesta tenga lo que necesitamos
        if (response?.access_token) {
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: response.access_token,
              user: response.user,
            })
          );

          setUser(response.user);

          navigate('/home');
        }
      }
    } catch (error) {
      initiateToast(String(error), false);
    }
  };

  return { isAuthenticated, logout, handleChanges, handleSubmit };
};
