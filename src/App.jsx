import { useCallback, useState, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import WebsiteLoader from "./components/WebsiteLoader"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"
import Testimonials from "./Sections/Testimonials"
import Footer from "./components/Footer"
import PrivacyPolicy from "./Sections/PrivacyPolicy"
import { SpeedInsights } from "@vercel/speed-insights/react"


const App = () => {
  const [sceneReady, setSceneReady] = useState(false)
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleSceneReady = useCallback(() => {
    setSceneReady(true)
  }, [])

  const isReady = pathname !== "/" || sceneReady

  return (
    <>
      <SpeedInsights />
      <WebsiteLoader ready={isReady} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero onSceneReady={handleSceneReady} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-statement" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App