import React from 'react'

function EditorTabs({activeTab, setActiveTab}) {
  return (
    <div className="flex border-b border-gray-700">
    {["HTML", "CSS", "JS"].map((tab) => (
      <button
        key={tab}
        className={`px-4 py-2 text-sm font-bold transition-colors duration-200 h-[40px] ${
          activeTab === tab
            ? "bg-gray-700 border-b-2 border-indigo-500 text-indigo-400"
            : "hover:bg-gray-700"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
  )
}

export default EditorTabs