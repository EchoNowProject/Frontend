import React from 'react';
import './LandingPage.css';
import Message3Text from '@/icons/Message3Text';

export default function LandingPage() {
  return (
    <div id="main">
      {/* Container */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center justify-between">
          <div className="ms-20 mt-50 space-y-3 text-shadow-lg text-left">
            <h1 className="font-extrabold sm:text-5xl md:text-7xl">
              Habla <br /> conecta <br />
              comparte <br /> Todo en vivo.
            </h1>
          </div>
          {/* Icono de micrófono (Heroicons) */}
          <h1 className="icon mt-50 me-30 flex items-center justify-center">
            <Message3Text />
          </h1>
        </div>
      </div>
    </div>
  );
}
