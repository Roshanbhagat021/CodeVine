import React from "react";
import ModeSwitcher from "./ModeSwithcher";

function Header() {
  return (
    <header className="flex sticky top-0 z-10 justify-between items-center mb-2 bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl font-extrabold tracking-wide">CODEVINE</h1>
      <ModeSwitcher />
    </header>
  );
}

export default Header;
