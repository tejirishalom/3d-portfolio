import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useCallback, useState } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/constants'
import Space from '../components/Space'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Ring'
import Button from '../components/Button'
import About from './About'
import Projects from './Projects'
import Testimonials from './Testimonials'
import TechStack from './TechStack'
import Contact from './Contact'
import Work from './Work'
import FadeUpSection from '../components/FadeUpSection'
import useCanvasVisibility from '../hooks/useCanvasVisibility'
import SEO from '../components/SEO'



const Hero = ({ onSceneReady }) => {
  const [mainSceneReady, setMainSceneReady] = useState(false)
  const handleMainSceneReady = useCallback(() => {
    setMainSceneReady(true)
    onSceneReady?.()
  }, [onSceneReady])
 
  const isSmall = useMediaQuery({ query: '(max-width: 440px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const { containerRef, isVisible, hasBeenVisible } = useCanvasVisibility()

  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  return (
    <>
      <SEO
        title="Shalom Tejiri | Web Developer & Digital Product Designer"
        description="Shalom Tejiri is a Nigeria-based web developer and digital product designer creating websites, 3D experiences, and business automations."
        canonical="https://shalom-co.vercel.app/"
      />
      <FadeUpSection as="section" className="h-[120vh] w-full flex flex-col relative overflow-hidden">
        <div className="relative z-10 w-full h-full mx-auto my-auto flex flex-col lg:mt-48 sm:mt-36 mt-20 pointer-events-none">
            <p className='sm:text-3xl text-2xl text-white-700 text-center font-generalsans'>Hi, I am Shalom <span className='waving-hand'>👋</span></p>
            <h1 className='hero_tag sm:text-6xl text-4xl text-white-700 text_gradient font-bold text-center font-generalsans'>Web Developer &amp; Digital Product Designer</h1>
            <span className='hero_tag_line sm:text-xl text-2xl text-white-700/90 font-bold text-center font-generalsans'>“Dream big. Leave the rest of the product to me.”</span>
        </div>
      
      <div ref={containerRef} className="absolute inset-0 z-0 my-2 w-full h-screen">
        {hasBeenVisible && (
          <Canvas
            camera={{ position: [0, 0, 30], fov: 36 }}
            dpr={isMobile ? 1 : [1, 1.25]}
            frameloop={isVisible ? 'always' : 'never'}
            gl={{ antialias: !isMobile }}
          >
              <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={35} />
              <ambientLight intensity={1.5} />
              <directionalLight position={[10, 10, 10]} intensity={2} />

              <Suspense fallback={<CanvasLoader />}>
                <HackerRoom
                  position={sizes.deskPosition}
                  rotation={[0.55, -Math.PI, 0]}
                  rotationSpeed={0.07}
                  scale={sizes.deskScale}
                  onReady={handleMainSceneReady}
                />

                <group>
                  <ReactLogo position={sizes.reactLogoPosition}/>
                  <Cube position ={sizes.cubePosition} rotation={[0, -Math.PI / 2, 0 ]}/>
                  <Rings position ={sizes.ringPosition} />
                </group>
              </Suspense>

              {mainSceneReady && (
                <Suspense fallback={null}>
                  <Space position={[-50, -20, 0]} />
                </Suspense>
              )}
          </Canvas>
        )}
      </div>
    <div className="absolute bottom-7 left-0 right-0 w-full gap-5 z-0 c-space">
      <a href='#contact' className='w-fit bg-blue'>
          <Button name="Work with me" isBeam containerClass="sm:w-fit w-full sm:min-w-96 bg-sky-800/90" />
      </a>
      <br/>
      <a href='#projects'>
          <Button name='View projects' containerClass="sm:w-fit w-full sm:min-w-96 bg-inherit border border-sky-800/90" /> 
      </a>
    </div>      
      </FadeUpSection>
    <About id="about" />
    <Projects />
    <Work />
    <Testimonials />
    <TechStack />
    <Contact />
    </>
    
  )
}

export default Hero
