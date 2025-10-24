import './Template.css';
import React from 'react';
import Navbar from '@/components/UI/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Template() {
  return (
    <div id="main">
      <Navbar />
      <div>
        <Outlet /> {/* Aquí se renderiza la vista hija */}
      </div>
    </div>
  );
}
