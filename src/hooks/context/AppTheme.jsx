import React, { useState } from 'react'
import FunctionContextComponent from '../context2/FunctionContextComponent'
import ClassContextComponent from '../context2/ClassContextComponent'

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
