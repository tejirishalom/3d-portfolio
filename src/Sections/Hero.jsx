import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useCallback, useState } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/constants'
import Space from '../components/Space'


const Hero = ({ onSceneReady }) => {
  const [mainSceneReady, setMainSceneReady] = useState(false)
  const handleMainSceneReady = useCallback(() => {
    setMainSceneReady(true)
    onSceneReady?.()
  }, [onSceneReady])
 
  const isSmall = useMediaQuery({ query: '(max-width: 440px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  return (
    <section className="h-screen w-full flex flex-col gap-1 relative overflow-hidden">
        <div className="relative z-10 w-full mx-auto flex flex-col lg:mt-48 sm:mt-36 mt-20 pointer-events-none">
            <p className='sm:text-3xl text-2xl text-white-700 text-center font-generalsans'>Hi, I am Shalom <span className='waving-hand'>👋</span></p>
            <h1 className='hero_tag sm:text-6xl text-4xl text-white-700 text_gradient font-bold text-center font-generalsans'>“Dream Big, </h1>
            <span className='hero_tag_line sm:text-xl text-2xl text-white-700/90  font-bold text-center font-generalsans'>Leave The Rest of the Product to Me. „</span>
        </div>
      
      <div className="absolute inset-0 z-0 w-full h-screen">
        <Canvas
          className='w-full h-full'
          camera={{ position: [0, 0, 30], fov: 36 }}
          dpr={[1, 1.5]}
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
          </Suspense>

          {mainSceneReady && (
            <Suspense fallback={null}>
              <Space position={[-50, -20, 0]} rotation={[0.55, -Math.PI, 0]} />
            </Suspense>
          )}
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
