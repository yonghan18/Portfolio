import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Work from './Work.jsx'
import Achievements from './Achievements.jsx'
import Contact from './Contact.jsx'

export default function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Achievements />
      <Contact />
    </main>
  )
}

