import { LocationArrowRight, PaperClip1, Photos, EmojiSmileSunglass, Plus } from '@/icons';

interface ToolBarChatProps {
  idFriend: number;
  message: string | undefined;
  setMessage: (msg: string) => void;
  sendMessageToolbar: (id: number) => void;
}

export const ToolBarChat = ({ idFriend, message, setMessage, sendMessageToolbar }: ToolBarChatProps) => {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessageToolbar(idFriend);
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 flex-1">
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
        </div>

        <div className="hidden lg:flex md:flex justify-between gap-4 mx-4">
          <button className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg">
            <PaperClip1 size={23} />
          </button>

          <button className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg">
            <Photos size={23} />
          </button>

          <button className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg">
            <EmojiSmileSunglass size={23} />
          </button>
        </div>

        <div className="sm:flex md:hidden lg:hidden mx-4">
          <button className="flex justify-center items-center bg-neutral-800 p-1 rounded-lg">
            <Plus size={23} />
          </button>
        </div>
      </div>
    </form>
  );
};
