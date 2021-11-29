import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'

export const ThemeContext = React.createContext()

 function AppTheme(){
    const [darkTheme, setDarkTheme] = useState(true)


function toggleTheme() {
    setDarkTheme(preDarkTheme => !preDarkTheme)
}

    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent/>
                <ClassContextComponent/>
            </ThemeContext.Provider>
            
        </div>
    )
}

export default AppTheme;
