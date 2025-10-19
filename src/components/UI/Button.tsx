import React, { ReactNode } from 'react';

export enum ButtonType {
  Submit = 'submit',
  Reset = 'reset',
  Button = 'button',
}

interface ButtonProps {
  textButton: ReactNode;
  type: ButtonType;
  className?: string;
  onclick?: () => void;
}

export default function Button(button: ButtonProps) {
  return (
    <div>
      <button
        type={button.type}
        onClick={button.onclick}
        className={
          button.className +
          ' rounded-lg px-5 py-2.5 inline-flex justify-center w-full text-center shadow-2xl'
        }
      >
        <b>{button.textButton}</b>
      </button>
    </div>
  );
}
