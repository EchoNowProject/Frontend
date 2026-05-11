import { GroupsChatConversation, Message } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

export const getGroupChats = async (): Promise<GroupsChatConversation[]> => {
  return axios
    .get('/groups-chat/get-chats')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getGroupChatMessagesApi = async (conversationId: number): Promise<Message[]> => {
  return axios
    .get('/groups-chat/get-messages', {
      params: {
        conversation_id: conversationId,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const createConversationIfNeccesary = async (
  friendsIds: number[],
  groupName: string
): Promise<GroupsChatConversation> => {
  return axios
    .post('/groups-chat/create-conversation', {
      data: {
        friendsIds: friendsIds,
        groupName: groupName,
      },
    })
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
