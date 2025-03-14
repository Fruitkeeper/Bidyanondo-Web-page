'use client';

import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Global Language Bridge
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Bridging cultures through language and understanding
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about-image.jpg"
              alt="Global Language Bridge team"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-500"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600">
              Global Language Bridge is dedicated to breaking down language barriers
              and fostering cross-cultural understanding. We believe that effective
              communication is the key to building bridges between communities and
              creating lasting connections worldwide.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-lg text-gray-600">
              We envision a world where language differences no longer hinder
              collaboration, learning, and mutual understanding. Through our work,
              we strive to make this vision a reality.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 