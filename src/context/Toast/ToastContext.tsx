import { createContext } from 'react';

type ToastContextType = {
  showToast: boolean;
  textToast: string | null;
  success: boolean;

  setShowToast: (show: boolean) => void;
  setTextToast: (text: string | null) => void;
  handleOnClick: (onClickFunction?: () => void) => void;
  initiateToast: (message: string, success: boolean) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export { ToastContext };
