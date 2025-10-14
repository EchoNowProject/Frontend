import React from 'react';
import Button from '@/components/UI/Button';

export default function Login() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] h-full">
        {/* Lado izquierdo - solo visible en pantallas md+ */}
        <div className="md:flex items-center justify-center">
          <p className="text-white text-3xl font-bold">Bienvenido</p>
        </div>

        {/* Lado derecho - formulario */}
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md p-6 bg-violet-600 border-2 border-violet-400 rounded-2xl shadow-lg">
            {/* imagemn */}
            <div className="flex justify-center">
              <div className="inline-flex">
                <img
                  src="../../../../../public/assets/images/logo-blanco.png"
                  width={100}
                  alt="EchoNow"
                />
              </div>
            </div>

            {/* Titulo */}
            <h1 className="mb-6 font-bold text-white text-2xl text-center">
              Iniciar Sesión en EchoNow!
            </h1>
            {/* Formulario */}
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-gray-200">
                  <b>
                    Correo Electrónico <span className="text-sm text-red-500">*</span>
                  </b>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="p-2 rounded-lg border-3 border-violet-800 outline-none text-white"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="text-white">
                    <b>
                      Contraseña <span className="text-sm text-red-500">*</span>
                    </b>
                  </label>
                  <a className="text-white text-sm">¿Has olvidado la contraseña?</a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="p-2 rounded-lg border-3 border-violet-800 outline-none text-white"
                />
              </div>

              <div className="mt-4">
                <Button
                  textButton="Iniciar Sesión"
                  className="text-lg text-white bg-violet-500 hover:bg-violet-800"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <small className="text-white">¿Necesitas una cuenta?</small>
                <small>
                  <a className="text-white cursor-pointer">Registrate aqui</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
