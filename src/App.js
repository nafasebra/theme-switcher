import React, { useState } from 'react';
import Switcher from './component/switcher';
import ThemeContext from './context/ThemeContext';
import './App.css';


export default function App() {

  const [theme, setTheme] = useState({
    bgTheme: '#ffffff',
    fgTheme: '#34495e',
    checked: false
  });

  return ( 
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="app" style={{backgroundColor: theme.bgTheme}}>
        <h2 className="welcome-text" style={{color: theme.fgTheme}}> Theme switcher </h2> 
        <Switcher />
      </div>
    </ThemeContext.Provider>
  );
}