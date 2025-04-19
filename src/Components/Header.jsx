import React from "react";
import ModeSwitcher from "./ModeSwithcher";
import DownloadCode from "./DownloadCode";

function Header({ BoilerPlateCode,CSS,JS }) {


  return (
    <header className="flex flex-wrap sticky top-0 z-10 justify-between items-center bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-b">
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2 md:mb-0 w-full text-center md:w-auto md:text-left">
        CODEVINE
      </h1>

      <div className="flex items-center gap-3 flex-wrap w-full justify-center md:w-auto md:justify-end">
        <DownloadCode BoilerPlateCode={BoilerPlateCode} CSS={CSS} JS={JS} />
        <ModeSwitcher />
      </div>
    </header>
  );
}

export default Header;
