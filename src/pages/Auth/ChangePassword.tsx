import { updatePassword } from '@/api/authApi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useToast } from '@/hooks/useToast';
export const ChangePassword = () => {
  const [actualPassword, setActualPassword] = useState<string>();
  const [newPassword, setNewPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const { initiateToast } = useToast();
  const navigate = useNavigate();

  const handleUpdatePassword = async () => {
    try {
      if (actualPassword && newPassword && confirmPassword) {
        const response = await updatePassword(actualPassword, newPassword, confirmPassword);
        navigate('/home/profile');
        initiateToast(response, true);
      }
    } catch (error) {
      initiateToast(String(error), false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="z-10 flex flex-col min-h-screen">
        {/* Setting Server Container */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col w-full max-w-xl p-10 border-2 rounded-2xl border-neutral-800 bg-neutral-900/90 backdrop-blur-md shadow-2xl">
            <h5 className="mb-8 text-3xl text-center font-bold text-white">
              Actualiza tu contraseña
            </h5>

            <section className="flex flex-col gap-6">
              {/* Contraseña actual */}
              <div>
                <label htmlFor="actualPassword" className="font-bold">
                  Contraseña actual
                </label>
                <input
                  type="password"
                  name="actualPassword"
                  className={`w-full flex items-center my-3 hover:bg-neutral-700 border-2 border-violet-600 hover:scale-[1.02] active:scale-95 transition-all py-3 px-6 rounded-xl text-white font-bold text-lg shadow-lg`}
                  placeholder="nueva contraseña"
                  onChange={(e) => {
                    setActualPassword(e.target.value.trim());
                  }}
                />
              </div>
              {/* Nueva contraseña */}
              <div>
                <label htmlFor="actualPassword" className="font-bold">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  name="actualPassword"
                  className={`w-full flex items-center my-3 hover:bg-neutral-700 border-2 border-violet-600 hover:scale-[1.02] active:scale-95 transition-all py-3 px-6 rounded-xl text-white font-bold text-lg shadow-lg`}
                  placeholder="mi-nueva-contraseña"
                  onChange={(e) => {
                    setNewPassword(e.target.value.trim());
                  }}
                />
              </div>
              {/* Repetir la nueva contraseña */}
              <div>
                <label htmlFor="actualPassword" className="font-bold">
                  Repetir la nueva contraseña
                </label>
                <input
                  type="password"
                  name="actualPassword"
                  className={`w-full flex items-center my-3 hover:bg-neutral-700 border-2 border-violet-600 hover:scale-[1.02] active:scale-95 transition-all py-3 px-6 rounded-xl text-white font-bold text-lg shadow-lg`}
                  placeholder="confirm-mi-nueva-contraseña"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value.trim());
                  }}
                />
              </div>
            </section>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <button
                type="submit"
                className="bg-neutral-500 hover:bg-neutral-600 hover:scale-105 transition-all ease-in-out duration-400 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate('/home/profile')}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-violet-700 hover:bg-violet-800 hover:scale-105 transition-all ease-in-out duration-400 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleUpdatePassword()}
              >
                Cambiar Contraseña
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
