import { loginUser, registerUser } from '@/api/authApi';
import { User } from '@/types/User';
import React, { useState } from 'react';

type handleSubmitType = 'register' | 'login';

export const useUser = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (typeSubmit: handleSubmitType, e: React.FormEvent) => {
    let response: string = '';

    e.preventDefault(); // 👈 hace que no se recarge el form

    if (typeSubmit === 'register') {
      response = await registerUser(user);
    } else if (typeSubmit === 'login') {
      response = await loginUser(user);
    }
  };

  return { user, handleChanges, handleSubmit };
};
