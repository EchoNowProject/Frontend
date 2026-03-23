import { User } from '@/types';
import React, { ReactNode, useEffect, useState } from 'react';
import { UserContext } from '@/context/User/UserContext';
import { me } from '@/api/authApi';
import { updateUser } from '@/api/UserApi';
import { useToast } from '@/hooks/useToast';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { initiateToast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userReloaded = await me();
        setUser(userReloaded);
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const saveUserState = async () => {
    try {
      if (!user) {
        throw new Error('No se encuentra al usuario, por favor inicie sesión de nuevo');
      }

      const userUpdated = await updateUser(user);
      setUser(userUpdated);
      initiateToast('¡Actualización Exitosa!', true);
    } catch (error: any) {
      setUser(error.response.data.user);
      initiateToast(error.response.data.error, false);
    }
  };

  const values = { user, setUser, saveUserState };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
