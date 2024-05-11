import Editor from './Components/Editor/Editor.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Output from './Components/Output/Output.jsx'
import "./App.css"
import { useContext, useEffect } from 'react';
import ThemeContext from './context/ThemeContext/ThemeContext.js';

function App() {

  const { isDark} = useContext(ThemeContext);

  useEffect(() => {
    const bodyStyle = document.querySelector("body").style;
    if (!isDark) {
      bodyStyle.backgroundImage = "linear-gradient(to left, #fff, #fff)";

    } else {
      bodyStyle.backgroundImage = "linear-gradient(to left, #07052e, #1c002a)";
    }
  }, [isDark])

  return (
    <>
      <Navbar />
      <main style={!isDark ? { backgroundColor: "#fff" } : null} className='main'>
        <Editor />
        <Output />
      </main>
    </>
  )
}

export default App
