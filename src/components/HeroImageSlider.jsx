import { useEffect, useState } from 'react'

const INTERVAL_MS = 5500

export default function HeroImageSlider({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (slides.length <= 1 || paused || reduceMotion) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [slides.length, paused, reduceMotion])

  if (!slides?.length) return null

  const showDots = slides.length > 1

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role={showDots ? 'region' : undefined}
      aria-roledescription={showDots ? 'carousel' : undefined}
      aria-label={showDots ? 'Featured campus scenes' : undefined}
    >
      {slides.map((slide, i) => (
        <img
          key={`hero-slide-${i}`}
          src={slide.src}
          alt={slide.alt}
          width={800}
          height={960}
          className={`absolute inset-0 z-0 h-full w-full object-cover ${
            reduceMotion ? '' : 'transition-opacity duration-[700ms] ease-out '
          }${i === index ? 'opacity-100 z-[1]' : 'opacity-0'}`}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding={i === 0 ? 'sync' : 'async'}
        />
      ))}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-exaa-900/25 via-transparent to-transparent" aria-hidden />
      {showDots ? (
        <div className="absolute bottom-4 left-0 right-0 z-[3] flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1} of ${slides.length}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-2 rounded-full transition-[width,background-color] duration-200 ${
                i === index
                  ? 'w-8 bg-white/95 shadow-sm'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
