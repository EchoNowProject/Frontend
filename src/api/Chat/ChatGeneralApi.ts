import { FileData, Message, TypeConversation } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

export const sendMessageApi = async (
  conversationId: number,
  typeConversation: TypeConversation,
  message?: string,
  files?: FileData[]
): Promise<Message> => {
  return axios
    .post('general-chat/send-message', {
      data: {
        conversationId: conversationId,
        typeConversation: typeConversation,
        message: message ?? null,
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
