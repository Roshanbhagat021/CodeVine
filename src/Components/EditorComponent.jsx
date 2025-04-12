import { Editor } from "@monaco-editor/react";
import React from "react";

function EditorComponent({editorProps,theme}) {
  console.log('editorProps: ', editorProps);
  console.log('theme: ', theme);
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
