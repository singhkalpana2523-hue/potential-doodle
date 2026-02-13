
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <div className="h-24 bg-gradient-to-b from-[#f8f4ef] to-[#f1e6db]"></div>

      <About />
      <div className="h-24 bg-gradient-to-b from-[#f8f4ef] to-[#f1e6db]"></div>

      <Skills />
      <div className="h-24 bg-gradient-to-b from-[#f8f4ef] to-[#f1e6db]"></div>

      <Projects />
      <div className="h-24 bg-gradient-to-b from-[#f8f4ef] to-[#f1e6db]"></div>

      <Contact />
    </div>
  )
}
