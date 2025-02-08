import React from 'react';

const FindLawyer = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      <div className="w-1/2 flex flex-col justify-center p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Find a Right Lawyer</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Search for and connect with attorneys in your area for consultations and one-on-one legal help
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
          alt="Legal consultation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default FindLawyer;