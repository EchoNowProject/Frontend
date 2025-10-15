import React from 'react';
import Button from '@/components/UI/Button';
import './Login.css';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado izquierdo */}
      <div className="flex flex-col items-center justify-center text-center md:text-left px-6 py-10 md:w-1/2">
        {/* Imagen */}
        <img
          src="/assets/images/logo-blanco.png"
          width={220}
          alt="EchoNow"
          className="logoEchoNowLogin mb-6 w-40 sm:w-56 md:w-64"
        />

        {/* Texto */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-xl">
          EchoNow te ayuda a comunicarte y compartir los mejores momentos con tus personas
          favoritas.
        </h1>
      </div>

      {/* Lado derecho - formulario */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-4 py-10">
        <div className="w-full max-w-md p-6 sm:p-8 bg-violet-600/90 border border-violet-400 rounded-2xl shadow-2xl backdrop-blur-sm">
          {/* Título */}
          <h1 className="mb-6 font-bold text-white text-2xl sm:text-3xl text-center">
            Iniciar Sesión en EchoNow
          </h1>

          {/* Formulario */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-100 text-sm sm:text-base">
                <b>
                  Correo Electrónico <span className="text-red-400">*</span>
                </b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="p-2 rounded-lg border border-violet-800 outline-none text-white bg-violet-700/40 focus:ring-2 focus:ring-violet-400 placeholder-gray-300"
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
                name="password"
                id="password"
                required
                className="p-2 rounded-lg border border-violet-800 outline-none text-white bg-violet-700/40 focus:ring-2 focus:ring-violet-400 placeholder-gray-300"
              />
            </div>

            <div className="mt-4">
              <Button
                textButton="Iniciar Sesión"
                className="w-full text-lg text-white bg-violet-500 hover:bg-violet-700 transition-all duration-200 rounded-xl py-2"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
              <span className="text-white">¿No tienes una cuenta?</span>
              <a className="text-violet-200 hover:underline cursor-pointer">Regístrate aquí</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
