import { LocationArrowRight, PaperClip1, Photos, EmojiSmileSunglass, Plus } from '@/icons';
import { useFile } from '@/hooks/utils/useFile';
import { useLoading } from '@/hooks/useLoading';
import { FileData } from '@/types';

interface ToolBarChatProps {
  idFriend: number;
  message: string | undefined;
  files: FileData[] | undefined;
  setMessage: (msg: string) => void;
  setFiles: React.Dispatch<React.SetStateAction<FileData[] | undefined>>;
  sendMessageToolbar: (id: number) => void;
}

export const ToolBarChat = ({
  idFriend,
  message,
  setMessage,
  files,
  setFiles,
  sendMessageToolbar,
}: ToolBarChatProps) => {
  //Variables
  const { getBase64 } = useFile();
  const { setShowLoading } = useLoading();

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
  const uploadFiles = async (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="flex items-center justify-between w-full">
      <form
        className="flex items-center gap-2 flex-1"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessageToolbar(idFriend);
        }}
      >
        <input
          type="text"
          placeholder="Enviar Mensaje"
          value={message}
          className="bg-neutral-800 rounded-lg p-2 flex-1 focus:outline-none"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="flex justify-center items-center bg-neutral-800 p-1 rounded-lg"
        >
          <LocationArrowRight size={23} />
        </button>
      </form>

      <div className="hidden lg:flex md:flex justify-between gap-4 mx-4">
        {/* Para todo tipo de ficheros */}
        <button
          className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg hover:scale-110 transition-all ease-in-out"
          onClick={() => openFileInput()}
        >
          <PaperClip1 size={23} />
        </button>

        {/* Para ficheros multimedia */}
        <button
          className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg hover:scale-110 transition-all ease-in-out"
          onClick={() => openFileInput(true)}
        >
          <Photos size={23} />
        </button>

        {/* para emoticonos */}
        <button className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg hover:scale-110 transition-all ease-in-out">
          <EmojiSmileSunglass size={23} />
        </button>
      </div>

      {/* para movil */}
      <div className="sm:flex md:hidden lg:hidden mx-4">
        <button className="flex justify-center items-center bg-neutral-800 p-1 rounded-lg">
          <Plus size={23} />
        </button>
      </div>

      <input type="file" id="file_chat" className="hidden" onChange={(e) => uploadFiles(e)} />
    </div>
  );
};
