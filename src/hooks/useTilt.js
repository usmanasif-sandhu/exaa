import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * 3D tilt toward cursor — no extra deps. Disabled when prefers-reduced-motion.
 */
export function useTilt(maxDegrees = 11) {
  const ref = useRef(null)
  const [reduce, setReduce] = useState(
    () =>
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [t, setT] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const fn = () => setReduce(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const onMove = useCallback(
    (e) => {
      if (reduce) return
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const rx = (py - 0.5) * -2 * maxDegrees
      const ry = (px - 0.5) * 2 * maxDegrees
      setT(
        `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`,
      )
    },
    [maxDegrees, reduce],
  )

  const onLeave = useCallback(() => {
    setT('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')
  }, [])

  return {
    ref,
    tiltProps: {
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: {
        transform: t,
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
        transformStyle: 'preserve-3d',
      },
    },
  }
}
