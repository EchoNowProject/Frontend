import EmojiPicker, { Theme } from 'emoji-picker-react';

interface EmojiSelectorProps {
  open: boolean;
  onEmojiClick: (emoji: string) => void;
}

export const EmojiSelector = ({ open, onEmojiClick }: EmojiSelectorProps) => {
  return (
    <div className="absolute bottom-14 right-4 z-50">
      <EmojiPicker
        open={open}
        theme={Theme.DARK}
        onEmojiClick={(emojiObject) => onEmojiClick(emojiObject.emoji)}
      />
    </div>
  );
};
