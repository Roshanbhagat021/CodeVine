import { useState, useRef, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import "./App.css";
import ModeSwitcher from "./Components/ModeSwithcher";
import useLocalStorage from "./Hooks/LocalStorageHook";

function App() {
  const [HTML, SetHTML] = useLocalStorage("HTML","");
  const [CSS, SetCSS] = useLocalStorage("CSS","");
  const [JS, SetJS] = useLocalStorage("JS","");

  const htmlEditorRef = useRef(null);
  const cssEditorRef = useRef(null);
  const jsEditorRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (htmlEditorRef.current) {
        htmlEditorRef.current.layout();
      }
      if (cssEditorRef.current) {
        cssEditorRef.current.layout();
      }
      if (jsEditorRef.current) {
        jsEditorRef.current.layout();
      }
    });

    if (htmlEditorRef.current) {
      resizeObserver.observe(htmlEditorRef.current);
    }
    if (cssEditorRef.current) {
      resizeObserver.observe(cssEditorRef.current);
    }
    if (jsEditorRef.current) {
      resizeObserver.observe(jsEditorRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const PreviewCode = `
    <html>
      <head>
        <style>
        ${CSS}
        *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        }
        body{
        color:white;
        background-color:#1E1E1E;
        padding: 10px;
        }
        </style>
      </head>
      <body id="iframe-body">
          ${HTML}
          <script>
          ${JS}
          </script>
      </body>
    </html>
  `;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex justify-between items-center mb-2 bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-4xl font-extrabold tracking-wide">CODEVINE</h1>
        <ModeSwitcher />
      </header>

      <div className="flex flex-col lg:flex-row gap-4 h-auto p-4 overflow-auto">
        <div className="flex-1 flex flex-col  overflow-auto">
          <div className="flex flex-col flex-grow">
            <label className="font-semibold mb-2 text-lg text-blue-400">HTML</label>
            <div
              ref={htmlEditorRef}
              className="resize-y overflow-hidden border-2 border-gray-700 rounded-md"
              style={{ minHeight: "150px", flexGrow: 1, height: "100%" }}
            >
              <Editor
                defaultLanguage="html"
                value={HTML}
                onChange={(value) => {
                  if (value !== undefined) {
                    SetHTML(value);
                  }
                }}
                theme="vs-dark"
                options={{
                  wordWrap: 'on',
                  minimap: { enabled: false },
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                  lineHeight: 25,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-semibold mb-2 text-lg text-green-400">CSS</label>
            <div
              ref={cssEditorRef}
              className="resize-y overflow-hidden border-2 border-gray-700 rounded-md"
              style={{ minHeight: "150px", flexGrow: 1, height: "100%" }}
            >
              <Editor
                defaultLanguage="css"
                value={CSS}
                onChange={(value) => {
                  if (value !== undefined) {
                    SetCSS(value);
                  }
                }}
                theme="vs-dark"
                options={{
                  wordWrap: 'on',
                  minimap: { enabled: false },
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                  lineHeight: 25,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-semibold mb-2 text-lg text-yellow-400">JavaScript</label>
            <div
              ref={jsEditorRef}
              className="resize-y overflow-hidden border-2 border-gray-700 rounded-md"
              style={{ minHeight: "150px", flexGrow: 1, height: "100%" }}
            >
              <Editor
                defaultLanguage="javascript"
                value={JS}
                onChange={(value) => {
                  if (value !== undefined) {
                    SetJS(value);
                  }
                }}
                theme="vs-dark"
                options={{
                  wordWrap: 'on',
                  minimap: { enabled: false },
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                  lineHeight: 25,
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <label className="font-semibold mb-2 text-xl text-indigo-400 block">Preview</label>
          <iframe
            srcDoc={PreviewCode}
            title="Preview"
            sandbox="allow-scripts"
            className="w-full h-full bg-gray-900 border-2 border-gray-700  rounded-xl shadow-xl resize-y"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
