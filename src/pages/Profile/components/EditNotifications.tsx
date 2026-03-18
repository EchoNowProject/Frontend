import React, { useEffect } from 'react';
import { useUser } from '@/hooks/user/useUser';
import { useUserNotificationsSettings } from '@/hooks/user/useUserNotificationsSettings';

export const EditNotifications = () => {
  const { user } = useUser();
  const {
    notificationOptions,
    getNotificationsSettings,
    updateGeneralNotification,
    updateOneNotification,
    saveNotificationsChanges,
    disableNotificationOptionsIfNeeded,
  } = useUserNotificationsSettings();

  useEffect(() => {
    getNotificationsSettings();
    disableNotificationOptionsIfNeeded();
  }, []);

  return (
    <div className="w-full bg-violet-500 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Panel de Notificaciones</h2>

      {/* Notificaciones generales */}
      <label className="flex items-center mb-6 gap-5 cursor-pointer">
        <span className="text-lg font-medium text-white group-hover:text-white/90">
          Habilitar notificaciones
        </span>

        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            className="sr-only cursor-pointer"
            checked={user?.general_settings?.notifications_enable ?? false}
            onChange={() =>
              updateGeneralNotification(!user?.general_settings?.notifications_enable)
            }
          />

          {/* Track */}
          <div
            className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${
              user?.general_settings?.notifications_enable ? 'bg-violet-950' : 'bg-violet-300'
            }`}
          />

          {/* Thumb */}
          <div
            className={`absolute left-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
              user?.general_settings?.notifications_enable ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </div>
      </label>

      <div className="space-y-6">
        <div className="pt-6 border-t border-violet-400/40">
          <h3 className="text-lg font-semibold text-violet-100 mb-4 tracking-tight">
            Preferencias del Sistema
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notificationOptions.map((option) => {
              const isChecked = !!user?.notification_settings?.[option.key];
              const isDisabled = option.disabled;
              const inputId = `checkbox-${option.key}`;

              return (
                <label
                  key={option.key}
                  className="flex items-center justify-between bg-violet-600/30 p-4 rounded-xl border border-violet-400/20 hover:bg-violet-600/50 transition-all cursor-pointer group"
                >
                  <span className="text-sm font-medium text-white group-hover:text-white/90">
                    {option.label}
                  </span>

                  <div className="relative inline-flex items-center">
                    <input
                      id={inputId}
                      type="checkbox"
                      className="sr-only"
                      checked={isChecked}
                      onChange={() => updateOneNotification(option.key)}
                      disabled={option.disabled}
                    />

                    {/* Track */}
                    <div
                      className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                        isDisabled
                          ? 'bg-neutral-950/50'
                          : isChecked
                            ? 'bg-violet-950'
                            : 'bg-violet-300'
                      }`}
                    />

                    {/* Thumb */}
                    <div
                      className={`absolute left-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                        isChecked ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button
            type="button"
            className="bg-white text-violet-700 hover:bg-violet-100 active:scale-95 transition-all duration-200 font-bold py-3 px-8 rounded-xl shadow-lg"
            onClick={() => saveNotificationsChanges()}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
