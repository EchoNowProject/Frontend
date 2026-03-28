export interface FileImage {
  base64: string;
  mime_type?: string;
  name?: string;
}

export interface UpdateUserImageResponse {
  avatar_img: string;
  fileImage: FileImage;
}
