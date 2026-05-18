import {
  getFriends as getFriendsApi,
  deleteFriend as deleteFriendApi,
} from '@/api/Friends/FriendsApi';
import { FriendResponse, TypeConversation } from '@/types';
import { useState } from 'react';
import { useLoading } from '../useLoading';
import { useToast } from '../useToast';
import { createConversationIfNeccesary } from '@/api/Chat/IndividualChatApi';
import { useNavigate } from 'react-router';

export const useFriends = () => {
  const [friends, setFriends] = useState<FriendResponse[]>();
  const { setShowLoading } = useLoading();
  const { initiateToast } = useToast();
  const navigate = useNavigate();

  /**
   * Funcion que obtiene todos los amigos que tenemos en ese instante
   */
  const getFriends = async () => {
    setShowLoading(true);

    try {
      const friendsResponse = await getFriendsApi();
      setFriends(friendsResponse ?? ([] as FriendResponse[]));
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

  const navigateToIndividualChat = async (friendId: number) => {
    try {
      const conversation = await createConversationIfNeccesary(friendId);

      navigate('/home/chat', {
        state: {
          typeConversation: TypeConversation.IndividualChat,
          userTargetId: friendId,
          conversationId: conversation.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    friends,
    setFriends,
    getFriends,
    deleteFriend,
    navigateToIndividualChat,
  };
};
