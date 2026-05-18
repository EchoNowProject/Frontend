import { useServer } from '@/hooks/useServer';
import { useServerSettings } from '@/hooks/useServerSettings';
import { Plus } from '@/icons';
import { Server } from '@/types';
import { useEffect } from 'react';

export const InviteUserServer = () => {
  const { users, inviteUser, getUsers } = useServerSettings();

  const { server } = useServer();

  useEffect(() => {
    if (server?.id) {
      getUsers(server.id);
    }
  }, [server?.id]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      {/* Header */}
      <div className="flex justify-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Invitar Amigos</h1>
      </div>

      {/* Invite Code */}
      <div className="w-full max-w-2xl mx-auto mb-8">
        <label className="block text-sm font-medium text-violet-300 mb-2">
          Código de invitación
        </label>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={server.invitation_code}
            readOnly
            className="w-full rounded-xl border border-violet-500/30 bg-black/20 px-4 py-3 text-neutral-300 outline-none focus:border-violet-400 transition-all"
          />

          <button
            onClick={() => navigator.clipboard.writeText(server.invitation_code)}
            className="px-5 py-3 rounded-xl bg-violet-500/20 hover:bg-violet-500/40 border border-violet-500/30 transition-all"
          >
            Copiar
          </button>
        </div>
      </div>

      {/* Empty state */}
      {!users?.length ? (
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
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-violet-500/20 hover:bg-violet-500/5 transition"
                  >
                    <td className="px-6 py-4 text-white wrap-break-word">{user.username}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-3">
                        <button
                          className="p-2 rounded-md bg-violet-500/20 hover:bg-violet-500/40 transition-all"
                          onClick={() => inviteUser(user.id)}
                        >
                          <Plus color="#fff" size={20} />
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
            {users.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center text-center w-full rounded-xl border border-violet-500/20 p-4 bg-black/10"
              >
                <p className="text-white text-xs wrap-break-word justify-center">{user.username}</p>

                <div className="flex justify-end gap-3">
                  <button
                    className="p-2 rounded-md bg-violet-500/20 hover:bg-violet-500/40 transition-all"
                    onClick={() => inviteUser(user.id)}
                  >
                    <Plus color="#fff" size={20} />
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
