import { createContext,useState } from "react";



export const ThemeContext = createContext({
    theme:'',
    setTheme: () => {}
});



export const ThemeContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('theme-dark');
    const value = { theme, setTheme };
    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
};