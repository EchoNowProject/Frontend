import React from 'react';
import { User as UserIcon, Server, UserMultiple4, LocationArrowRight, Search } from '@/icons';
import { useNavigate } from 'react-router';
import { useFriendRequest } from '@/hooks/useFriendRequest';

export const SelectNewConversation = () => {
  const navigate = useNavigate();
  const { users, searchUsers, handleInputSearch, sendFriendRequestButton } = useFriendRequest();

  const UsersFound = () => {
    if (!users) return null;

    return (
      <div className="mt-4 rounded-2xl border border-violet-500 bg-[#2b2b2b] shadow-2xl p-3">
        {/* 📱 MOBILE: Cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {users.length === 0 ? (
            <p className="text-center text-gray-400 italic py-4">No se encontraron usuarios</p>
          ) : (
            users.map((user) => (
              <div
                key={user.username}
                className="flex justify-between items-center bg-[#1f1f1f] p-3 rounded-xl"
              >
                <span className="text-white font-medium">{user.username}</span>

                <button
                  onClick={() => sendFriendRequestButton(user.id)}
                  className="px-3 py-2 rounded-lg bg-violet-600 text-xs font-semibold active:scale-95"
                >
                  Añadir
                </button>
              </div>
            ))
          )}
        </div>

        {/* 💻 DESKTOP: Tabla */}
        <div className="hidden md:block max-h-80 overflow-y-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-violet-500/10 text-violet-300 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Usuarios</th>
                <th className="px-6 py-3 text-right">Acción</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={2} className="px-6 py-6 text-center text-gray-400 italic">
                    No se encontraron usuarios
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.username} className="border-t border-violet-500/20">
                    <td className="px-6 py-4 text-white">{user.username}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => sendFriendRequestButton(user.id)}
                        className="px-4 py-2 rounded-lg bg-violet-600 text-xs font-semibold"
                      >
                        Solicitud
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
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

          <button className="mt-auto w-full py-3 bg-violet-600 rounded-xl font-semibold active:scale-95">
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

          <button className="mt-auto w-full py-3 bg-violet-600 rounded-xl font-semibold active:scale-95">
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
