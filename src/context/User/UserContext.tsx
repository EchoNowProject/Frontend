import { User } from '@/types';
import { createContext } from 'react';

interface UserType {
  user: User | null;
  setUser: (u: User) => void;
  saveUserState: () => void;
}

const UserContext = createContext<UserType | undefined>(undefined);

export { UserContext };
