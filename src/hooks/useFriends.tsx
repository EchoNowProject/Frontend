import { getFriends as getFriendsApi } from '@/api/Friends/FriendsApi';
import { Friend } from '@/types';
import { useState } from 'react';
import { useLoading } from './useLoading';

export const useFriends = () => {
  const [friends, setFriends] = useState<Friend[]>();
  const { setShowLoading } = useLoading();

  const getFriends = async () => {
    setShowLoading(true);

    try {
      let friendsResponse = await getFriendsApi();
      setFriends(friendsResponse);
      setShowLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    friends,
    getFriends,
  };
};
