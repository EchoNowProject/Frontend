import { useAlerts } from '@/hooks/useAlerts';
import { Xmark } from '@/icons';
import React, { useEffect } from 'react';

export const Alerts = () => {
  const { userAlerts, getAlerts, acceptFriendRequest, declineFriendRequest } = useAlerts();

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className="text-3xl font-bold">Mis Notificaciones</h1>
      </div>

      <div className="p-5 mx-4 md:mx-10 rounded-2xl border-2 border-violet-500 overflow-x-auto">
        {/* Version de Md en adelante */}
        <table className="w-full text-sm border-collapse hidden md:table">
          {userAlerts && userAlerts.length !== 0 && (
            <thead className="bg-violet-500/10 text-violet-300 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-start">Mensaje</th>
                <th className="px-6 py-3 text-right">Acción</th>
              </tr>
            </thead>
          )}

          <tbody>
            {userAlerts?.map((alert, index) => (
              <tr key={index} className="border-t border-violet-500/20">
                <td className="px-6 py-3 text-white wrap-break-word">{alert.message}</td>

                <td className="px-6 py-3 text-right">
                  <div className="flex gap-3 justify-end">
                    <button
                      className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-800 text-xs font-semibold"
                      onClick={() => acceptFriendRequest(alert)}
                    >
                      Aceptar
                    </button>

                    <button
                      className="px-2 rounded-lg bg-red-500"
                      onClick={() => declineFriendRequest(alert)}
                    >
                      <Xmark size={20} color="#fff" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* versión móvil */}
        <div className="md:hidden flex flex-col gap-4">
          {(!userAlerts || userAlerts.length === 0) && (
            <div className="text-center text-gray-400 italic">No hay notificaciones</div>
          )}

          {userAlerts?.map((alert, index) => (
            <div
              key={index}
              className="border border-violet-500/20 rounded-xl p-4 flex flex-col gap-3"
            >
              <p className="text-white text-sm wrap-break-word">{alert.message}</p>

              <div className="flex gap-3">
                <button
                  className="flex-1 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-800 text-xs font-semibold"
                  onClick={() => acceptFriendRequest(alert)}
                >
                  Aceptar
                </button>

                <button
                  className="px-3 py-2 rounded-lg bg-red-500"
                  onClick={() => declineFriendRequest(alert)}
                >
                  <Xmark size={20} color="#fff" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
