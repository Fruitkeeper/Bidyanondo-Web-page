'use client';

import React from 'react';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Bienvenue sur mon site</h1>
        <p className="mt-4">Créé avec Next.js et déployé sur Vercel</p>
      </div>
    </main>
  )
} 