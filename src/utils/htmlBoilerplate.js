export function hmtlBoilerplate(HTML) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PreviewCode | Downloaded from CodeVine</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    </style>
  </head>
    <body>
      ${HTML}
    </body>
</html>`;
}
