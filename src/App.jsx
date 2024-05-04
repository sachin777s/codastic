import './App.css'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Editor height="50vh" width={"50vw"} defaultLanguage="css" language='css' defaultValue="// some comment" theme='vs-dark'/>;
    </>
  )
}

export default App
