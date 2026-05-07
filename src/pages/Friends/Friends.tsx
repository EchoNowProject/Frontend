import { useFriends } from '@/hooks/friends/useFriends';
import { Message3Text, Trash } from '@/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Friends = () => {
  const { friends, getFriends, deleteFriend, navigateToIndividualChat } = useFriends();

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      {/* Header */}
      <div className="flex justify-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Mis Amigos</h1>
      </div>

      {/* Empty state */}
      {!friends?.length ? (
        <section className="h-[60vh] flex items-center justify-center text-center text-gray-400">
          No se han encontrado amigos
        </section>
      ) : (
        <section className="w-full">
          {/* TABLE (md+) */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-violet-500/30">
            <table className="w-full text-sm">
              <thead className="bg-violet-500/10 text-violet-300 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 text-left">Usuario</th>
                  <th className="px-6 py-4 text-right">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {friends.map((friend) => (
                  <tr
                    key={friend.id}
                    className="border-t border-violet-500/20 hover:bg-violet-500/5 transition"
                  >
                    <td className="px-6 py-4 text-white wrap-break-word">{friend.username}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-3">
                        <button
                          className="p-2 rounded-md bg-violet-500/20 hover:bg-violet-500/40 transition"
                          onClick={() => navigateToIndividualChat(friend.id)}
                        >
                          <Message3Text color="#fff" size={20} />
                        </button>

                        <button
                          className="p-2 rounded-md bg-red-500/20 hover:bg-red-500/40 transition"
                          onClick={() => deleteFriend(friend)}
                        >
                          <Trash color="#fff" size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARDS */}
          <div className="md:hidden flex flex-col gap-4">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex justify-between items-center text-center w-full rounded-xl border border-violet-500/20 p-4 bg-black/10"
              >
                <p className="text-white text-xs wrap-break-word justify-center ">
                  {friend.username}
                </p>

                <div className="flex justify-end gap-3">
                  <button
                    className="p-3 rounded-md bg-violet-500/20 active:scale-95 transition"
                    onClick={() => navigateToIndividualChat(friend.id)}
                  >
                    <Message3Text color="#fff" size={20} />
                  </button>

                  <button
                    className="p-3 rounded-md bg-red-500/20 active:scale-95 transition"
                    onClick={() => deleteFriend(friend)}
                  >
                    <Trash color="#fff" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
