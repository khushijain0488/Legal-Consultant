import React from 'react';
import { Waves as WaveLg } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gray-50 p-12">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">How We Can Help You</h1>
      <div className="w-32 h-1 bg-blue-600 mb-8"></div>
      <p className="text-2xl text-gray-600 mb-12">We are your legal consultant</p>
      <WaveLg className="w-24 h-24 text-blue-600 animate-pulse" />
    </div>
  );
}

export default Services;