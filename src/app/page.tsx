'use client';

import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
        <h1 className="text-center font-bold tracking-tight">
          <span className="block text-6xl md:text-8xl leading-normal bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in pb-4">
            Global Language Bridge
          </span>
          <span className="block text-6xl md:text-8xl leading-normal bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent animate-fade-in pb-4">
            Work in Progress
          </span>
        </h1>
      </main>
    </>
  );
}
