import {  useState } from "react";
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

  const editorProps = getEditorContent(
    activeTab,
    HTML,
    CSS,
    JS,
    SetHTML,
    SetCSS,
    SetJS
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header />

      <div className="p-4 flex flex-col md:flex-row gap-4 h-[calc(100vh_-_72px)]">
        <div className="flex-1 flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden">

          {/* Tabs */}
          <EditorTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Editor */}
          <EditorComponent editorProps={editorProps} />
        </div>

        {/*Preview */}
        <Preview PreviewCode={PreviewCode} />
      </div>
    </div>
  );
}

export default App;
