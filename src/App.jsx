import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Resume from './Components/Resume'
import Contact from './Components/Contact'


function App() {

  return (
    <>
     <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
