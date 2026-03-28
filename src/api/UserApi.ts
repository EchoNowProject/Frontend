import { FileImage, User, UserNotificationSettings, UserPrivacitySettings } from '@/types';
import axios, { AxiosResponse, AxiosError } from '@/api/axios';
import { UpdateUserImageResponse } from '@/types/FileImage';

export const getUser = async (id: number): Promise<User> => {
  return axios
    .get(`/users/${id}`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const updateUser = async (user: User): Promise<User> => {
  return axios
    .put(`/user/update`, user)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
};

export const deleteUserImage = async (avatar_img: string): Promise<User> => {
  return axios
    .delete(`/user/delete-image?avatar_img=${avatar_img}`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const updateUserImage = async (fileImage: FileImage): Promise<UpdateUserImageResponse> => {
  return axios
    .put(`/user/update-image`, fileImage)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

/* ------------------------- Notification Settings ------------------------- */

export const getUserNotificationsSettings = async (): Promise<UserNotificationSettings> => {
  return axios
    .get(`/user-notifications-settings`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const saveUserNotificationsSettings = async (user: User): Promise<number> => {
  return axios
    .put(`/user-notifications-settings`, {
      general_settings: user.general_settings,
      notification_settings: user.notification_settings,
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

/* ------------------------- Privacity Settings ------------------------- */

export const getUserPrivacitySettings = async (): Promise<UserPrivacitySettings> => {
  return axios
    .get(`/user-privacity-settings`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const saveUserPrivacitySettings = async (user: User): Promise<number> => {
  return axios
    .put(`/user-privacity-settings`, {
      privacity_settings: user.privacity_settings,
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};
