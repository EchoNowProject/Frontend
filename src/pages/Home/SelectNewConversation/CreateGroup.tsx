import { useFriends } from '@/hooks/friends/useFriends';
import { useEffect, useState } from 'react';
import { useChat } from '@/hooks/chat/useChat';
import { useNavigate } from 'react-router';
import { CheckCircle1 } from '@/icons';
import { Friend, FriendResponse, TypeConversation } from '@/types';
import { createConversationIfNeccesary } from '@/api/Chat/GroupsChatApi';

export const CreateGroup = () => {
  const { friends, getFriends } = useFriends();
  const [selectedFriendsId, setSelectedFriendsId] = useState<number[]>([]);
  const [groupName, setGroupName] = useState('');
  const { setOpenedChats } = useChat();
  const navigate = useNavigate();

  useEffect(() => {
    getFriends();
  }, []);

  const selectFriend = (id: number) => {
    setSelectedFriendsId((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  const handleCreateGroup = async () => {
    if (!groupName.trim() || selectedFriendsId.length <= 1) return;

    try {
      const conversation = await createConversationIfNeccesary(selectedFriendsId, groupName);

      setOpenedChats((prev) => [conversation, ...(prev || [])]);

      navigate('/home/chat', {
        state: {
          typeConversation: TypeConversation.Group,
          conversationId: conversation.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const TableForDesktop = ({ friends }: { friends: FriendResponse[] }) => {
    return (
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-violet-500/30">
        <table className="w-full text-sm">
          <thead className="bg-violet-500/10 text-violet-300 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Usuario</th>
              <th className="px-6 py-4 text-right">Seleccionar</th>
            </tr>
          </thead>

          <tbody>
            {friends.map((friend) => {
              const isSelected = selectedFriendsId.includes(friend.id);
              return (
                <tr
                  key={friend.id}
                  className={`border-t border-violet-500/20 hover:bg-violet-500/5 transition cursor-pointer ${isSelected ? 'bg-violet-500/10' : ''}`}
                  onClick={() => selectFriend(friend.id)}
                >
                  <td className="px-6 py-4 text-white wrap-break-word font-medium">
                    {friend.username}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <div
                        className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isSelected ? 'bg-violet-600 border-violet-600' : 'border-gray-500'}`}
                      >
                        {isSelected && <CheckCircle1 size={16} color="#fff" />}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const TableForMobile = ({ friends }: { friends: FriendResponse[] }) => {
    return (
      <div className="md:hidden flex flex-col gap-4">
        {friends.map((friend) => {
          const isSelected = selectedFriendsId.includes(friend.id);
          return (
            <div
              key={friend.id}
              onClick={() => selectFriend(friend.id)}
              className={`flex justify-between items-center text-center w-full rounded-xl border border-violet-500/20 p-4 transition cursor-pointer ${isSelected ? 'bg-violet-500/20' : 'bg-black/10'}`}
            >
              <p className="text-white text-sm wrap-break-word justify-center font-medium">
                {friend.username}
              </p>

              <div
                className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isSelected ? 'bg-violet-600 border-violet-600' : 'border-gray-500'}`}
              >
                {isSelected && <CheckCircle1 size={16} color="#fff" />}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8 flex flex-col gap-6 text-white">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Crear Nuevo Grupo</h1>
        <p className="text-gray-400 text-sm text-center">
          Selecciona a tus amigos y dale un nombre al grupo.
        </p>
      </div>

      {/* Input de Nombre de Grupo */}
      <div className="w-full max-w-md mx-auto">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Nombre del grupo..."
          className="w-full px-4 py-3 bg-neutral-900 border border-violet-500/30 rounded-xl outline-none focus:border-violet-500 transition-colors"
        />
      </div>

      {/* Empty state */}
      {!friends?.length ? (
        <section className="h-[40vh] flex items-center justify-center text-center text-gray-400">
          No tienes amigos disponibles para crear un grupo.
        </section>
      ) : (
        <section className="w-full max-w-4xl mx-auto flex flex-col gap-6">
          {/* TABLE (md+) */}
          <TableForDesktop friends={friends} />

          {/* MOBILE CARDS */}
          <TableForMobile friends={friends} />

          <div className="flex justify-center mt-4">
            <button
              onClick={handleCreateGroup}
              disabled={!groupName.trim() || selectedFriendsId.length <= 1}
              className="px-8 py-3 bg-violet-600 text-white rounded-xl font-bold active:scale-95 transition-transform disabled:opacity-50 disabled:active:scale-100"
            >
              Crear Grupo
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
