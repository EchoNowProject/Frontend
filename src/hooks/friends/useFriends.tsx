import {
  getFriends as getFriendsApi,
  deleteFriend as deleteFriendApi,
} from '@/api/Friends/FriendsApi';
import { FriendResponse } from '@/types';
import { useState } from 'react';
import { useLoading } from '../useLoading';
import { useToast } from '../useToast';

export const useFriends = () => {
  const [friends, setFriends] = useState<FriendResponse[]>();
  const { setShowLoading } = useLoading();
  const { initiateToast } = useToast();

  /**
   * Funcion que obtiene todos los amigos que tenemos en ese instante
   */
  const getFriends = async () => {
    setShowLoading(true);

    try {
      const friendsResponse = await getFriendsApi();
      setFriends(friendsResponse);
      console.log(friendsResponse[0].username);
      setShowLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Funcion que elimina un usuario determinado
   * @param friend
   */
  const deleteFriend = async (friend: FriendResponse) => {
    try {
      const message = await deleteFriendApi(friend);
      setFriends((friends) => friends?.filter((f) => f.id !== friend.id));
      initiateToast(message, true);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    friends,
    getFriends,
    deleteFriend,
  };
};
