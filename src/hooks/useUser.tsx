import { registerUser } from '@/api/UserApi';
import { User } from '@/types/User';
import React, { useState } from 'react';

export const useUser = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 👈 hace que no se recarge el form
    let response = await registerUser(user);
    console.log(response);
  };

  return { user, handleChanges, handleSubmit };
};
