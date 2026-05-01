import { LocationArrowRight, PaperClip1, Photos, EmojiSmileSunglass, Plus } from '@/icons';

interface ToolBarChatProps {
  idFriend: number;
  message: string | undefined;
  setMessage: (msg: string) => void;
  sendMessageToolbar: (id: number) => void;
}

export const ToolBarChat = ({
  idFriend,
  message,
  setMessage,
  sendMessageToolbar,
}: ToolBarChatProps) => {
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

      <input type="file" id="file_chat" className="hidden" />
    </div>
  );
};
