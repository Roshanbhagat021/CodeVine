import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800 z-50">
    <div className="flex space-x-6 text-[100px] font-mono font-bold">
      <span className="animate-bounce-scale-fast text-purple-600">{`{`}</span>
      <span className="animate-bounce-scale-slow text-pink-600">{`}`}</span>
    </div>
    <p className="mt-6 text-gray-700 text-lg font-medium italic tracking-wide">
      Loading your magical world....
    </p>
  </div>
  );
};

export default LoadingScreen;
