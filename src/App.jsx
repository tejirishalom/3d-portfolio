import { useCallback, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import WebsiteLoader from "./components/WebsiteLoader"
import Hero from "./Sections/Hero"

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
      </Routes>
    </>
  )
}

export default App
