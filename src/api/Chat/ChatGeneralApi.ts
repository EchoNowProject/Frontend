import { FileData, Message, TypeConversation } from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

export const sendMessageApi = async (
  conversationId: number,
  typeConversation: TypeConversation,
  message?: string,
  files?: FileData[]
): Promise<Message> => {
  let urlMessage = null;

  switch (typeConversation) {
    case TypeConversation.IndividualChat:
      urlMessage = '/individual-chat/send-message';
      break;
    case TypeConversation.Group:
      urlMessage = '/group-chat/send-message';
      break;
  }

  if (!urlMessage) throw Error('Error al enviar el mensaje, ruta no indicada');

  return axios
    .post(urlMessage, {
      data: {
        message: message ?? null,
        conversationId: conversationId,
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
