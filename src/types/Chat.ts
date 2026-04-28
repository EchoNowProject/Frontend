export enum TypeConversation {
  IndividualChat = 'IndividualChat',
  Group = 'Group',
  Server = 'Server',
}

export type ChatLocationState = {
  typeConversation: TypeConversation;
  userTargetId: number;
};
