import { User as UserIcon, Server, UserMultiple4, LocationArrowRight, Search } from '@/icons';
import { useNavigate } from 'react-router';
import { useFriendRequest } from '@/hooks/friends/useFriendRequest';

export const SelectNewConversation = () => {
  const navigate = useNavigate();
  const { users, searchUsers, handleInputSearch, sendFriendRequestButton } = useFriendRequest();

  const UsersFound = () => {
    if (!users) return null;

    return (
      <div>
        {users.length === 0 ? (
          <div className="py-10 text-center text-gray-400 italic">No se encontraron usuarios</div>
        ) : (
          <>
            {/* MOBILE */}
            <div className="flex flex-col gap-4 md:hidden max-h-[60vh] overflow-y-auto pr-1">
              {users.map((user) => (
                <div
                  key={user.username}
                  className="w-full flex justify-between items-center rounded-xl border border-violet-500/20 bg-[#1f1f1f] p-4"
                >
                  <span className="text-white font-medium wrap-break-word">{user.username}</span>

                  <button
                    onClick={() => sendFriendRequestButton(user.id)}
                    className="px-3 py-2 rounded-lg bg-violet-600 text-xs font-semibold active:scale-95 transition"
                  >
                    Añadir
                  </button>
                </div>
              ))}
            </div>

            {/* DESKTOP / TABLET */}
            <div className="hidden md:block max-h-[60vh] overflow-auto rounded-xl border border-violet-500/20">
              <table className="w-full text-sm min-w-[500px]">
                <thead className="top-0 z-10 bg-violet-500/10 text-violet-300 uppercase text-xs backdrop-blur">
                  <tr>
                    <th className="px-6 py-4 text-left">Usuarios</th>
                    <th className="px-6 py-4 text-right">Acción</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.username}
                      className="border-t border-violet-500/20 hover:bg-violet-500/5 transition"
                    >
                      <td className="px-6 py-4 text-white wrap-break-word">{user.username}</td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => sendFriendRequestButton(user.id)}
                          className="px-4 py-2 rounded-lg bg-violet-600 text-xs font-semibold hover:bg-violet-500 transition active:scale-95"
                        >
                          Solicitar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 text-white">
      {/* 🔍 Buscador */}
      <form
        className="relative w-full"
        onSubmit={(e) => {
          e.preventDefault();
          searchUsers();
        }}
      >
        <input
          type="text"
          className="h-11 w-full pl-12 pr-12 border-2 border-violet-500 rounded-xl outline-none bg-transparent"
          placeholder="Buscar usuario"
          onChange={(e) => handleInputSearch(e)}
        />

        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500">
          <Search size={22} />
        </span>

        <button className="absolute right-3 top-1/2 -translate-y-1/2" type="submit">
          <LocationArrowRight size={22} />
        </button>
      </form>

      <UsersFound />

      {/* 🧩 Opciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* Card */}
        <section className="bg-[#2b2b2b] border border-violet-500 rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-4">
          <div className="bg-violet-500/10 p-3 rounded-full w-fit">
            <UserIcon size={32} color="#fff" />
          </div>

          <h2 className="text-lg md:text-xl font-bold">Chat Privado</h2>

          <p className="text-gray-400 text-sm">Conversa directamente con un amigo.</p>

          <button
            className="mt-auto w-full py-3 bg-violet-600 rounded-xl font-semibold active:scale-95"
            onClick={() => {
              navigate('/home/friends');
            }}
          >
            Enviar Mensaje
          </button>
        </section>

        {/* Card */}
        <section className="bg-[#2b2b2b] border border-violet-500 rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-4">
          <div className="bg-violet-500/10 p-3 rounded-full w-fit">
            <UserMultiple4 size={32} color="#fff" />
          </div>

          <h2 className="text-lg md:text-xl font-bold">Nuevo Grupo</h2>

          <p className="text-gray-400 text-sm">Crea grupos pequeños fácilmente.</p>

          <button
            className="mt-auto w-full py-3 bg-violet-600 rounded-xl font-semibold active:scale-95"
            onClick={() => navigate('/home/group/new')}
          >
            Crear Grupo
          </button>
        </section>

        {/* Card */}
        <section className="bg-[#2b2b2b] border border-violet-500 rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-4">
          <div className="bg-violet-500/10 p-3 rounded-full w-fit">
            <Server size={32} color="#fff" />
          </div>

          <h2 className="text-lg md:text-xl font-bold">Servidor</h2>

          <p className="text-gray-400 text-sm">Crea tu comunidad con canales.</p>

          <button
            className="mt-auto w-full py-3 bg-violet-600 rounded-xl font-semibold active:scale-95"
            onClick={() => navigate('/home/server/new')}
          >
            Crear
          </button>
        </section>
      </div>
    </div>
  );
};
