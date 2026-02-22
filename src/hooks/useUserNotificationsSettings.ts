import React from 'react';
import { useUser } from './useUser';
import { getUserNotificationsSettings } from '@/api/UserApi';
import { User } from '@/types';

export const useUserNotificationsSettings = () => {
  const { user, setUser } = useUser();

  const getNotificationsSettings = async () => {
    try {
      let data = await getUserNotificationsSettings();

      setUser((prev) => (prev ? { ...prev, user_notification_settings: data } : prev));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getNotificationsSettings };
};
