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
};

export interface IndividualChatResponseWebsocket {
  message: Message;
  targetUser: number;
}

export interface GroupChatResponseWebsocket {
  message: Message;
  conversationId: number;
}

import { IndividualChatConversationParticipant } from './IndividualChats/IndividualChatConversationParticipant';
import { GroupsChatConversation } from './GroupsChats/GroupsChatConversation';

export type SidebarChat = IndividualChatConversationParticipant | GroupsChatConversation;
