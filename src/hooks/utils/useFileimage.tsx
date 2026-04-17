import { FileImage } from '@/types';

export const useFileImage = () => {
  /**
   * Funcion que se le pasa un fichero (input) y lo convierte en Base64
   */
  const convertToBase64 = (file: File): Promise<FileImage> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convierte la imagen
      reader.onload = () => {
        const newFile: FileImage = {
          base64: reader.result as string,
          name: file.name,
        };
        resolve(newFile);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return { convertToBase64 };
};
