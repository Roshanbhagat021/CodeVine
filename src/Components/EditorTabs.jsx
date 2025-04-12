import React from "react";

import fullScreen from "../assets/fullScreenIcon.png";
import smallScreen from "../assets/smallScreenIcon.png";

function EditorTabs({
  activeTab,
  setActiveTab,
  setEditorFullScreen,
  editorFullScreen,
}) {
  return (
    <div className="flex items-center  justify-between border-b border-gray-800">
      <div>
        {["HTML", "CSS", "JS"].map((tab) => (
          <button
            key={tab}
            className={` px-4 py-2 text-sm font-bold cursor-pointer transition-colors duration-200 h-[40px] ${
              activeTab === tab
                ? "tab bg-gray-600 border-b-2 border-indigo-500 text-indigo-400"
                : "non-active hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <button
        title={editorFullScreen ? "Minimize" : "Fullview"}
        onClick={() => setEditorFullScreen((prev) => !prev)}
        className="w-8 mr-4 bg-white rounded cursor-pointer "
      >
        <img
          src={editorFullScreen ? smallScreen : fullScreen}
          className="p-1.5"
          alt="fullScreen/smallScreen icon"
        />
      </button>
    </div>
  );
}

export default EditorTabs;
