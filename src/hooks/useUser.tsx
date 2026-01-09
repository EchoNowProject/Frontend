import { loginUser, registerUser } from '@/api/AuthApi';
import { User } from '@/types/User';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

type handleSubmitType = 'register' | 'login';

export const useUser = () => {
  const [user, setUser] = useState<User>({} as User);
  const navigate = useNavigate();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  /* Funcion que recoge los datos y hace una peticion a la API  */
  const handleSubmit = async (typeSubmit: handleSubmitType, e: React.FormEvent) => {
    let response;

    e.preventDefault(); // 👈 hace que no se recarge el form

    if (typeSubmit === 'register') {
      response = await registerUser(user);
    } else if (typeSubmit === 'login') {
      response = await loginUser(user);
      try {
        localStorage.setItem(
          'auth',
          JSON.stringify({
            token: response.access_token,
            user: response.user,
          })
        );
        navigate('/home');
      } catch (error) {
        alert(error);
      }
    }
  };

  return { user, handleChanges, handleSubmit };
};
