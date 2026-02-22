import React, { useState } from 'react';
import { EditProfileForm } from './components/EditProfile';
import { EditNotifications } from './components/EditNotifications';

interface ProfileSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileSidebar = ({ activeTab, setActiveTab }: ProfileSidebarProps) => {
  const menuItems = [
    { id: 'edit-profile', label: 'Editar Perfil' },
    { id: 'notifications', label: 'Notificaciones' },
  ];

  return (
    // Agregamos md:sticky, md:top-6 y h-fit
    <div className="w-full md:w-1/4 bg-violet-500 rounded-lg shadow-lg p-4 h-fit">
      <h2 className="text-3xl font-bold mb-4 text-white">Ajustes del Perfil</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-lg text-left px-4 py-2 rounded-md transition-colors duration-300
                ${activeTab === item.id ? 'bg-violet-700 font-bold' : 'hover:bg-violet-600'}
              `}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Profile = () => {
  /* El valor por defecto sera el de editar el perfil */
  const [activeTab, setActiveTab] = useState('edit-profile');

  return (
    <div className="wrap-break-word overflow-y-auto h-full p-6">
      <div className="max-w-8xl lg:mx-5">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Menus */}
          <div className="w-full md:w-3/4">
            {activeTab === 'edit-profile' && <EditProfileForm />}
            {activeTab === 'notifications' && <EditNotifications />}
          </div>
        </div>
      </div>
    </div>
  );
};
