import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

const WebsiteLoader = ({ ready }) => {
  const { progress, total } = useProgress()
  const [isMounted, setIsMounted] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (!ready) return undefined

    setIsExiting(true)
    const timeout = window.setTimeout(() => {
      setIsMounted(false)
    }, 420)

    return () => window.clearTimeout(timeout)
  }, [ready])

  if (!isMounted) return null

  const percentage = ready
    ? 100
    : total > 0
      ? Math.min(99, Math.round(progress))
      : 0

  return (
    <div
      className={`site-loader ${isExiting ? 'site-loader--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading the Shalom Co experience"
    >
      <div className="site-loader__content">
        <div className="site-loader__eyebrow">SHALOM.CO / BUILDING YOUR DREAMS</div>
        <div className="site-loader__title">Loading experience</div>
        <div className="site-loader__track" aria-hidden="true">
          <span style={{ width: `${percentage}%` }} />
        </div>
        <div className="site-loader__meta">
          <span>{ready ? 'Scene ready' : 'Preparing 3D environment'}</span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export default WebsiteLoader
