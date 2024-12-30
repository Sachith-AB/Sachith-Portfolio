import React from 'react'

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Project'
import Contact from './sections/Contact'
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}
