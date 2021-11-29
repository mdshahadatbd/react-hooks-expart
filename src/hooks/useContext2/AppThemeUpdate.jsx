import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

// export const ThemeContext = React.createContext()

export default function AppThemeUpdate() {
    return (
        <ThemeProvider>
            <FunctionContextComponent/>
        </ThemeProvider>
        )
}

