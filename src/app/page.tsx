'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-center font-bold tracking-tight space-y-6">
        <span className="block text-6xl md:text-8xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
          Global Language Bridge
        </span>
        <span className="block text-6xl md:text-8xl mt-8 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
          Work in Progress
        </span>
      </h1>
    </main>
  );
}
