import React from "react";
import ModeSwitcher from "./ModeSwithcher";
import DownloadCode from "./DownloadCode";

function Header({ theme, setTheme,BoilerPlateCode,CSS,JS }) {
  return (
    // <header className="flex sticky top-0 z-10 rounded-b justify-between items-center  bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
    //   <h1 className="text-4xl font-extrabold tracking-wide">CODEVINE</h1>
    //   <DownloadCode BoilerPlateCode={BoilerPlateCode} CSS={CSS} JS={JS}/>
    //   <ModeSwitcher theme={theme} setTheme={setTheme} />
    // </header>
    <header className="flex flex-wrap sticky top-0 z-10 justify-between items-center bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-b">
  {/* Logo */}
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2 md:mb-0">
    CODEVINE
  </h1>

  {/* Right side buttons (wrapped into flex) */}
  <div className="flex items-center gap-3 flex-wrap">
    <DownloadCode BoilerPlateCode={BoilerPlateCode} CSS={CSS} JS={JS} />
    <ModeSwitcher theme={theme} setTheme={setTheme} />
  </div>
</header>

  );
}

export default Header;
