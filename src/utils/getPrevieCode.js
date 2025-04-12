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
            body {
              color: white;
              // background-color: #1E1E1E;
              // background-color:white;
              // background-color: #;
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
