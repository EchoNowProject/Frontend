export interface Message {
  id: number;
  conversation_id: number;
  user_sender_id: number;
  user_sender_name: string;
  content: string;
  type_msg: number;
  has_file: boolean;
  read_by: Object;
  created_at: string;
  updated_at: string;
  shipping_time: string; // Atribute
  files_message: FilesMessage[];
}

export interface FilesMessage {
  id: number;
  message_id: number;
  file_name: string;
  path_file: string;
}
