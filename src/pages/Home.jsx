import React, { useState } from 'react';
import { ArrowRight, Scale, BookOpen, Gavel, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-12">
        <h1 className="text-5xl font-bold mb-8">Know Your Rights</h1>
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <span>Explore More</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white p-12">
        <div className="space-y-8">
          <div className="group p-6 border rounded-lg hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-center space-x-4">
              <Scale className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Know Your Rights</h2>
            </div>
          </div>

          <div className="group p-6 border rounded-lg hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Know Your Lawyer</h2>
            </div>
          </div>

          <div className="group p-6 border rounded-lg hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-center space-x-4">
              <Gavel className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Know Hot Cases</h2>
            </div>
          </div>

          <div className="group p-6 border rounded-lg hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-center space-x-4">
              <ScrollText className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Know Your Law</h2>
            </div>
          </div>
        </div>
      </div>

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
}

export default Home;