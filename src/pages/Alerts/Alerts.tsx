import { useAlerts } from '@/hooks/useAlerts';
import { Xmark } from '@/icons';
import React, { useEffect } from 'react';

export const Alerts = () => {
  const { userAlerts, getAlerts } = useAlerts();

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className="text-3xl font-bold">Mis Notificaciones</h1>
      </div>

      <div className="p-5 mx-10 rounded-2xl border-2 border-violet-500">
        <table className="w-full table-fixed text-sm border-collapse">
          {userAlerts && userAlerts.length !== 0 && (
            <thead className="bg-violet-500/10 text-violet-300 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 w-3/4 text-start">Mensaje</th>
                <th className="px-6 py-3 w-1/4 text-right">Acción</th>
              </tr>
            </thead>
          )}

          <tbody>
            {(!userAlerts || userAlerts.length === 0) && (
              <tr>
                <td colSpan={2} className="px-6 py-6 text-center text-gray-400 italic">
                  No hay notificaciones
                </td>
              </tr>
            )}

            {userAlerts?.map((alert, index) => (
              <tr key={index} className="border-t border-violet-500/20 align-top">
                <td className="px-6 py-3 w-3/4 text-start text-white wrap-break-word">
                  {alert.message}
                </td>

                <td className="px-6 py-3 w-1/4 text-right">
                  <div className="flex gap-3 justify-end flex-wrap">
                    <button className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-800 text-xs font-semibold">
                      Aceptar
                    </button>
                    <button className="px-2 rounded-lg bg-red-500">
                      <Xmark size={20} color="#fff" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
