import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './components/NavBar';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="Sachith-Portfolio/" element={<Home/>}/>
        <Route path="Sachith-Portfolio/about" element={<About />} />
        <Route path="Sachith-Portfolio/projects" element={<Projects />} />
        <Route path="Sachith-Portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
