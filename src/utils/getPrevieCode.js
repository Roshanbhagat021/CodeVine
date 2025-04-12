export function getPreviewCode(HTML,CSS,JS) {
  return `<html>
          <head>
            <style>
            ${CSS}
            *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
           
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
}
