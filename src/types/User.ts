import { FileImage, RelationShipDefault } from './index';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  display_name: string;
  biography: string;
  avatar_img: null;
  verified: boolean;
  status: RelationShipDefault;
  plan: RelationShipDefault;
  created_at: string;
  updated_at: string;
  two_factor_secret: null;
  two_factor_recovery_codes: null;
  two_factor_confirmed_at: null;
  file_avatar_image?: FileImage | null;
  notification_settings?: UserNotificationSettings;
}

export interface UserNotificationSettings {
  user_id: number;
  email_notifications: boolean;
  push_notifications: boolean;
  notify_friend_requests: boolean;
  sound_enabled: boolean;
  show_message_preview: boolean;
  notify_direct_messages: boolean;
  notify_mentions: boolean;
  created_at: string;
  updated_at: string;
}
