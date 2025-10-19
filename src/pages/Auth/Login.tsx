import React from 'react';
import Button, { ButtonType } from '@/components/UI/Button';

export default function Login({ onFlip }: { onFlip: () => void }) {
  return (
    <div className="front absolute w-full h-full backface-hidden bg-violet-600 border border-violet-400 rounded-2xl shadow-2xl p-6 sm:p-8">
      <h1 className="mb-6 font-bold text-white text-2xl sm:text-3xl text-center">
        Iniciar Sesión en EchoNow
      </h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-gray-100 text-sm sm:text-base">
            <b>
              Correo Electrónico <span className="text-red-400">*</span>
            </b>
          </label>
          <input
            type="email"
            id="email"
            required
            className="p-2 rounded-lg border border-violet-800 outline-none text-white bg-violet-700 focus:ring-2 focus:ring-violet-400 shadow-lg"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="text-gray-100 text-sm sm:text-base">
              <b>
                Contraseña <span className="text-red-400">*</span>
              </b>
            </label>
            <a className="text-violet-200 text-xs sm:text-sm hover:underline cursor-pointer">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <input
            type="password"
            id="password"
            required
            className="p-2 rounded-lg border border-violet-800 outline-none text-white bg-violet-700 focus:ring-2 focus:ring-violet-400 shadow-lg"
          />
        </div>

        <div className="mt-4">
          <Button
            type={ButtonType.Submit}
            textButton="Iniciar Sesión"
            className="w-full text-lg text-white bg-violet-500 hover:bg-violet-700 transition-all duration-200 rounded-xl py-2"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
          <span className="text-white">¿No tienes una cuenta?</span>
          <button
            type="button"
            onClick={onFlip}
            className="text-violet-200 hover:underline cursor-pointer"
          >
            Regístrate aquí
          </button>
        </div>
      </form>
    </div>
  );
}
