'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mon Site</h1>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Accueil</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">À propos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur mon site
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Créé avec Next.js et déployé sur Vercel
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            En savoir plus
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Fonctionnalité 1</h3>
            <p className="text-gray-600">Description de la première fonctionnalité</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Fonctionnalité 2</h3>
            <p className="text-gray-600">Description de la deuxième fonctionnalité</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Fonctionnalité 3</h3>
            <p className="text-gray-600">Description de la troisième fonctionnalité</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Mon Site. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
} 