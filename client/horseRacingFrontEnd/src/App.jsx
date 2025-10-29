import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Update from "./assets/pages/Update"
import Add from "./assets/pages/Add"
import Horse from "./assets/pages/horse"
import Home from "./assets/pages/Home"
import AddRace from "./assets/pages/AddRace"
import AdminHome from "./assets/pages/AdminHome"
import GuestHome from "./assets/pages/GuestHome"
import Races from "./assets/pages/Races"
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addRace" element={<AddRace/>} />
        <Route path="/adminHome" element={<AdminHome/>} />
        <Route path="/guestHome" element={<GuestHome/>} />
        <Route path="/races" element={<Races/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
