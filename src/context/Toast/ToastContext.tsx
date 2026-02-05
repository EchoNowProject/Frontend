import { createContext } from 'react';

type ToastContextType = {
  showToast: boolean;
  textToast: string | null;

  setShowToast: (show: boolean) => void;
  setTextToast: (text: string | null) => void;
  handleOnClick: (onClickFunction?: () => void) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export { ToastContext };
