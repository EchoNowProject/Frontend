import { useAlerts } from '@/hooks/useAlerts';
import { Xmark } from '@/icons';
import React, { useEffect } from 'react';

export const Alerts = () => {
  const { userAlerts, getAlerts, acceptFriendRequest, declineFriendRequest } = useAlerts();

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <div>
      {!userAlerts || userAlerts.length === 0 ? (
        <div className="fixed inset-0 flex items-center justify-center text-gray-400 italic">
          No hay notificaciones
        </div>
      ) : (
        <>
          {/* MOBILE */}
          <div className="p-5">
            <div className="flex flex-col gap-4 md:hidden max-h-[60vh] overflow-y-auto pr-1">
              {userAlerts?.map((alert, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col gap-3 rounded-xl border border-violet-500/20 bg-[#1f1f1f] p-4"
                >
                  <p className="text-white text-sm wrap-break-word">{alert.message}</p>

                  <div className="flex gap-3">
                    <button
                      className="flex-1 px-4 py-2 rounded-lg bg-violet-600 text-xs font-semibold active:scale-95 transition hover:bg-violet-500"
                      onClick={() => acceptFriendRequest(alert)}
                    >
                      Aceptar
                    </button>

                    <button
                      className="px-3 py-2 rounded-lg bg-red-500 active:scale-95 transition"
                      onClick={() => declineFriendRequest(alert)}
                    >
                      <Xmark size={20} color="#fff" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP / TABLET */}
            <div className="hidden md:block max-h-[60vh] overflow-auto rounded-xl border border-violet-500/20">
              <table className="w-full text-sm min-w-[500px]">
                <thead className="top-0 z-10 bg-violet-500/10 text-violet-300 uppercase text-xs backdrop-blur">
                  <tr>
                    <th className="px-6 py-4 text-left">Mensaje</th>
                    <th className="px-6 py-4 text-right">Acción</th>
                  </tr>
                </thead>

                <tbody>
                  {userAlerts?.map((alert, index) => (
                    <tr
                      key={index}
                      className="border-t border-violet-500/20 hover:bg-violet-500/5 transition"
                    >
                      <td className="px-6 py-4 text-white wrap-break-word">{alert.message}</td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex gap-3 justify-end">
                          <button
                            className="px-4 py-2 rounded-lg bg-violet-600 text-xs font-semibold hover:bg-violet-500 transition active:scale-95"
                            onClick={() => acceptFriendRequest(alert)}
                          >
                            Aceptar
                          </button>

                          <button
                            className="px-3 py-2 rounded-lg bg-red-500 active:scale-95 transition"
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};
