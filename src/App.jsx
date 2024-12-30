import React from 'react'

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Project'
import Contact from './sections/Contact'
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}
