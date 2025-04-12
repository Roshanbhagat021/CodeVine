import React from "react";
import downloadIcon from "../assets/image.png";
import { downloadCode } from "../utils/downloadCode";

export default function DownloadCode({ BoilerPlateCode, CSS, JS }) {
  return (
    <button
      onClick={() => downloadCode(BoilerPlateCode, CSS, JS)}
      className="flex items-center gap-2 py-2 px-4 md:px-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 text-white font-semibold shadow-lg text-sm md:text-base"
    >
      <span>Download Code ↓</span>
      <img src={downloadIcon} className="w-5 md:w-7" alt="Download Icon" />
    </button>
  );
}
