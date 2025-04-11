export function getEditorContent(activeTab, HTML, CSS, JS, SetHTML, SetCSS, SetJS) {
    switch (activeTab) {
      case "HTML":
        return {
          value: HTML,
          language: "html",
          onChange: (val) => val !== undefined && SetHTML(val),
          color: "text-blue-400",
        };
      case "CSS":
        return {
          value: CSS,
          language: "css",
          onChange: (val) => val !== undefined && SetCSS(val),
          color: "text-green-400",
        };
      case "JS":
        return {
          value: JS,
          language: "javascript",
          onChange: (val) => val !== undefined && SetJS(val),
          color: "text-yellow-400",
        };
      default:
        return {};
    }
  }
  