import axios, { AxiosError, AxiosResponse } from '../axios';

/* interface GetMessageResponse {
  messages: Message[];
  userInvolved: ConversationParticipant;
} */

/* export const getIntividualChats = async (): Promise<ConversationParticipant[]> => {
  return axios
    .get('/individual-chat/get-chats')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
 */

export const createConversationIfNeccesary = async (
  friendsIds: number[],
  groupName: string
): Promise<void> => {
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
