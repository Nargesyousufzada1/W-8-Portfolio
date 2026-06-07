import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);

    function toggleTheme() {
        setDarkMode(prev => !prev);
    }
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme ? "dark" : "light"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}
export default ThemeProvider;