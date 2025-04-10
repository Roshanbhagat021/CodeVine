import { useState } from "react";
import "./App.css";
import ModeSwitcher from "./Components/ModeSwithcher";

function App() {
  const [HTML, SetHTML] = useState("");
  const [CSS, SetCSS] = useState("");
  const [JS, SetJS] = useState("");

  const PreviewCode = `
    <html>
      <head>
        <style>
        ${CSS}
        </style>
      </head>
      <body>
         ${HTML}
         <script>
         ${JS}
         </script>
      </body>
    </html>
  `;

  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="flex justify-between items-center mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4  shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-4xl font-extrabold tracking-wide">CODEVINE </h1>
        <ModeSwitcher />
      </header>

      <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh_-_90px)] p-4 ">
        <div className="flex-1 flex flex-col gap-1 overflow-auto">
          <div className="flex flex-col flex-grow">
            <label className="font-semibold mb-2 text-lg text-blue-600">
              HTML
            </label>
            <textarea
              className="p-3 border-2 rounded-md font-mono text-xl resize-y min-h-[150px] max-h-[600px] shadow-lg flex-grow focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all"
              onChange={(e) => SetHTML(e.currentTarget.value)}
              placeholder="Html code ..."
            ></textarea>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-semibold mb-2 text-lg text-green-600">
              CSS
            </label>
            <textarea
              className="p-3 border-2 rounded-md font-mono text-xl resize-y min-h-[150px] max-h-[600px] shadow-lg flex-grow focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all"
              onChange={(e) => SetCSS(e.currentTarget.value)}
              placeholder="Css code ..."
            ></textarea>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-semibold mb-2 text-lg text-yellow-600">
              JavaScript
            </label>
            <textarea
              className="p-3 border-2 rounded-md font-mono text-xl resize-y min-h-[150px] max-h-[600px] shadow-lg flex-grow focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all"
              onChange={(e) => SetJS(e.currentTarget.value)}
              placeholder="Js code ..."
            ></textarea>
          </div>
        </div>

        {/* Preview Section */}
        <div className="flex-1 overflow-hidden">
          <label className="font-semibold mb-2 text-xl text-indigo-600 block">
            Preview 
          </label>
          <iframe
            srcDoc={PreviewCode}
            title="Preview"
            sandbox="allow-scripts"
            className="w-full h-full bg-white border-2 rounded-xl shadow-xl resize-y "
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
