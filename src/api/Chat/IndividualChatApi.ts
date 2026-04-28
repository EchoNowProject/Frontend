import { ConversationParticipant, Message } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

interface GetMessageResponse {
  messages: Message[];
  userInvolved: ConversationParticipant;
}

export const sendMessageApi = async (message: string, friendId: number): Promise<Message> => {
  return axios
    .post('/individual-chat/send-message', {
      data: {
        message: message,
        friendId: friendId,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getMessagesApi = async (): Promise<GetMessageResponse> => {
  return axios
    .get('/individual-chat/get-messages')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
