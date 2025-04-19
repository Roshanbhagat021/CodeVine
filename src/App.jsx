import { useContext, useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./Hooks/LocalStorageHook";
import Header from "./Components/Header";
import Preview from "./Components/Preview";
import EditorComponent from "./Components/EditorComponent";
import EditorTabs from "./Components/EditorTabs";
import { getEditorContent } from "./utils/getEditorContent";
import { getPreviewCode } from "./utils/getPrevieCode";

import { hmtlBoilerplate } from "./utils/htmlBoilerplate";
import LoadingScreen from "./Components/Loading";
import { themeContext } from "./Contexts/themeContext";

function App() {

  const [HTML, SetHTML] = useLocalStorage("HTML", '<!-- <div>Start coding ....</div> -->');
  const [CSS, SetCSS] = useLocalStorage("CSS", "");
  const [JS, SetJS] = useLocalStorage("JS", "");
  const [activeTab, setActiveTab] = useState("HTML");

  const [loading ,setLoading] = useState(true)
  const [editorFullScreen, setEditorFullScreen] = useState(false)
  const [previewFullScreen, setPreviewFullScreen] = useState(false)

  const [theme, setTheme] = useContext(themeContext)
  const PreviewCode = getPreviewCode(HTML, CSS, JS);


  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      setTheme("dark")
      document.documentElement.classList.add("dark");
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
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

 const BoilerPlateCode =hmtlBoilerplate(HTML)

 if(loading) return <LoadingScreen/>

 


  return (
    <>
    
    <div className="main min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header theme={theme} setTheme={setTheme} BoilerPlateCode={BoilerPlateCode} CSS={CSS} JS={JS}/>

      <div className="p-4 flex flex-col md:flex-row gap-4 h-[calc(100vh_-_72px)]">
        {!previewFullScreen && <div title="Editor" className="flex-1 light-theme-color flex flex-col border-2 border-transparent bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Tabs */}
          <EditorTabs activeTab={activeTab} setActiveTab={setActiveTab} editorFullScreen={editorFullScreen} setEditorFullScreen={setEditorFullScreen} />

          {/* Editor */}
          <EditorComponent editorProps={editorProps} />

        </div>}

        {/* Preview */}
        {!editorFullScreen && <Preview PreviewCode={PreviewCode} previewFullScreen={previewFullScreen} setPreviewFullScreen={setPreviewFullScreen}/>}
      </div>
    </div>
    </>
  );
}

export default App;
