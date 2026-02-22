import React, { useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import { type UserNotificationSettings } from '@/types';
import { useUserNotificationsSettings } from '@/hooks/useUserNotificationsSettings';

export const EditNotifications: React.FC = () => {
  const { user, setUser } = useUser();
  const { getNotificationsSettings } = useUserNotificationsSettings();

  useEffect(() => {
    getNotificationsSettings();
  }, []);

  const notificationOptions: { key: keyof UserNotificationSettings; label: string }[] = [
    { key: 'email_notifications', label: 'Notificaciones por correo' },
    { key: 'push_notifications', label: 'Notificaciones Push' },
    { key: 'notify_friend_requests', label: 'Solicitudes de amistad' },
    { key: 'sound_enabled', label: 'Sonido habilitado' },
    { key: 'show_message_preview', label: 'Vista previa de mensajes' },
    { key: 'notify_direct_messages', label: 'Mensajes directos' },
    { key: 'notify_mentions', label: 'Menciones' },
  ];

  const handleToggle = (key: keyof UserNotificationSettings): void => {
    if (!user || !user.user_notification_settings) return;

    // Usamos una función de actualización para asegurar que trabajamos con el estado más reciente
    setUser({
      ...user,
      user_notification_settings: {
        ...(user.user_notification_settings || {}),
        [key]: !user.user_notification_settings?.[key],
      },
    });
  };

  return (
    <div className="w-full bg-violet-500 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Panel de Notificaciones</h2>

      <span className="text-sm font-medium text-white group-hover:text-white/90">
        Habilitar notificaciones
      </span>

      <h1>
        Meter la settigns del usuario que controle que todos los controles de notificaciones esta
        activados user_settings table{' '}
      </h1>

      <div className="space-y-6">
        <div className="pt-6 border-t border-violet-400/40">
          <h3 className="text-lg font-semibold text-violet-100 mb-4 tracking-tight">
            Preferencias del Sistema
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notificationOptions.map((option) => {
              const isChecked = !!user?.user_notification_settings?.[option.key];
              const inputId = `checkbox-${option.key}`;

              return (
                <label
                  key={option.key}
                  htmlFor={inputId}
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
                      onChange={() => handleToggle(option.key)}
                      disabled={!user}
                    />

                    {/* Track */}
                    <div
                      className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                        isChecked ? 'bg-violet-950' : 'bg-violet-300'
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
            onClick={() => alert('Hacer el guardado')}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
