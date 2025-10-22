import './Auth.css';
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Toast from '@/components/UI/Toast/Toast';
import { useHelper } from '@/hooks/useHelper';

export default function AuthCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const { showToast, closeToast } = useHelper();

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Toast text="TEXT" show={showToast} onClose={closeToast} />
      {/* Lado izquierdo */}
      <div className="flex flex-col items-center justify-center text-center md:text-left px-6 py-10 md:w-1/2">
        <img
          src="/assets/images/logo-blanco.png"
          width={220}
          alt="EchoNow"
          className="logoEchoNowLogin mb-6 w-40 sm:w-56 md:w-64"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-xl">
          EchoNow te ayuda a comunicarte y compartir los mejores momentos con tus personas
          favoritas.
        </h1>
      </div>

      {/* Lado derecho con flip */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-4 py-10 perspective">
        <div
          className={`auth-card relative w-full max-w-md h-[460px] transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180 flipped' : ''
          }`}
        >
          <Login onFlip={handleFlip} />
          <Register onFlip={handleFlip} />
        </div>
      </div>
    </div>
  );
}
