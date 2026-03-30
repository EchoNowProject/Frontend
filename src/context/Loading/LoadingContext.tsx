import { createContext } from 'react';

type LoadingContextType = {
  showLoading: boolean;
  message: string;
  setShowLoading: (show: boolean) => void;
  setMessage: (message: React.SetStateAction<string>) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export { LoadingContext };
