import { Message } from '@/types';

export enum TypeConversation {
  IndividualChat = 'IndividualChat',
  Group = 'Group',
  Server = 'Server',
}

export type ChatLocationState = {
  typeConversation: TypeConversation;
  userTargetId: number;
};

export interface IndividualChatResponseWebsocket {
  message: Message;
  targetUser: number;
}
