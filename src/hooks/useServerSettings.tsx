import { getUsersAvailable, inviteUserServer } from '@/api/Servers/ServerSettings';
import { useState } from 'react';
import { useServer } from './useServer';
import { useLoading } from './useLoading';
import { FriendResponse } from '@/types';

export const useServerSettings = () => {
  const [users, setUser] = useState<FriendResponse[]>();
  const { server } = useServer();
  const { setShowLoading } = useLoading();

  const inviteUser = async (idFriend: number) => {
    try {
      await inviteUserServer(server.id, idFriend);
      setUser((savedfriends) => savedfriends?.filter((f) => f.id !== idFriend));
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async (idServer?: number) => {
    if (!idServer) return;

    setShowLoading(true);

    try {
      const users = await getUsersAvailable(idServer);
      console.log(users);

      setUser(users ?? ([] as FriendResponse[]));
      setShowLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { inviteUser, getUsers, users };
};
