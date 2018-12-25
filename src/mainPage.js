import React, {useState} from 'react';
export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
export const ThemeContext = React.createContext({});

var stateTemp = (props) => {
    const [theme, setTheme] = useState(themes.dark);
    
    let setThemeByVal = (key) => {
        if(key === "light")
            setTheme(themes.light);
        else
            setTheme(themes.dark);
        
    }

    const themeState = {
        name: "ha ha user",
        id: "Super Theme",
        setTheme: setThemeByVal,
        selected: theme
    }

    return (
        <ThemeContext.Provider value={themeState}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default stateTemp;