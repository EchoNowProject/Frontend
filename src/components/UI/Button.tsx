import React, { ReactNode } from 'react';

interface ButtonProps {
  textButton: ReactNode;
  className?: string;
  onclick?: () => void;
}

export default function Button({ textButton, className, onclick }: ButtonProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onclick}
        className={
          className +
          ' rounded-lg px-5 py-2.5 inline-flex justify-center w-full text-center shadow-2xl'
        }
      >
        <b>{textButton}</b>
      </button>
    </div>
  );
}
