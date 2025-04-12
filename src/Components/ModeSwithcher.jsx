import { useEffect, useState } from 'react';

const ModeSwitcher = ({theme,setTheme}) => {
  

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
//     <div className="flex justify-end p-2 ">
//   <button
//     onClick={toggleTheme}
//     className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ${
//       theme === 'light'
//         ? 'bg-gray-300'
//         : 'bg-gradient-to-r from-gray-700 to-gray-900'
//     }`}
//   >
//     <div
//       className={`w-6 h-6 rounded-full cursor-pointer shadow-md transform transition-transform duration-300 flex items-center justify-center text-lg ${
//         theme === 'light'
//           ? 'translate-x-0 bg-white text-yellow-500'
//           : 'translate-x-8 bg-gray-800 text-white'
//       }`}
//     >
//       {theme === 'light' ? '🌞' : '🌙'}
//     </div>
//   </button>
// </div>
<div className="flex  justify-end p-2">
  <button
    onClick={toggleTheme}
    className={`w-16 h-8 flex  items-center rounded-full p-1 transition duration-300 ${
      theme === 'light'
        ? 'bg-gray-300'
        : 'bg-gradient-to-r from-gray-700 to-gray-900'
    }`}
  >
    <div
      className={`w-6 h-6 rounded-full cursor-pointer shadow-md transform transition-transform duration-300 flex items-center justify-center text-lg ${
        theme === 'light'
          ? 'translate-x-0 bg-white text-yellow-500'
          : 'translate-x-8 bg-gray-800 text-white'
      }`}
      style={{ height: '32px', width: '32px' }} // 👈 setting exact size to match 32px = h-8
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </div>
  </button>
</div>


  );
};

export default ModeSwitcher;
