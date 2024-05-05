import './App.css'
import Editor from './Components/Editor/Editor.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"

function App() {

  return (
    <>
      <Navbar />
      <main className='main'>
        <Editor/>
      </main>
    </>
  )
}

export default App
