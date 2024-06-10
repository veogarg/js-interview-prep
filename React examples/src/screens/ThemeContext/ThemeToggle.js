import React, {useContext} from 'react'
import  { ThemeContext } from './ThemeProvider'
import "./style.css"

const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={theme === "light" ? "light-theme" : "dark-theme"}>
        Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  )
}

export default ThemeToggle