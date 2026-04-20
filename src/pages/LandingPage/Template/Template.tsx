import './Template.css';
import { Navbar } from '@/components/UI/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const Template = () => {
  return (
    <div id="main" className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Outlet /> {/* Aquí se renderiza la vista hija */}
      </main>
    </div>
  );
};
