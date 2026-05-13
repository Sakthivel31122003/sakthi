import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Footer from './component/Footer'
import Contact from './component/Contact'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
