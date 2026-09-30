import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const FadeUpSection = ({
  as: Element = "div",
  children,
  className = "",
  id,
  staggerChildren = 0.08,
  yOffset = 40,
  duration = 0.8,
  delay = 0,
}) => {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          stagger: staggerChildren,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    },
    { scope: containerRef, dependencies: [delay, duration, staggerChildren, yOffset] }
  )

  return (
    <Element ref={containerRef} className={className} id={id}>
      {children}
    </Element>
  )
}

export default FadeUpSection
