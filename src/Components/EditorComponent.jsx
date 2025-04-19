import { Editor } from "@monaco-editor/react";
import React, { useContext } from "react";
import { themeContext } from "../Contexts/themeContext";

function EditorComponent({editorProps}) {
  
  const [theme ]= useContext(themeContext)

  return (
    <Editor
      defaultLanguage={editorProps.language}
      value={editorProps.value}
      onChange={editorProps.onChange}
      theme={theme=="light"?"vs-dark":""}
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: true,
        lineHeight: 30,
        fontSize: "18px",
      }}
    />
  );
}

export default EditorComponent;
