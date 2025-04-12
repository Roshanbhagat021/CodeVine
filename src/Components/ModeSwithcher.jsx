import { useEffect, useState } from 'react';

const ModeSwitcher = ({theme,setTheme}) => {
  

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md">
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ModeSwitcher;
