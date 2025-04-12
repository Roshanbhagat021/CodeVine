import JSZip from "jszip";

export function downloadCode(BoilerPlateCode,CSS,JS){
    const zip = new JSZip();
    zip.file("index.html", BoilerPlateCode);
    zip.file("style.css", CSS);
    zip.file("script.js", JS);

    zip.generateAsync({ type: "blob" }).then((content) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "codevine-project.zip";
      link.click();
    });
  }