import { User } from '@/types';
import { createContext } from 'react';

interface UserType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  saveUserState: () => void;
}

const UserContext = createContext<UserType | undefined>(undefined);

export { UserContext };
