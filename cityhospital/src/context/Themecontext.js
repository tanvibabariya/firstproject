import { useReducer } from "react";
import { createContext } from "react";
import { TOGGLE_THEME } from "./Actiontype";
import { themereducer } from "./reducer/theme.reducer";

const ThemeContext = createContext();


const iniVal = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themereducer, iniVal)

const toggle_theme = (val) => {
    let newTheme = val === 'light' ? 'dark' : 'light';
    dispatch({ type: TOGGLE_THEME, payload: newTheme });

};

return (
    <ThemeContext.Provider value={{ ...state, toggle_theme }}>
        {children}

    </ThemeContext.Provider>
)
}
export default ThemeContext;