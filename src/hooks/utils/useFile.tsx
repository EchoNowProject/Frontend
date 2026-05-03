import { useLoading } from '../useLoading';

export const useFile = () => {
  const { setShowLoading } = useLoading();

  // Source - https://stackoverflow.com/q/47176280
  // Posted by Boky, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-05-01, License - CC BY-SA 3.0
  const getBase64 = async (file: File): Promise<string> => {
    setShowLoading(true);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        setShowLoading(false);
        resolve(reader.result as string);
      };

      reader.onerror = (error) => {
        reject(error);
      };
      setShowLoading(false);
    });
  };

  return { getBase64 };
};
