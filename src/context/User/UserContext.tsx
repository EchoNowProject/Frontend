import { User } from '@/types/User';
import { createContext } from 'react';

interface UserType {
  user: User | null;
  setUser: (u: User) => void;
}

const UserContext = createContext<UserType | undefined>(undefined);

export { UserContext };
