import { User } from '@/types/User';
import React, { ReactNode, useEffect, useState } from 'react';
import { UserContext } from '@/context/User/UserContext';
import { me } from '@/api/authApi';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

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

  const values = { user, setUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
