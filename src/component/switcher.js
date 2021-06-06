import React, { useContext } from 'react';
import './switcher.css';
import ThemeContext from './../context/ThemeContext';

export default function Switcher() {

    const tContext = useContext(ThemeContext);

    let switchHandler = () => {
        if(!tContext.theme.checked) 
            tContext.setTheme({ bgTheme: '#34495e', fgTheme : '#ffffff', checked: true });
        else 
            tContext.setTheme({ bgTheme: '#ffffff', fgTheme : '#34495e', checked: false });
        console.log(tContext);
        console.log(tContext.theme);
        console.log(tContext.setTheme);
    }

    return(
        <label className="switch-container">
            <input type="checkbox" onChange={() => {switchHandler()}}/>
            <span className="slider"></span>
        </label>
    )
}