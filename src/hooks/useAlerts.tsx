import { getUserAlerts } from '@/api/AlertsApi';
import { addNewFriend } from '@/api/Friends/FriendsApi';
import { UserAlert } from '@/types';
import React, { useState } from 'react';
import { useToast } from './useToast';
import { useLoading } from './useLoading';

export const useAlerts = () => {
  const [userAlerts, setUserAlerts] = useState<UserAlert[]>();
  const { initiateToast } = useToast();
  const { setShowLoading } = useLoading();

  /**
   * Funcion que recoge las alertas de un usuario
   */
  const getAlerts = async () => {
    setShowLoading(true);
    try {
      let alerts = await getUserAlerts();
      setUserAlerts(alerts);
      setShowLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Function que añade un nuevo usuario a tu lista de amigos
   * @param userAlert
   */
  const acceptFriendRequest = async (userAlert: UserAlert) => {
    try {
      let msg = await addNewFriend(userAlert.id);
      setUserAlerts((prevUserAlerts) => prevUserAlerts?.filter((user) => user.id !== userAlert.id));
      initiateToast(msg, true);
    } catch (error) {
      console.log(error);
    }
  };

  const declineFriendRequest = async (userAlert: UserAlert) => {
    try {
      let data; // Await ...
    } catch (error) {
      console.log(error);
    }
  };

  return { userAlerts, getAlerts, acceptFriendRequest, declineFriendRequest };
};
