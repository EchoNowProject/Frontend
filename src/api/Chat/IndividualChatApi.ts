import { ConversationParticipant, Message } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

interface GetMessageResponse {
  messages: Message[];
  userInvolved: ConversationParticipant;
}

export const sendMessageApi = async (
  friendId: number,
  message?: string,
  base64files?: string[]
): Promise<Message> => {
  return axios
    .post('/individual-chat/send-message', {
      data: {
        message: message ?? null,
        friendId: friendId,
        files: base64files ?? null,
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
