import React, { createContext, useState, useMemo, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const ColorModeContext = createContext();

const ColorModeProvider = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('color-mode');
        return savedMode ? savedMode : (prefersDarkMode ? 'dark' : 'light');
    })

    useEffect(() => {
        localStorage.setItem('color-mode', mode);
    })

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }

    const value = useMemo(() => ({ mode, toggleColorMode }), [mode]);

    return (
        <ColorModeContext.Provider value={value}>
            {children}
        </ColorModeContext.Provider>
    )
}

const useColorMode = () => {
    const context = React.useContext(ColorModeContext);
    if (context === undefined) {
        throw new Error('useColorMode must be used within a ColorModeProvider');
    }
    return context;
}

export { ColorModeContext, ColorModeProvider, useColorMode }