import React from 'react'

function Preview({PreviewCode}) {
  return (
    <div className="light-theme-color flex-1  overflow-hidden bg-gray-800 rounded-lg ">
          <label className=" text-green-400 font-bold block px-4 py-2 ">
            Preview
          </label>
          <iframe
            srcDoc={PreviewCode}
            title="Preview"
            sandbox="allow-scripts"
            className="w-full h-[90vh] light-theme bg-[#1E1E1E] shadow-xl resize-y"
          ></iframe>
        </div>
  )
}

export default Preview