import { Suspense, useState } from "react"
import { myProjects } from "../constants/constants"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Democomputer from "../components/Democomputer";
import FadeUpSection from "../components/FadeUpSection";
import useCanvasVisibility from "../hooks/useCanvasVisibility";
import { useMediaQuery } from "react-responsive";
import SEO from "../components/SEO";

const Projects = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0);
  const { containerRef, isVisible, hasBeenVisible } = useCanvasVisibility()
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction) => {
    setselectedProjectIndex(
      (prevIndex) => {
        if (direction == 'previous') {
          return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
        } else {
          return prevIndex === projectCount - 1 ? 0 :
            prevIndex + 1
        }
      }
    )
  }
  return (
    <>
      <SEO
        title="MY Featured Work | Shalom.Co"
        description="Explore selected web development, product design, 3D, and automation projects created by Shalom Tejiri."
        canonical="https://shalom-co.vercel.app/projects"
      />
      <FadeUpSection as="section" className="c-space my-20 snap-center" id="projects">
        <p className="head-text">My Work</p>

        <div className="grid lg:grid-cols-2 items-center grid-cols-1 mt-12 gap-5  w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>
            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img src={currentProject.logo} alt="project logo" className="w-10 h-10 shadow-sm" />
            </div>
            <div className="flex flex-col gap-5 text-beige-300 my-5">
              <p className="text-beige-300 text-2xl font-semibold animatedText">{currentProject.title}</p>
              <p className="text-beige-300/90 animatedText">{currentProject.desc}</p>
              <p className="text-beige-300/90 animatedText">{currentProject.subdesc}</p>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-5">
              <div className="flex justify-center items-center gap-3">{currentProject.tags.map(
                (tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} className="w-fill h-fill" />
                  </div>
                ))}
              </div>

              <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer">
                <p className="text-beige-300/90 animatedText">View Live Project</p>
                <img src="/assets/arrow-up.png" alt="site link" className="w-3 h-3" />
              </a>
            </div>
            <div className="flex justify-between items-center mt-7">
              <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" alt="previous" className="w-4 h-4" />
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                <img src="/assets/right-arrow.png" alt="next" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div ref={containerRef} className="border border-blue bg-blue rounded-lg h-96 md:w-full">
            {hasBeenVisible && (
              <Canvas
                dpr={isMobile ? 1 : [1, 1.25]}
                frameloop={isVisible ? "always" : "never"}
                gl={{ antialias: !isMobile }}
              >
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <group scale={2.6} position={[-.5, -3, 0]} rotation={[0, -0.1, 0]}>
                      <Democomputer texture={currentProject.texture} />
                    </group>
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
              </Canvas>
            )}
          </div>
        </div>
      </FadeUpSection>
    </>

  )
}

export default Projects