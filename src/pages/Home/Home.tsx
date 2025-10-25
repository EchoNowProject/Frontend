import React from 'react';
import './Home.css';
import Sidebar from '@/components/UI/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className="h-screen bg-custom-color">
      <Sidebar />
      <h1>Welcome to the Home Pageaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
      <p className="text-blue-600 dark:text-sky-400">The quick brown fox...</p>
    </div>
  );
}
