import { FileImage, RelationShipDefault } from './index';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  display_name: string;
  biography: string;
  telephone_number: string;
  prefix_telephone_number: string;
  avatar_img: string;
  verified: boolean;
  status: RelationShipDefault;
  plan: RelationShipDefault;
  created_at: string;
  updated_at: string;
  two_factor_secret: null;
  two_factor_recovery_codes: null;
  two_factor_confirmed_at: null;
  general_settings: GeneralSettings;
  file_avatar_image?: FileImage | null;
  notification_settings?: UserNotificationSettings;
  privacity_settings?: UserPrivacitySettings;
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

export interface GeneralSettings {
  user_id: number;
  theme: string;
  notifications_enable: boolean;
  sound_enable: boolean;
  volume: number;
  created_at: string;
  updated_at: string;
}

export interface UserPrivacitySettings {
  user_id: number;
  friend_request_permission: boolean;
  direct_message_permission: boolean;
  allow_search_by_email: boolean;
  allow_search_by_phone: boolean;
  show_online_status: boolean;
  show_activity: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserAlert {
  id: number;
  source_user_id: number;
  target_user_id: number;
  type: string;
  message: null;
  created_at: string;
  updated_at: string;
}
