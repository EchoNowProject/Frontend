import { getUserAlerts } from '@/api/alertsApi';
import { UserAlert } from '@/types';
import React, { useState } from 'react';

export const useAlerts = () => {
  const [userAlerts, setUserAlerts] = useState<UserAlert[]>();

  const getAlerts = async () => {
    try {
      let alerts = await getUserAlerts();
      setUserAlerts(alerts);
      console.log(alerts);
    } catch (error) {
      console.log(error);
    }
  };

  return { userAlerts, getAlerts };
};
