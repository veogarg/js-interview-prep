import React from 'react'
import ThemeProvider from './ThemeProvider'
import ThemeToggle from './ThemeToggle'

const Theme = () => {
  return (
    <ThemeProvider>
        <ThemeToggle/>
    </ThemeProvider>
  )
}

export default Theme