import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-64 relative">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
        <div className="absolute inset-1 rounded-full border-4 border-primary border-t-transparent animate-spin-slow"></div>
        <div className="absolute inset-2 rounded-full border-4 border-light border-t-transparent animate-spin-reverse"></div>
      </div>
      <p className="ml-4 text-light text-xl">Loading...</p>
    </div>
  );
}
