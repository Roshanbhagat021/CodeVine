import React from "react";
import fullScreen from "../assets/fullScreenIcon.png";
import smallScreen from "../assets/smallScreenIcon.png";

function Preview({ PreviewCode, setPreviewFullScreen, previewFullScreen,theme }) {
  return (
    <div className="light-theme-color flex-1  overflow-hidden bg-gray-800 rounded-lg ">
      <div className="flex items-center px-4 py-2 justify-between">

      <label className=" text-green-400 font-bold block  ">
        Preview
      </label>
      <button
        onClick={() => setPreviewFullScreen((prev) => !prev)}
        className="w-8 mr-1 bg-white rounded cursor-pointer "
        title={previewFullScreen?"Minimise":"Fullview"}
      >
        <img
          src={previewFullScreen ? smallScreen : fullScreen}
          className="p-1.5 "
          alt="fullScreen/smallScreen icon"
        />
      </button>
      </div>
      <iframe
        srcDoc={PreviewCode}
        title="Preview"
        sandbox="allow-scripts"
        className={` w-full h-[calc(100vh-120px)] light-theme bg-[#1E1E1E] shadow-xl`}
      ></iframe>
    </div>
  );
}

export default Preview;
