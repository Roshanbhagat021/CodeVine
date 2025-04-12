import {  useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./Hooks/LocalStorageHook";
import Header from "./Components/Header";
import Preview from "./Components/Preview";
import EditorComponent from "./Components/EditorComponent";
import EditorTabs from "./Components/EditorTabs";
import { getEditorContent } from "./utils/getEditorContent";
import { getPreviewCode } from "./utils/getPrevieCode";

function App() {
  const [HTML, SetHTML] = useLocalStorage("HTML", "");
  const [CSS, SetCSS] = useLocalStorage("CSS", "");
  const [JS, SetJS] = useLocalStorage("JS", "");
  const [activeTab, setActiveTab] = useState("HTML");

  const PreviewCode = getPreviewCode(HTML,CSS,JS)

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') ;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDarkScheme.matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const editorProps = getEditorContent(
    activeTab,
    HTML,
    CSS,
    JS,
    SetHTML,
    SetCSS,
    SetJS
  );

  console.log(theme);

  return (
    <div className="main min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header theme={theme} setTheme={setTheme} />

      <div className="p-4 flex flex-col md:flex-row gap-4 h-[calc(100vh_-_72px)]">
        <div className="light-theme-color flex-1 flex flex-col border-2 border-transparent bg-gray-800 rounded-lg shadow-lg overflow-hidden">

          {/* Tabs */}
          <EditorTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Editor */}
          <EditorComponent editorProps={editorProps}  theme={theme}/>
        </div>

        {/*Preview */}
        <Preview PreviewCode={PreviewCode} />
      </div>
    </div>
  );
}

export default App;
