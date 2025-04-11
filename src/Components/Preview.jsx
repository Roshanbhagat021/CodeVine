import React from 'react'

function Preview({PreviewCode}) {
  return (
    <div className="flex-1 overflow-hidden bg-gray-800 rounded-lg ">
          <label className=" text-green-400 font-bold block px-4 py-2 ">
            Preview
          </label>
          <iframe
            srcDoc={PreviewCode}
            title="Preview"
            sandbox="allow-scripts"
            className="w-full h-[90vh] bg-gray-900 border-2 border-gray-700  shadow-xl resize-y"
          ></iframe>
        </div>
  )
}

export default Preview