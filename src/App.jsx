import { useCallback, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import WebsiteLoader from "./components/WebsiteLoader"
import Hero from "./Sections/Hero"
import About from "./Sections/About"


const App = () => {
  const [sceneReady, setSceneReady] = useState(false)

  const handleSceneReady = useCallback(() => {
    setSceneReady(true)
  }, [])

  return (
    <>
      <WebsiteLoader ready={sceneReady} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero onSceneReady={handleSceneReady} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
