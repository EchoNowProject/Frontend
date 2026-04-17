import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/user/useUser';

export const Register = ({ onFlip }: { onFlip: () => void }) => {
  const { user } = useUser();
  const { handleChanges, handleSubmit } = useAuth();

  return (
    <div className="back absolute w-full h-full backface-hidden rotate-y-180 bg-violet-600 border border-violet-400 rounded-2xl shadow-2xl p-6 sm:p-8">
      <h1 className="mb-6 font-bold text-white text-2xl sm:text-3xl text-center">
        Crear cuenta en EchoNow
      </h1>

      <form className="flex flex-col gap-4" onSubmit={(event) => handleSubmit('register', event)}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-gray-100 text-sm sm:text-base">
            <b>Username</b> <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="username"
            value={user?.username}
            required={true}
            onChange={handleChanges}
            className="p-2 rounded-lg border border-violet-800 outline-none text-white bg-violet-700 focus:ring-2 focus:ring-violet-400 shadow-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-gray-100 text-sm sm:text-base">
            <b>Correo electrónico</b> <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={user?.email}
            placeholder="echonow@example.com"
            required={true}
            onChange={handleChanges}
            className="p-2 rounded-lg border border-violet-800 outline-none text-white bg-violet-700 focus:ring-2 focus:ring-violet-400 shadow-lg"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label htmlFor="password" className="mb-1 text-gray-100 text-sm sm:text-base">
            <b>Contraseña</b> <span className="text-red-400">*</span>
          </label>
          <input
            type="password"
            id="password"
            value={user?.password}
            required={true}
            onChange={handleChanges}
            className="p-2 rounded-lg border border-violet-800 outline-none text-white bg-violet-700 focus:ring-2 focus:ring-violet-400 shadow-lg"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full text-lg text-white bg-violet-500 hover:bg-violet-700 transition-all duration-200 rounded-xl py-2"
          >
            Registrarse
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
          <span className="text-white">¿Ya tienes una cuenta?</span>
          <button
            type="button"
            onClick={onFlip}
            className="text-violet-200 hover:underline cursor-pointer"
          >
            Inicia sesión
          </button>
        </div>
      </form>
    </div>
  );
};
