import React from 'react';

const ThemeContext = React.createContext({
    theme: {},
    setTheme: () => {}
});

export default ThemeContext;