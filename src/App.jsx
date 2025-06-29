// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Work from './Work.jsx'
import Contact from './Contact.jsx'

export default function App() {

  return (
    <main className="max-w-7xl mx-auto relative">
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  )
}

