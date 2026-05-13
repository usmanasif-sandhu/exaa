import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-triggered fade / lift. Respects prefers-reduced-motion.
 */
function motionReduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Reveal({ children, className = '', delay = 0, threshold = 0.1 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(motionReduced)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (motionReduced()) {
      return
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`.trim()}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
