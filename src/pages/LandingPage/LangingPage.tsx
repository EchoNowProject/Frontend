import React from 'react';
import './LandingPage.css';
import Navbar from '@/components/Navbar/Navbar';
import Card from '@/components/Card/Card';

export default function LandingPage() {
  return (
    <div id="main">
      <Navbar />
      <div className="bg-blue-200">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
