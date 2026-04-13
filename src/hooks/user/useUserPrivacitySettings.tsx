import { useState } from 'react';
import { useUser } from './useUser';
import { useToast } from '@/hooks/useToast';
import { UserPrivacitySettings } from '@/types';
import { getUserPrivacitySettings, saveUserPrivacitySettings } from '@/api/User/UserApi';

export const useUserPrivacitySettings = () => {
  const { user, setUser } = useUser();
  const { initiateToast } = useToast();

  const [privacityOptions, setPrivacityOptions] = useState<
    {
      key: keyof UserPrivacitySettings;
      label: string;
      disabled: boolean;
    }[]
  >([
    { key: 'friend_request_permission', label: 'Permitir solicitudes de amistad', disabled: false },
    { key: 'direct_message_permission', label: 'Permitir mensajes directos', disabled: false },
    {
      key: 'allow_search_by_email',
      label: 'Permitir búsqueda por correo electrónico',
      disabled: false,
    },
    { key: 'allow_search_by_phone', label: 'Permitir búsqueda por teléfono', disabled: false },
    { key: 'show_online_status', label: 'Mostrar estado en línea', disabled: false },
    { key: 'show_activity', label: 'Mostrar actividad', disabled: false },
  ]);

  // Obtiene las configuraciones de privacidad de un usuario
  const getPrivacitySettings = async () => {
    const data = await getUserPrivacitySettings();

    setUser((userPrev) => (userPrev ? { ...userPrev, privacity_settings: data } : userPrev));
  };

  // Cambia el valor de un cambia determinado a true o a false
  const updateOnePrivacitySetting = (option: keyof UserPrivacitySettings) => {
    if (!user || !user.privacity_settings) return;
    setUser({
      ...user,
      privacity_settings: {
        ...user.privacity_settings,
        [option]: !user.privacity_settings?.[option],
      },
    });
  };

  // Guarda los cambios realizados de los ajustes de privacidad para ese usuario
  const savePrivacityChanges = async () => {
    try {
      if (user && user.privacity_settings) {
        await saveUserPrivacitySettings(user);
        initiateToast('¡Actualización Exitosa!', true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    privacityOptions,
    getPrivacitySettings,
    updateOnePrivacitySetting,
    savePrivacityChanges,
  };
};
