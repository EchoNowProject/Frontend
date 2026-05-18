import { Message } from '@/types';

export enum TypeConversation {
  IndividualChat = 'IndividualChat',
  Group = 'Group',
  Server = 'Server',
}

export type ChatLocationState = {
  typeConversation: TypeConversation;
  userTargetId: number;
  conversationId?: number;
  serverId?: number;
};

export interface IndividualChatResponseWebsocket {
  message: Message;
  targetUser: number;
}

export interface GroupChatResponseWebsocket {
  message: Message;
  conversationId: number;
}

export interface ServerChatResponseWebsocket {
  message: Message;
  idServer: number;
  idConversation: number;
}

import { IndividualChatConversationParticipant } from './IndividualChats/IndividualChatConversationParticipant';
import { GroupsChatConversation } from './GroupsChats/GroupsChatConversation';

export type SidebarChat = IndividualChatConversationParticipant | GroupsChatConversation;
