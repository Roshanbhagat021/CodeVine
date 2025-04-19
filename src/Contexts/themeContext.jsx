import { createContext, useState } from "react";

export const themeContext = createContext("hello")


export function ThemeProvider({children}){
     const [theme, setTheme] = useState("light");

     return <themeContext.Provider value={[theme, setTheme]}>
            {children}
        </themeContext.Provider>
     
}