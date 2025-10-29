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
import DeleteOwner from "./assets/pages/DeleteOwner"
import Owners from "./assets/pages/Owners"
import { Stables } from "./assets/pages/Stables"
import Trainers from "./assets/pages/Trainers"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addRace" element={<AddRace/>} />
        <Route path="/adminHome" element={<AdminHome/>} />
        <Route path="/guestHome" element={<GuestHome/>} />
        <Route path="/races" element={<Races/>} />
        <Route path="/deleteOwner" element={<DeleteOwner/>} />
        <Route path="/owners" element={<Owners/>} />
        <Route path="/stables" element={<Stables/>} />
        <Route path="/trainers" element={<Trainers/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
