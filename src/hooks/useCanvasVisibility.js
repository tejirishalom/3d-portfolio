import { useEffect, useRef, useState } from "react"

const useCanvasVisibility = (rootMargin = "120px 0px") => {
  const containerRef = useRef(null)
  const canObserve = typeof IntersectionObserver !== "undefined"
  const [isVisible, setIsVisible] = useState(!canObserve)
  const [hasBeenVisible, setHasBeenVisible] = useState(!canObserve)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) setHasBeenVisible(true)
      },
      { rootMargin }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [rootMargin])

  return { containerRef, isVisible, hasBeenVisible }
}

export default useCanvasVisibility
