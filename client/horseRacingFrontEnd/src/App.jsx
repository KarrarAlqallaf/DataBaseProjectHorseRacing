import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Update from "./assets/pages/Update"
import Add from "./assets/pages/Add"
import Horse from "./assets/pages/horse"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Horse/>}/>
        <Route path="/add" element={<Add/>} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
