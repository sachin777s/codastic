import Editor from './Components/Editor/Editor.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Output from './Components/Output/Output.jsx'
import "./App.css"

function App() {

  return (
    <>
      <Navbar />
      <main className='main'>
        <Editor />
        <Output />
      </main>
    </>
  )
}

export default App
