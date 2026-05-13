import { MainConversation } from './MainConversation';

export enum TypeServer {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface Server {
  id: number;
  name: string;
  description: string;
  avatar_img: string;
  owner_id: number;
  invitation_code: string;
  type_server: TypeServer;
  updated_at: string;
  created_at: string;
  audience: string; //no se usa
  main_conversation: MainConversation;
}
