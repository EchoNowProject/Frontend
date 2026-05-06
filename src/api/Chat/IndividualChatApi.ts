import { ConversationParticipant, FileData, Message } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

interface GetMessageResponse {
  messages: Message[];
  userInvolved: ConversationParticipant;
}

export const getIntividualChats = async (): Promise<ConversationParticipant[]> => {
  return axios
    .get('/individual-chat/get-chats')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const sendMessageApi = async (
  friendId: number,
  message?: string,
  files?: FileData[]
): Promise<Message> => {
  return axios
    .post('/individual-chat/send-message', {
      data: {
        message: message ?? null,
        friendId: friendId,
        files: files ?? null,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getMessagesApi = async (userTarget: number): Promise<GetMessageResponse> => {
  return axios
    .get('/individual-chat/get-messages', {
      params: {
        userTarget: userTarget,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
