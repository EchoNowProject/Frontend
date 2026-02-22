import React from 'react';
import { useUser } from './useUser';
import { getUserNotificationsSettings } from '@/api/UserApi';

export const useUserNotificationsSettings = () => {
  const { user, setUser } = useUser();

  const getNotificationsSettings = async () => {
    try {
      let data = await getUserNotificationsSettings();

      setUser((prev) => (prev ? { ...prev, notification_settings: data } : prev));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getNotificationsSettings };
};
