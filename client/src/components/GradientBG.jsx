import React from 'react';

const GradientBackground = ({ children }) => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-70 animate-gradient1"></div>
      <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl opacity-70 animate-gradient2"></div>
      <div className="absolute top-1/3 left-2/3 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-gradient-to-r from-yellow-500 to-red-500 rounded-full blur-3xl opacity-70 animate-gradient3"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
