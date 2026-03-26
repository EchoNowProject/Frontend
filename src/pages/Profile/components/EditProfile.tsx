import React from 'react';
import { useUser } from '@/hooks/user/useUser';
import { User } from '@/icons';
import { phonePrefixes } from '@/hooks/user/data/phonePrefixes';
import { useNavigate } from 'react-router';

export const EditProfile = () => {
  const { user, setUser, saveUserState } = useUser();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUser((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: value.trim(),
      };
    });
  };

  return (
    <div className="w-full bg-violet-500 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Editar Perfil</h2>
      <div className="space-y-4">
        {/* imagen y inputs */}
        <div className="flex justify-between">
          {/* Inputs */}
          <div>
            {/* Username */}
            <label htmlFor="username" className="flex text-md font-medium text-white mb-2">
              Nombre de usuario <span className="text-red-400 ms-2">*</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={user?.username || ''}
              onChange={handleChange}
              className="outline-0 rounded-md shadow-lg bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500 mb-3"
            />

            {/* Display NAme */}
            <label htmlFor="display_name" className="flex text-md font-medium text-white mb-2">
              Alias
            </label>
            <input
              type="text"
              name="display_name"
              id="display_name"
              value={user?.display_name || ''}
              onChange={handleChange}
              className="outline-0 w-4/5 rounded-md shadow-lg bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500"
            />
          </div>

          {/* Imagen   */}
          <div className="flex w-40 h-40 me-10 bg-violet-400 rounded-lg shadow-lg justify-center items-center">
            {user?.file_avatar_image ? (
              <img
                src={`data:${user.file_avatar_image.mime_type};base64,${user.file_avatar_image.base64}`}
                alt="User Image"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <User className="w-3/4 h-3/4 text-white" />
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="flex text-md font-medium text-white mb-2">
            Correo Electrónico <span className="text-red-400 ms-2">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user?.email || ''}
            onChange={handleChange}
            className="outline-0 w-fit rounded-md shadow-lg text-neutral-300 bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500 cursor-not-allowed"
            disabled={true}
          />
        </div>

        {/* Biografia */}
        <div>
          <label htmlFor="biografia" className="flex text-md font-medium text-white mb-2">
            Biografía
          </label>
          <textarea
            name="biography"
            id="biography"
            rows={4}
            value={user?.biography || ''}
            onChange={handleChange}
            className="outline-0 w-full rounded-md shadow-lg bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500"
          />
        </div>

        {/* Numeros telefonicos */}

        <label htmlFor="phoneNumber" className="flex text-md font-medium text-white mb-2">
          Número de Teléfono
        </label>
        <input
          type="text"
          name="telephone_number"
          id="telephone_number"
          value={user?.telephone_number || ''}
          onChange={handleChange}
          className="outline-0 w-50 rounded-md shadow-lg text-white bg-violet-400 p-1 focus:border-violet-500 focus:ring-violet-500"
        />

        {/* Prefijo telefonico */}
        <div className="flex flex-col gap-2">
          <label htmlFor="prefix_telephone_number">Prefijo Telefónico</label>
          <select
            name="prefix_telephone_number"
            value={user?.prefix_telephone_number || ''}
            onChange={handleChange}
            className="outline-0 w-60 rounded-md shadow-lg text-white bg-violet-400 p-1"
          >
            <option value="">Asignar Prefijo</option>
            {phonePrefixes.map((item) => (
              <option key={item.code} value={item.prefix.replace('+', '')}>
                {item.flagEmoji} {item.name} {item.prefix}
              </option>
            ))}
          </select>
        </div>

        {/* Contraseña y Autenticación */}
        <h4 className="text-2xl mt-10">Contraseña y Autenticación</h4>
        <div>
          <button
            type="submit"
            className="bg-violet-400 hover:bg-violet-800 hover:border-2 hover:border-red-400 hover:scale-105 transition-all ease-in-out duration-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/home/profile/change-password')}
          >
            Cambiar contraseña
          </button>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="bg-violet-700 hover:bg-violet-800 hover:scale-105 transition-all ease-in-out duration-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => saveUserState()}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
