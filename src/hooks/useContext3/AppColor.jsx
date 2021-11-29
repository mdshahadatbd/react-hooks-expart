import React, { useContext } from "react";
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    },
    cyan: {
        foreground: "#00FFFF",
        background: "#222222"
      },
      yellow: {
        foreground: " #FFC300",
        background: "#222222"
      }
  };
  
  const ThemeContext = React.createContext(themes);
  
export default function AppColor() {
    return (
      <ThemeContext.Provider value={themes.yellow}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);  
    return (    
    <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>  );
  }