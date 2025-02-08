import React from 'react';

const ExpertSupport = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      <div className="w-1/2 flex flex-col justify-center p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Expert Support</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Throughout our history, the goal has been clear: Give people good information and let them make their own choices.
        </p>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">OUR LOCATIONS</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">123 Anywhere St.</p>
              <p className="text-gray-600">Any City, State, Any Country</p>
              <p className="text-gray-600">(123) 456 7890</p>
            </div>
            <div>
              <p className="text-gray-600">123 Anywhere St.</p>
              <p className="text-gray-600">Any City, State, Any Country</p>
              <p className="text-gray-600">(123) 456 789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
          alt="Office space"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ExpertSupport;