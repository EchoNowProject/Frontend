import { FileData, Message, TypeConversation } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

export const sendMessageApi = async (
  conversationId: number,
  typeConversation: TypeConversation,
  serverId?: number,
  message?: string,
  files?: FileData[]
): Promise<Message> => {
  return axios
    .post('general-chat/send-message', {
      data: {
        conversationId: conversationId,
        typeConversation: typeConversation,
        serverId: serverId,
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
