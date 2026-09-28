import { useCallback, useEffect, useRef, useState } from "react"
import { techStack } from "../constants/constants"

const Carousel = () => {
  const viewportRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [isPlaying, setIsPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [isPointerOver, setIsPointerOver] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)

  const updateSliderState = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const cards = viewport.querySelectorAll(".tech-carousel__card")
    const firstCard = cards[0]
    const secondCard = cards[1]
    const cardStep = firstCard && secondCard
      ? secondCard.offsetLeft - firstCard.offsetLeft
      : firstCard?.getBoundingClientRect().width ?? viewport.clientWidth

    setActiveIndex(cardStep > 0 ? Math.round(viewport.scrollLeft / cardStep) : 0)
    const hasOverflow = viewport.scrollWidth > viewport.clientWidth + 1
    setCanScrollPrevious(hasOverflow)
    setCanScrollNext(hasOverflow)
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const resizeObserver = new ResizeObserver(updateSliderState)
    resizeObserver.observe(viewport)
    updateSliderState()

    return () => resizeObserver.disconnect()
  }, [updateSliderState])

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const stopForReducedMotion = (event) => {
      if (event.matches) setIsPlaying(false)
    }

    motionPreference.addEventListener("change", stopForReducedMotion)

    return () => motionPreference.removeEventListener("change", stopForReducedMotion)
  }, [])

  const scroll = useCallback((direction) => {
    const viewport = viewportRef.current
    if (!viewport) return

    const cards = viewport.querySelectorAll(".tech-carousel__card")
    const firstCard = cards[0]
    const secondCard = cards[1]
    const cardStep = firstCard && secondCard
      ? secondCard.offsetLeft - firstCard.offsetLeft
      : firstCard?.getBoundingClientRect().width ?? viewport.clientWidth
    const maxScroll = viewport.scrollWidth - viewport.clientWidth
    if (maxScroll <= 1) return

    const atStart = viewport.scrollLeft <= 1
    const atEnd = viewport.scrollLeft >= maxScroll - 1
    const nextPosition = direction > 0 && atEnd
      ? 0
      : direction < 0 && atStart
        ? maxScroll
        : viewport.scrollLeft + direction * cardStep
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    viewport.scrollTo({
      left: Math.max(0, Math.min(nextPosition, maxScroll)),
      behavior: reducedMotion ? "instant" : "smooth",
    })
  }, [])

  useEffect(() => {
    if (!isPlaying || isPointerOver || hasFocus) return

    const intervalId = window.setInterval(() => scroll(1), 3500)
    return () => window.clearInterval(intervalId)
  }, [hasFocus, isPlaying, isPointerOver, scroll])

  return (
    <div
      className="tech-carousel"
      onMouseEnter={() => setIsPointerOver(true)}
      onMouseLeave={() => setIsPointerOver(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false)
      }}
    >
      <div className="tech-carousel__heading">
        <div>
          <p className="tech-carousel__eyebrow">My toolkit</p>
          <h2 className="tech-carousel__title">Tools &amp; technologies</h2>
          <p className="tech-carousel__description">
            A few of the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="tech-carousel__controls">
          <span className="tech-carousel__counter" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")}
            <span> / {String(techStack.length).padStart(2, "0")}</span>
          </span>
          <button
            type="button"
            className="tech-carousel__arrow"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label={isPlaying ? "Pause automatic slide movement" : "Play automatic slide movement"}
            aria-pressed={isPlaying}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {isPlaying
                ? <path d="M8 5v14M16 5v14" />
                : <path d="m8 5 12 7-12 7z" />}
            </svg>
          </button>
          <button
            type="button"
            className="tech-carousel__arrow"
            onClick={() => scroll(-1)}
            disabled={!canScrollPrevious}
            aria-label="Show previous technologies"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="tech-carousel__arrow"
            onClick={() => scroll(1)}
            disabled={!canScrollNext}
            aria-label="Show next technologies"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="tech-carousel__viewport"
        ref={viewportRef}
        onScroll={updateSliderState}
        role="region"
        aria-label="Technology stack"
        aria-roledescription="carousel"
        tabIndex={0}
      >
        {techStack.map(({ id, name, icon }, index) => (
          <article
            key={id}
            className="tech-carousel__card"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${techStack.length}: ${name}`}
          >
            <div className="tech-carousel__icon">
              <img src={icon} alt="" loading="lazy" />
            </div>
            <h3>{name}</h3>
            <span className="tech-carousel__index">
              {String(index + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>

      <span className="sr-only" aria-live="polite" aria-atomic="true">
        Showing technology {activeIndex + 1} of {techStack.length}.
      </span>
    </div>
  )
}

export default Carousel