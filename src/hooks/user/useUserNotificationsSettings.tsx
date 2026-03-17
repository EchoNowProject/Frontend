import React, { useState } from 'react';
import { useUser } from './useUser';
import { getUserNotificationsSettings, saveUserNotificationsSettings } from '@/api/UserApi';
import { UserNotificationSettings } from '@/types';
import { useToast } from '@/hooks/useToast';

export const useUserNotificationsSettings = () => {
  const { user, setUser } = useUser();
  const { initiateToast } = useToast();

  const [notificationOptions, setNotificationOptions] = useState<
    {
      key: keyof UserNotificationSettings;
      label: string;
      disabled: boolean;
    }[]
  >([
    { key: 'email_notifications', label: 'Notificaciones por correo', disabled: false },
    { key: 'push_notifications', label: 'Notificaciones Push', disabled: false },
    { key: 'notify_friend_requests', label: 'Solicitudes de amistad', disabled: false },
    { key: 'sound_enabled', label: 'Sonido habilitado', disabled: false },
    { key: 'show_message_preview', label: 'Vista previa de mensajes', disabled: false },
    { key: 'notify_direct_messages', label: 'Mensajes directos', disabled: false },
    { key: 'notify_mentions', label: 'Menciones', disabled: false },
  ]);

  const getNotificationsSettings = async () => {
    try {
      let data = await getUserNotificationsSettings();

      setUser((prev) => (prev ? { ...prev, notification_settings: data } : prev));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  /* Funcion para actualizar el toggle de la notificacion de los ajustes generales */
  const updateGeneralNotification = (changeState: boolean) => {
    if (!user) return;

    setUser({
      ...user,
      general_settings: {
        ...user.general_settings,
        notifications_enable: changeState,
      },
    });

    notificationOptions.forEach((option) => {
      if (user.general_settings.notifications_enable) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  };

  /* Funciton para actualizar una notificacion individual */
  const updateOneNotification = (key: keyof UserNotificationSettings): void => {
    if (!user || !user.notification_settings) return;

    // Usamos una función de actualización para asegurar que trabajamos con el estado más reciente
    setUser({
      ...user,
      notification_settings: {
        ...user.notification_settings,
        [key]: !user.notification_settings?.[key],
      },
    });
  };

  const saveNotificationsChanges = async () => {
    try {
      if (user && user.notification_settings) {
        await saveUserNotificationsSettings(user);
        initiateToast('¡Actualización Exitosa!', true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disableNotificationOptionsIfNeeded = () => {
    if (!user?.general_settings.notifications_enable) {
      notificationOptions.forEach((option) => {
        option.disabled = true;
      });
    }
  };

  return {
    notificationOptions,
    getNotificationsSettings,
    updateGeneralNotification,
    updateOneNotification,
    saveNotificationsChanges,
    disableNotificationOptionsIfNeeded,
  };
};
