import { useContext } from "react";
import { themeContext } from "../Contexts/themeContext";

export function getPreviewCode(HTML,CSS,JS) {

  const [theme] =useContext(themeContext)
  
  return `<html>
          <head>
            <style>
            ${CSS}
            *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body{
            ${theme == "light"? "color:white": "color:dark"}
            
            }

            </style>
          </head>
          <body class="preview-body">
            ${HTML}
            <script>
            ${JS}
            </script>
          </body>
        </html>
      `;
}
