import React from 'react';
import { useUser } from '@/hooks/useUser';
import { Button, ButtonType, Input, InputType } from '@/components/UI';
import { User } from '@/icons';

export const EditProfileForm = () => {
  const { user, setUser } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    } as any);
  };

  return (
    <div className="w-full bg-violet-500 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Editar Perfil</h2>
      <form className="space-y-4">
        {/* imagen y inputs */}
        <div className="flex justify-between">
          {/* Inputs */}
          <div>
            <label htmlFor="username" className="flex text-md font-medium text-neutral-900 mb-2">
              Nombre de usuario
            </label>
            <Input
              type={InputType.Text}
              name="username"
              id="username"
              value={user?.username}
              onChange={handleChange}
              className="outline-0 rounded-md shadow-lg bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500 mb-3"
            />

            <label htmlFor="username" className="flex text-md font-medium text-neutral-900 mb-2">
              Alias
            </label>
            <Input
              type={InputType.Text}
              name="display_name"
              id="display_name"
              value={user?.display_name}
              onChange={handleChange}
              className="outline-0 w-4/5 rounded-md shadow-lg bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500"
            />
          </div>

          {/* Imagen   */}
          <div className="flex w-32 h-32 me-10 bg-violet-400 rounded-lg shadow-lg justify-center items-center">
            {user?.avatar_img ? (
              <img
                src={user.avatar_img}
                alt="User Image"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <User className="w-3/4 h-3/4 text-white" />
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="flex text-md font-medium text-neutral-900 mb-2">
            Correo Electrónico
          </label>
          <Input
            type={InputType.Email}
            name="email"
            id="email"
            value={user?.email}
            onChange={handleChange}
            className="outline-0 w-3/5 rounded-md shadow-lg bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="biografia" className="flex text-md font-medium text-neutral-900 mb-2">
            Biografía
          </label>
          <textarea
            name="biography"
            id="biography"
            rows={4}
            value={user?.biography}
            onChange={handleChange}
            className="outline-0 w-full rounded-md shadow-lg bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500"
          />
        </div>

        <div className="pt-4 flex justify-end">
          <Button
            type={ButtonType.Submit}
            textButton="Guardar Cambios"
            className="bg-violet-700 hover:bg-violet-800 hover:scale-105 transition-all ease-in-out duration-400 text-white font-bold py-2 px-4 rounded"
          />
        </div>
      </form>
    </div>
  );
};
