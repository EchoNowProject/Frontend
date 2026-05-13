import { ServerChatConversation, Message } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

interface GetMessageResponse {
  messages: Message[];
  conversation: ServerChatConversation;
}

/* export const getGroupChats = async (): Promise<ServerChatConversation[]> => {
  return axios
    .get('/groups-chat/get-chats')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
}; */

export const getServerChatMessagesApi = async (
  conversationId: number,
  serverId: number
): Promise<GetMessageResponse> => {
  return axios
    .get('/server-chat/get-messages', {
      params: {
        conversation_id: conversationId,
        server_id: serverId,
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
): Promise<ServerChatConversation> => {
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
