import React, { useState } from 'react';
import { useFile } from '../utils/useFile';
import { useLoading } from '../useLoading';
import { FileData } from '@/types';

export const useToolBarChat = () => {
  //Variables
  const { getBase64 } = useFile();
  const { setShowLoading } = useLoading();
  const [openEmojiSelector, setOpenEmojiSelector] = useState<boolean>(false);

  /**
   * Funcion que abre el input de file y asigna que solo se recojan imagenes o todo tipo de ficheros
   * @param allowImage
   */
  const openFileInput = (allowImage: boolean = false) => {
    const fileInput = document.getElementById('file_chat') as HTMLInputElement | null;

    if (!fileInput) return;

    fileInput.accept = allowImage ? 'image/*, video/*' : '*';

    fileInput.click();
  };

  /**
   * Funcion que convierte cualquier archivo a base64
   * @param event
   */
  const uploadFiles = async (
    event: React.ChangeEvent<HTMLInputElement>,
    files: FileData[] | undefined,
    setFiles: React.Dispatch<React.SetStateAction<FileData[] | undefined>>
  ) => {
    setShowLoading(true);
    let existFile = false;

    try {
      const file = event.target.files?.[0];

      files?.forEach((exitingFile) => {
        if (exitingFile.name === file?.name) {
          existFile = true;
        }
      });

      if (!file || existFile) return;

      const base64 = await getBase64(file);
      setFiles((prev) => [...(prev || []), base64]);
      setShowLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setShowLoading(false);
    }
  };

  return { openFileInput, uploadFiles, openEmojiSelector, setOpenEmojiSelector };
};
