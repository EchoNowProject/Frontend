import React from 'react';
import './LandingPage.css';
import Navbar from '@/components/Navbar/Navbar';
import Card from '@/components/Card/Card';

export default function LandingPage() {
  return (
    <div id="main">
      <Navbar />
      <h1>Habla, conecta, comparte. Todo en vivo.</h1>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="m-5">
            <Card card={{ title: 'HOLA MUNDO', text: 'asdasdasdad', hasImage: false }} />
          </div>
        </div>
      </div>
    </div>
  );
}
