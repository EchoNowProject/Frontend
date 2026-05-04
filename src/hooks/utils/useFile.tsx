import { FileData, FilesMessage } from '@/types';
import { useLoading } from '../useLoading';
import { downloadFile } from '@/api/HelperApi';

export const useFile = () => {
  const { setShowLoading } = useLoading();

  // Source - https://stackoverflow.com/q/47176280
  // Posted by Boky, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-05-01, License - CC BY-SA 3.0
  const getBase64 = async (file: File): Promise<FileData> => {
    setShowLoading(true);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        setShowLoading(false);
        resolve({
          name: file.name,
          base64: reader.result as string,
        });
      };

      reader.onerror = (error) => {
        reject(error);
      };
      setShowLoading(false);
    });
  };

  //https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
  const base64toBlob = (b64Data: string, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const donwloadMessageFile = async (pathFile: string) => {
    try {
      let base64 = await downloadFile(pathFile);
      // El backend de Laravel devuelve un string en base64 crudo (sin data:image/png;base64,)
      const blob = base64toBlob(base64);

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      // Extraemos el nombre del archivo de la ruta, o asignamos uno por defecto
      a.download = pathFile.split('/').pop() || 'archivo_descargado'; 
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return { getBase64, donwloadMessageFile };
};
