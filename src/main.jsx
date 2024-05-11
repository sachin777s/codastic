import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageContextProvider from './context/LanguageContext/LanguageContextProvider.jsx'
import ThemeContextProvider from './context/ThemeContext/ThemeContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </LanguageContextProvider>
)
