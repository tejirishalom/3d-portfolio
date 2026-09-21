import { useCallback, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import WebsiteLoader from "./components/WebsiteLoader"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"
import Testimonials from "./Sections/testimonials"
import Footer from "./components/Footer"


const App = () => {
  const [sceneReady, setSceneReady] = useState(false)
  const { pathname } = useLocation()

  const handleSceneReady = useCallback(() => {
    setSceneReady(true)
  }, [])

  const isReady = pathname !== "/" || sceneReady

  return (
    <>
      <WebsiteLoader ready={isReady} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero onSceneReady={handleSceneReady} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
