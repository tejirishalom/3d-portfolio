import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import Button from "../components/Button"
import CanvasLoader from "../components/CanvasLoader"
import FadeUpSection from "../components/FadeUpSection"
import Space from "../components/Space"
import useCanvasVisibility from "../hooks/useCanvasVisibility"
import SEO from "../components/SEO"

const Github = () => {
  const { containerRef, isVisible, hasBeenVisible } = useCanvasVisibility()
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <>
      <SEO
        title="GitHub Projects | Shalom Tejiri"
        description="Explore Shalom Tejiri's open-source work and software development projects on GitHub."
        canonical="https://shalom-co.vercel.app/github"
      />
      <FadeUpSection as="section" className="relative flex h-[120vh] w-full flex-col overflow-hidden">
        <div className="relative z-10 mx-auto my-auto flex h-full w-full flex-col items-center justify-center gap-8 px-4 text-center pointer-events-none">
          <p className="font-generalsans text-2xl text-white-700 sm:text-3xl">
              Oops sorry this page is still under development,
              I am working on it and it will be ready soon.
              In the meantime you can check out my Github profile below
              for some of my projects....
          </p>
          <a
            href="https://github.com/tejirishalom/"
            className="pointer-events-auto"
          >
            <Button name="View my Github repositories" isBeam containerClass="sm:w-fit w-full sm:min-w-96 bg-sky-800/90" />
          </a>
        </div>

        <div ref={containerRef} aria-hidden="true" className="absolute inset-0 z-0 my-2 h-screen w-full">
          {hasBeenVisible && (
            <Canvas
              camera={{ position: [0, 0, 30], fov: 36 }}
              dpr={isMobile ? 1 : [1, 1.25]}
              frameloop={isVisible ? "always" : "never"}
              gl={{ antialias: !isMobile }}
            >
              <ambientLight intensity={1.5} />
              <directionalLight position={[10, 10, 10]} intensity={2} />
              <Suspense fallback={<CanvasLoader />}>
                <Space position={[-50, -20, 0]} />
              </Suspense>
            </Canvas>
          )}
        </div>
      </FadeUpSection>
    </>
  )
}

export default Github