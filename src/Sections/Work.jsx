import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import { workExperiences } from "../constants/constants"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import Developer from "../components/Developer"

const Work = () => {
  const [animationName, setAnimationName] = useState("idle")

  return (
    <section className="c-space my-20">
        <div className="w-full text-beige-300">
            <h3 className="head-text">My Work Experience</h3>
            <div className="work-container">
                <div className="work-canvas">
                    <Canvas>
                    <ambientLight intensity={3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penubra={0.5} />
                    <directionalLight position={[10,10,10]} intensity={1}/>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} />
                    <Suspense fallback={<CanvasLoader/>}>
                        <Developer animationName={animationName} position-y={-3} scale={3}/>
                    </Suspense>

                    </Canvas>
                </div>
                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map(({ id, name, pos, duration, icon, title, animation }) => (
                            <div
                                key={id}
                                className="work-content_container group"
                                role="button"
                                tabIndex={0}
                                onPointerOver={() => setAnimationName(animation)}
                                onKeyDown={(event) => {
                                  if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault()
                                    setAnimationName(animation)
                                  }
                                }}
                            >
                                <div className="flex flex-col h-full justify-start py-2">
                                    <div className="work-content_logo">
                                        <img src={icon} alt="logo" className="w-full h-full rounded-lg"/>
                                    </div>
                                    <div className="work-content_bar" />
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold text-beige-300/90">{name}</p>
                                    <p className="text-sm mb-5">{pos} -- {duration}</p>
                                    <p className="group-hover:text-white-700 transition ease-in-out duration-500">{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Work
