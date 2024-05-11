import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

export default function ThemeContextProvider({ children }) {

  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
