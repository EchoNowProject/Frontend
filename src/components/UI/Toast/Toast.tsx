import React from 'react';
import Xmark from '@icons/Xmark';

interface ToastProps {
  text: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ text, show, onClose }: ToastProps) {
  return (
    <>
      {show && (
        <div
          id="toast-default"
          className="fixed m-10 right-5 flex items-center w-auto p-4 bg-violet-500 rounded-lg shadow-lg text-white z-50"
          role="alert"
        >
          <div className="flex text-sm font-normal justify-items-end text-white me-5">{text}</div>
          <button
            type="button"
            className="bg-violet-400 -my-2 hover:text-gray-900 rounded-lg p-1.5 hover:bg-violet-800 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#toast-default"
            aria-label="Close"
            onClick={onClose}
          >
            <Xmark />
          </button>
        </div>
      )}
    </>
  );
}
